onEvent('recipes', event => {
    event.recipes.thermal.smelter('2x '+BR+':graphite_ingot', ['#forge:coal_coke', ['#forge:gems/sulfur', '#forge:dusts/sulfur']])
    event.recipes.thermal.smelter('4x '+DD+':industrial_iron_billet', [Item.of('tconstruct:round_plate', '{Material:"twilightforest:knightmetal"}'), 'thermal:steel_dust', 'thermal:tar'])
    event.recipes.thermal.smelter('3x '+BR+':ludicrite_ingot', [BR+':blutonium_ingot', TE+':twinite_ingot', 'thermal:enderium_ingot'])


})