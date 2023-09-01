onEvent('recipes', event => {
    const recipe = event.recipes.thermal
    recipe.smelter('2x '+BR+':graphite_ingot', ['#forge:coal_coke', ['#forge:gems/sulfur', '#forge:dusts/sulfur']])
    recipe.smelter('4x '+DD+':industrial_iron_billet', [Item.of('tconstruct:round_plate', '{Material:"twilightforest:knightmetal"}'), 'thermal:steel_dust', 'thermal:tar'])
    recipe.smelter('3x '+BR+':ludicrite_ingot', [BR+':blutonium_ingot', TE+':twinite_ingot', 'thermal:enderium_ingot'])
    recipe.smelter(TCON+':cobalt_ingot', 'kubejs:cobalt_dust')
    recipe.smelter('create:zinc_ingot', 'kubejs:zinc_dust')
    recipe.smelter('2x '+TCON+':pig_iron_ingot', ['iron_ingot', 'honey_bottle', '2x '+TCON+':blood_slime_ball']).id('thermal:compat/tconstruct/smelter_alloy_tconstruct_pigiron_ingot')

    erId(event, 'thermal:compat/tconstruct/smelter_alloy_tconstruct_rose_gold_ingot')
})