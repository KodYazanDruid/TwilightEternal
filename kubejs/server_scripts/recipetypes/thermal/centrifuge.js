onEvent('recipes', event => {
    const recipe = event.recipes.thermal

    recipe.centrifuge(['biggerreactors:uranium_ingot', Item.of('thermal:lead_nugget').withChance(0.25)], 'create:crushed_raw_uranium')
    recipe.centrifuge(['9x tinkers_reforged:aluminum_nugget', Item.of('iron_nugget').withChance(0.25)], 'create:crushed_raw_aluminum')
    recipe.centrifuge(['9x kubejs:ironwood_nugget', Item.of('twilightforest:torchberries').withChance(0.5)], 'kubejs:crushed_ironwood')
})