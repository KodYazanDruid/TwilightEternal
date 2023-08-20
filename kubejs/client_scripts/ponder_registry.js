onEvent('ponder.registry', event=>{
    /* event.create('twilight:rune_embedder').scene('rune_embedder', 'The rune embedder multiblock.', 'kubejs:rune_embedder', (scene, util)=>{
        scene.showStructure()
        scene.text(60, 'Controller of the multiblock', [3, 1, 3]).attachKeyFrame()
    }) */
    event.create('twilight:draconic_rtg').scene('draconic_rtg', 'The draconic radioisotope thermoelectric generator multiblock.', 'kubejs:draconic_rtg', (scene, util)=>{
        scene.showStructure()
        scene.text(60, 'Controller of the multiblock', [3, 4, 3]).attachKeyFrame()
    })
})