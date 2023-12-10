const $VolineEatTable = java('org.infernalstudios.infernalexp.data.VolineEatTable')

let volineTable = new Map()
let vet = new $VolineEatTable().getVolineEatTable()
vet.forEach(k => {
    if (vet.get(k).toString().length() > 2) {
        vet.get(k).forEach(i => {
            if (i == 'iron_ingot') volineTable.set(k, ['minecraft:iron_ingot', vet.get(k).get(i)])
            else volineTable.set(k, [i.namespace ? i : 'infernalexp:' + i, vet.get(k).get(i)])
        })
    } else {
        volineTable.set(k, ['empty', 0])
    }
})

/* onEvent('recipes', event => {

    volineTable.forEach((v, k) => {
        event.recipes.multiblocked.multiblock('voline')
            .inputItem(k)
            .outputItem(v[1] + 'x ' + v[0])
            .duration(100)
            .id('twilight:' + k + '_voline_eat')
    })
}) */
onEvent('server.load', _ => {
    console.log('Voline table registering... ')
    let recipeMap = MbdRegistry.getRecipeMap('voline')
    if (recipeMap) {
        volineTable.forEach((v, k) => {
            recipeMap.start()
                .inputItems(Ingredient.of(k).createVanillaIngredient())
                .outputItems(v[1] + 'x ' + v[0])
                .duration(100)
                .name('twilight:' + k + '_voline_eat')
                .buildAndRegister()
        })
    } else console.error('Recipe map not found!')
})