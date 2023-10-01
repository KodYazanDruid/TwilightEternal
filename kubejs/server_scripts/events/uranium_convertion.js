onEvent('block.break', event => {
    let block = event.block
    if (block.id != 'kubejs:impure_uranium') return

    let melon_husk = block.createEntity("husk")
    melon_husk.x += 0.5
    melon_husk.z += 0.5
    melon_husk.setCustomName('Melon Husk')
    melon_husk.setCustomNameAlwaysVisible(true)
    melon_husk.setHeadArmorItem('melon')
    melon_husk.mergeFullNBT('{DeathLootTable:"twilight:automator/melon_husk"}')
    melon_husk.mergeFullNBT('{KubeJSPersistentData:{MelonHusk:1b}}')
    melon_husk.spawn()
})

onEvent('entity.spawned', event => {
    const { entity, server } = event
    if (!entity.fullNBT.KubeJSPersistentData.MelonHusk) return
    server.scheduleInTicks(5, event => {
        let rad = entity.fullNBT.ForgeData.radiation
        //let pers = entity.fullNBT.KubeJSPersistentData

        if (rad > 10000) entity.fullNBT.KubeJSPersistentData.Radiated = true
        else entity.fullNBT.KubeJSPersistentData.Radiated = false

        if (entity.removed || entity.deadOrDying || !entity.alive) return
        event.reschedule()
    })
})
// text: `Radiation: ${player.fullNBT.ForgeCaps["enlightened_end:player_variables"].radiation} rads`
// if (player.mainHandItem != 'compass' || player.offHandItem != 'compass')
let tick = 0
let rad = NaN
onEvent('player.tick', event => {
    const { player } = event
    if (tick % 5 == 0) { rad = player.fullNBT.ForgeCaps["enlightened_end:player_variables"].radiation }
    if (player.mainHandItem == 'compass' || player.offHandItem == 'compass') player.paint({ radiation: { text: `Radiation: ${rad} rads`, visible: true } })
    else player.paint({ radiation: { visible: false } })

    tick++
})

onEvent('player.logged_in', event => {
    const { player, server } = event
    player.paint({
        radiation: {
            type: 'text',
            text: 'Radiation',
            scale: 1,
            x: -4,
            y: -4,
            alignX: 'right',
            alignY: 'bottom',
            draw: 'ingame',
            visible: false
        }
    })
})


