onEvent('recipes', event =>{
    const EGG = 'minecraft:turtle_egg'
    function elementalSpawn(modid, mob){
        event.recipes.summoningrituals
            .altar(TF+':transformation_powder')
            .input(`4x ${modid}:${mob}_rod`, '4x '+CS+':heap_of_experience', INF+':pink_slime', EGG)
            .mobOutput(SummoningOutput.mob(`${modid}:${mob}`).count(3))
    }
    elementalSpawn('minecraft', 'blaze')
    elementalSpawn('thermal', 'blitz')
    elementalSpawn('thermal', 'blizz')
    elementalSpawn('thermal', 'basalz')

    event.recipes.summoningrituals
        .altar('minecraft:stone_sword')
        .input('3x '+AP+':lit_withered_osseous_skull', '4x '+CS+':heap_of_experience', 'minecraft:coal_block', EGG)
        .mobOutput(SummoningOutput.mob('minecraft:wither_skeleton').count(3))
        
    event.recipes.summoningrituals
        .altar('minecraft:golden_sword')
        .input('4x minecraft:nether_gold_ore', '8x minecraft:porkchop', 'minecraft:crying_obsidian', EGG)
        .mobOutput(SummoningOutput.mob('minecraft:piglin'))
})

/* onEvent('summoningrituals.start', event => {
    const { level , player } = event
    Utils.server.getPlayer().dimen
}) */