onEvent('recipes', event => {
    event.recipes.thermal.chiller('minecraft:honey_block', Fluid.of('create:honey', 1000)).id('thermal:machines/chiller/chiller_honey_to_honey_block')
})