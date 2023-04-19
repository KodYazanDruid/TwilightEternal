const $ConversionRecipe = java('com.simibubi.create.compat.jei.ConversionRecipe')

let tickCount = 0

onEvent('client.logged_in', e => {
    tickCount = 1
})

onEvent('client.tick', e => {
    if (tickCount && tickCount < 200){
        tickCount++
    }else if (tickCount == 200) {
        global.jeiRuntime.recipeManager.addRecipe($ConversionRecipe.create('create:chromatic_compound', 'create:shadow_steel'), 'create:mystery_conversion')
        global.jeiRuntime.recipeManager.addRecipe($ConversionRecipe.create('create:chromatic_compound', 'create:refined_radiance'), 'create:mystery_conversion')
        tickCount = 0
    }
})