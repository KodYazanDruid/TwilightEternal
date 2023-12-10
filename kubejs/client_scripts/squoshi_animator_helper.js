const PlayerAnimationAccess = java("dev.kosmx.playerAnim.minecraftApi.PlayerAnimationAccess");
const PlayerAnimationRegistry = java("dev.kosmx.playerAnim.minecraftApi.PlayerAnimationRegistry");
const KeyframeAnimationPlayer = java("dev.kosmx.playerAnim.api.layered.KeyframeAnimationPlayer");
const FirstPersonMode = java("dev.kosmx.playerAnim.api.firstPerson.FirstPersonMode");
const FirstPersonConfiguration = java("dev.kosmx.playerAnim.api.firstPerson.FirstPersonConfiguration");
const SpeedModifier = java('dev.kosmx.playerAnim.api.layered.modifier.SpeedModifier');

const AnimationRegistry = java('net.bettercombat.client.animation.AnimationRegistry')
const AnimatedHand = java('net.bettercombat.logic.AnimatedHand')
const PlayerAttackAnimatable = java('net.bettercombat.client.animation.PlayerAttackAnimatable')

onEvent('client.init', event => {
    const AnimationFactory = java('dev.kosmx.playerAnim.minecraftApi.PlayerAnimationFactory')
    const ModifierLayer = java('dev.kosmx.playerAnim.api.layered.ModifierLayer')

    console.log('Registering animations')

    AnimationFactory.ANIMATION_DATA_FACTORY.registerFactory(
        new ResourceLocation('kubejs', 'animation'),
        42,
        value => {
            return new ModifierLayer()
        }
    )
    console.log('Successfully registered animations')
})

onEvent('player.data_from_server.animation', event => {
    let player = event.data.player
    let animId = new ResourceLocation(event.data.animation)
    let entities = event.level.getEntities()

    let keyframeAnimation
    switch (animId.namespace) {
        case 'kubejs':
            keyframeAnimation = PlayerAnimationRegistry.getAnimation(animId.toString())
            break
        case 'bettercombat':
            keyframeAnimation = AnimationRegistry.animations.get(animId.toString())
            break
    }

    let firstPersonConfiguration
    switch (event.data.type) {
        case 'rightArm':
            firstPersonConfiguration = new FirstPersonConfiguration().setShowLeftItem(false)
            break
        case 'leftArm':
            firstPersonConfiguration = new FirstPersonConfiguration().setShowRightItem(false)
            break
        case 'bothArms':
            firstPersonConfiguration = new FirstPersonConfiguration()
            break
    }
    let keyframeAnimationPlayer = new KeyframeAnimationPlayer(keyframeAnimation)
        .setFirstPersonMode(FirstPersonMode.THIRD_PERSON_MODEL)
        .setFirstPersonConfiguration(firstPersonConfiguration)

    //player.minecraftEntity.playAttackAnimation('bettercombat:one_handed_slash_horizontal_right', AnimatedHand.from(false, false), 24, 0)

    entities.forEach(entity => {
        if (entity.id == player) {
            let animation = PlayerAnimationAccess.getPlayerAssociatedData(entity.minecraftEntity).get("kubejs:animation")
            if (animation != null) {
                animation.setAnimation(keyframeAnimationPlayer)
                //player.playAttackAnimation(animId.toString(), AnimatedHand.from(event.data.type == 'leftArm', event.data.type == 'bothArms'), 24, 0)
            }
        }
    })
})