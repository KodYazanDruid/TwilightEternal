/**
 * 
 * @param {Internal.PlayerEvent} event 
 */
global.boneMealEvent = event => {
}

onForgeEvent('net.minecraftforge.event.entity.player.BonemealEvent', event => global.boneMealEvent(event))

onEvent('worldgen.remove', event => {
    event.removeOres(ores => ores.blocks = ['create_dd:tin_ore', 'create_dd:deepslate_tin_ore'])
    event.removeOres(ores => {
        ores.blocks = ['create_dd:tin_ore', 'create_dd:deepslate_tin_ore']
        ores.biomes = /.*/
    })
})