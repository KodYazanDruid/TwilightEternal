/**
 * 
 * @param {Internal.PlayerEvent} event 
 */
global.boneMealEvent = event => {
}

onForgeEvent('net.minecraftforge.event.entity.player.BonemealEvent', event => global.boneMealEvent(event))

onEvent('worldgen.remove', event => {
    console.log('Removing tin ore from create_dd')
    event.removeOres(ores => ores.blocks = ['create_dd:tin_ore'])
})