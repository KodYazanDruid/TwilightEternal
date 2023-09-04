onEvent('recipes', event => {
    const recipe = event.recipes.create

    recipe.pressing('paper' , '#minecraft:mushrooms')
    recipe.pressing('paper', 'neapolitan:small_banana_frond')
    recipe.pressing('2x paper', 'neapolitan:banana_frond')
    recipe.pressing('3x paper', 'neapolitan:large_banana_frond')
})