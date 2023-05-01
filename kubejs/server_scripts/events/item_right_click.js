onEvent('item.right_click', event => {
    if (event.item.id.toString().includes('kubejs:create_manual')) event.server.runCommandSilent(`execute as ${event.entity.id} run create ponder`)
})