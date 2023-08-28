onEvent('item.right_click', event => {
    const { player, block, item } = event
    if (item.id == 'kubejs:create_manual') event.server.runCommandSilent(`execute as ${player.id} run create ponder`)
})