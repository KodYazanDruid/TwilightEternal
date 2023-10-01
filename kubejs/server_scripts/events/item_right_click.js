const $FluxSlashEntity = java('cofh.redstonearsenal.entity.FluxSlash')
const $EvokerFangs = java('net.minecraft.world.entity.projectile.EvokerFangs')

const $LootContext = java('net.minecraft.world.level.storage.loot.LootContext')
const $LootContextParams = java('net.minecraft.world.level.storage.loot.parameters.LootContextParams')
const $LootContextParamSets = java('net.minecraft.world.level.storage.loot.parameters.LootContextParamSets')

onEvent('item.right_click', event => {
    const { player, item, hand, server, level } = event
    if (item.id == 'kubejs:create_manual') event.server.runCommandSilent(`execute as ${player.id} run create ponder`)

    if (item.id == EEt`starsteel_ingot`) {
        let ctx = $LootContext.Builder(level.minecraftLevel).withParameter($LootContextParams.THIS_ENTITY, player.minecraftPlayer).create($LootContextParamSets.PIGLIN_BARTER)
        let loot = server.minecraftServer.getLootTables().get(tfep + 'questing_ram_rewards').getRandomItems(ctx)
        loot.forEach(i => player.give(i) )
    }

    if (item == "redstone_arsenal:flux_sword") {
        if(!item.item.isEmpowered(item)) return
        let slash = new $FluxSlashEntity(player.level.minecraftLevel, player.minecraftLivingEntity, getEnchantLevel(item, 'minecraft:sweeping'))
        let cd = 40

        server.scheduleInTicks(12, _ => {
            if (item.item.useEnergy(item, 2000, event.player.minecraftPlayer.abilities.instabuild)) {
                player.level.minecraftLevel.addFreshEntity(slash)
            }
        })

        animatePlayer(event, 'kubejs:one_handed_slash_horizontal_right', 'rightArm')
        player.addItemCooldown(item.item, cd)
    }
})