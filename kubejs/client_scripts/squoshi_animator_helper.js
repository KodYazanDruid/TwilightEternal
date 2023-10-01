const PlayerAnimationAccess = java("dev.kosmx.playerAnim.minecraftApi.PlayerAnimationAccess");
const PlayerAnimationRegistry = java("dev.kosmx.playerAnim.minecraftApi.PlayerAnimationRegistry");
const KeyframeAnimationPlayer = java("dev.kosmx.playerAnim.api.layered.KeyframeAnimationPlayer");
const FirstPersonMode = java("dev.kosmx.playerAnim.api.firstPerson.FirstPersonMode");
const FirstPersonConfiguration = java("dev.kosmx.playerAnim.api.firstPerson.FirstPersonConfiguration");

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
    let entities = event.level.getEntities()

    entities.forEach(entity => {
        if (entity.id == player) {
            let animation = PlayerAnimationAccess.getPlayerAssociatedData(entity.minecraftEntity).get("kubejs:animation");
            if (animation != null) {
                if (event.data.type == 'rightArm') {
                    animation.setAnimation(
                        new KeyframeAnimationPlayer(PlayerAnimationRegistry.getAnimation(event.data.animation))
                            .setFirstPersonMode(FirstPersonMode.THIRD_PERSON_MODEL)
                            .setFirstPersonConfiguration(new FirstPersonConfiguration().setShowLeftItem(false))
                    )
                } else if (event.data.type == 'leftArm') {
                    animation.setAnimation(
                        new KeyframeAnimationPlayer(PlayerAnimationRegistry.getAnimation(event.data.animation))
                            .setFirstPersonMode(FirstPersonMode.THIRD_PERSON_MODEL)
                            .setFirstPersonConfiguration(new FirstPersonConfiguration().setShowRightItem(false))
                    )
                } else if (event.data.type == 'bothArms') {
                    animation.setAnimation(
                        new KeyframeAnimationPlayer(PlayerAnimationRegistry.getAnimation(event.data.animation))
                            .setFirstPersonMode(FirstPersonMode.THIRD_PERSON_MODEL)
                            .setFirstPersonConfiguration(new FirstPersonConfiguration())
                    )
                }
            }
        }
    })
})