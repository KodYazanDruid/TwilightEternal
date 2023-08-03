onEvent("recipes", event => {
    //Made by hand. For now.
    event.recipes.createMixing('miners_delight:pasta_with_veggieballs', [FD+':raw_pasta', 'miners_delight:cave_carrot', 'bowl', Fluid.of('create_central_kitchen:tomato_sauce', 250)])
    event.recipes.createMixing(FD+':pasta_with_meatballs', [FD+':raw_pasta', FD+':minced_beef', 'bowl', Fluid.of('create_central_kitchen:tomato_sauce', 250)])
    event.recipes.createMixing('alexsdelight:lobster_pasta', [FD+':raw_pasta', 'alexsmobs:lobster_tail', 'bowl', Fluid.of('create_central_kitchen:tomato_sauce', 250)])
    event.recipes.createMixing('alexsdelight:kangaroo_pasta', [FD+':raw_pasta', '#alexsdelight:cooked_kangaroo', 'bowl', Fluid.of('create_central_kitchen:tomato_sauce', 250)])
    event.recipes.createMixing('bundledelight:borscht', ['#forge:raw_beef', '#forge:salad_ingredients/cabbage', 'beetroot', 'bowl', Fluid.of('create_central_kitchen:tomato_sauce', 250)])
    event.recipes.createMixing(FD+':pasta_with_mutton_chop', [FD+':raw_pasta', '#forge:raw_mutton', 'bowl', Fluid.of('create_central_kitchen:tomato_sauce', 250)])
    event.recipes.createMixing(FD+':fish_stew', ['#forge:crops/onion', '#forge:raw_fishes', 'bowl', Fluid.of('create_central_kitchen:tomato_sauce', 250)])
    //event.recipes.createMixing('twilightdelight:fiery_snakes_block', [TF+':torchberries', '#forge:hydra_meat', 'bowl', Fluid.of('create_central_kitchen:tomato_sauce', 250), Fluid.of(TF+':fiery_essence', 250)])
    

/*     event.forEachRecipe({type:'create:mixing'}, recipe=> {
        let inputs = recipe.getOriginalRecipeIngredients().toArray()
        let inputsNew = []

        inputs.forEach(input => {
            var index = inputs.indexOf(input)
            if ((input === 'create_central_kitchen:tomato_sauce') && index > -1) {
                //inputs.splice(index, 1)
                console.log(index+'. '+inputs)
                inputsNew = inputs.filter(item => !item.test('create_central_kitchen:tomato_sauce'))
                inputsNew.push(Fluid.of('create_central_kitchen:tomato_sauce', 250))
            } else 
                inputsNew.push(input)
            
            if(!recipe.getOriginalRecipeResult().isEmpty()) 
                event.recipes.createMixing(recipe.getOriginalRecipeResult(), inputsNew).id(recipe.getId())
        })
    }) */

    /* const sauce = Fluid.of('create_central_kitchen:tomato_sauce', 250)
    const itemSauce = Item.of(FD+':tomato_sauce')

    event.forEachRecipe({ mod: 'sliceanddice', type: 'create:mixing' }, r => {
        var inputs = r.originalRecipeIngredients
        var inputNew = []
        if(!r.originalRecipeResult.isEmpty() && inputs.contains(itemSauce)){
            inputs.forEach(input => {
                if(input === itemSauce.asIngredientStack()) inputNew.push(sauce)
                else inputNew.push(input)
            })
            event.recipes.createMixing(r.originalRecipeResult, inputNew).id(r.getOrCreateId()+'_debug')
        } 
    }) */

    /* const sauce = Fluid.of('create_central_kitchen:tomato_sauce', 250)
    const itemSauce = FD+':tomato_sauce'

    event.forEachRecipe({type:"create:mixin"}, r => {
        var inputList = r.originalRecipeIngredients

        console.log('Recipe: '+r.getId())
        console.log('Inputs: '+inputList)
        console.log('Result: '+r.originalRecipeResult)
        console.log(inputList.contains(itemSauce))

        if(inputList.contains(itemSauce)) {
            console.log('Found '+itemSauce+' in '+r.getId())
        }
    }) */
})