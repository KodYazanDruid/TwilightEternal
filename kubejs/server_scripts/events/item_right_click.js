const $FluxSlashEntity = java('cofh.redstonearsenal.entity.FluxSlash')
const $EvokerFangs = java('net.minecraft.world.entity.projectile.EvokerFangs')

const $LootContext = java('net.minecraft.world.level.storage.loot.LootContext')
const $LootContextParams = java('net.minecraft.world.level.storage.loot.parameters.LootContextParams')
const $LootContextParamSets = java('net.minecraft.world.level.storage.loot.parameters.LootContextParamSets')

const AnimatedHand = java('net.bettercombat.logic.AnimatedHand')
const PlayerAttackAnimatable = java('net.bettercombat.client.animation.PlayerAttackAnimatable')

const slashBaseCD = 40

const $LaserLensItem = java('com.buuz135.industrial.item.LaserLensItem')

onEvent('item.right_click', event => {
    const { player, item, hand, server, level } = event
    if (item.id == 'kubejs:create_manual') event.server.runCommandSilent(`execute as ${player.id} run create ponder`)

    if (item.id == 'minecraft:fire_charge') player.addItemCooldown(item.item, 20)

    if (item.id == EEt`starsteel_ingot`) {
        let ctx = $LootContext.Builder(level.minecraftLevel).withParameter($LootContextParams.THIS_ENTITY, player.minecraftPlayer).create($LootContextParamSets.PIGLIN_BARTER)
        let loot = server.minecraftServer.getLootTables().get(tfep + 'questing_ram_rewards').getRandomItems(ctx)
        loot.forEach(i => player.give(i))
        let count = 0
        player.server.minecraftServer.lootTables.getIds().forEach(i => {
            if (i.toString().includes('dungeons_arise')) console.log(++count + ': ' + i)
        })
        let volineTable = new Map()
        let vet = new $VolineEatTable().getVolineEatTable()
        vet.forEach(k => {
            if (vet.get(k).toString().length() > 2) {
                vet.get(k).forEach(i => {
                    volineTable.set(k, [i.namespace ? i : 'infernalexp:'+i, vet.get(k).get(i)])
                })
            } else {
                volineTable.set(k, ['empty', 0])
            }
        })
        volineTable.forEach((v, k) => player.tell('Input: ' + k + ' Output: ' + v[0] + ' Count: ' + v[1]))

    }

    if (item == "redstone_arsenal:flux_sword" && hand == MAIN_HAND) {
        if (!item.item.isEmpowered(item)) return
        let slash = new $FluxSlashEntity(player.level.minecraftLevel, player.minecraftLivingEntity, getEnchantLevel(item, 'minecraft:sweeping'))
        slash.duration *= 4
        slash.damage = 4 + (getEnchantLevel(item, 'minecraft:sweeping') * 1.5)
        let baseAS = player.getAttributeBaseValue('generic.attack_speed')
        let totalAS = +(player.getAttributeTotalValue('generic.attack_speed')).toFixed(1)
        let itemAS = +(item.item.getAttributeModifiers(EquipmentSlot.MAINHAND, item).get(Utils.getRegistry('attribute').get('minecraft:generic.attack_speed'))[0].amount).toFixed(1)
        let cd = slashBaseCD * ((baseAS + itemAS) / totalAS)

        server.scheduleInTicks((cd / 40) * 12, _ => {
            //This actually works fine but i wanted to increase its duration and do something with item cooldowns.
            //item.item.onLeftClick(player.minecraftPlayer, item)
            if (item.item.useEnergy(item, 2000, event.player.minecraftPlayer.abilities.instabuild)) {
                player.level.minecraftLevel.addFreshEntity(slash)
            }
            //player.minecraftPlayer.playerAnimator_setAnimation()
        })

        animatePlayer(event, 'bettercombat:one_handed_slash_horizontal_right', 'rightArm', (cd / 40) * 24)
        //player.minecraftPlayer.playAttackAnimation('bettercombat:one_handed_slash_horizontal_right', AnimatedHand.from(false, false), 24, 0)
        player.addItemCooldown(item.item, cd)
    }
})

onEvent('item.entity_interact', event => {
    const { player, item, target, hand, server, level } = event
    if (item == 'bundle' && target.type == 'twilightforest:quest_ram') {
        /* let ctx = $LootContext.Builder(level.minecraftLevel).withParameter($LootContextParams.THIS_ENTITY, player.minecraftPlayer).create($LootContextParamSets.PIGLIN_BARTER)
        let loot = server.minecraftServer.getLootTables().get(tfep + 'questing_ram_rewards').getRandomItems(ctx)
        loot.forEach(i => player.give(i)) */
        server.scheduleInTicks(4, _ => {
            item.count--
            player.giveInHand(bundleGen())
        })
    }
})
/* let count = 1
onEvent('player.tick', event => {
    const { player, item, target, hand, server, level } = event

    if(count++ != 20) return
    player.headArmorItem = Item.of('leather_helmet', randomColorNbt())
    player.chestArmorItem = Item.of('leather_chestplate', randomColorNbt())
    player.legsArmorItem = Item.of('leather_leggings', randomColorNbt())
    player.feetArmorItem = Item.of('leather_boots', randomColorNbt())
    count = 1
}) */