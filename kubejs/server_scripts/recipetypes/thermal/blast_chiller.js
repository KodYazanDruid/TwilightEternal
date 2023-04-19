onEvent('recipes', event => {
    event.recipes.thermal.chiller('minecraft:honey_block', Fluid.of('tconstruct:honey', 1000))
    event.recipes.thermal.chiller('minecraft:honey_block', Fluid.of('create:honey', 1000))
})