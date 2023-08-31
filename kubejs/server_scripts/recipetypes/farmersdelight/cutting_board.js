onEvent('recipes', event => {
    function cuttingBoard(output, item, tool) {
        event.custom({
            "type": "farmersdelight:cutting",
            "ingredients": jsonItemObjectBuilder(Array.of(item)),
            "result": output,
            "tool": tool.toJson()
        }).id(FD+':cutting/'+item)
    }
    /* Ingredient.of('#twilight:mossy_seared_blocks').getItemIds().forEach(id => {
        let output = TCON + ':' + id.split(':mossy_')[1]
        console.log(output)
        cuttingBoard([Item.of(output), Item.of('twilightforest:moss_patch', 3).withChance(0.5)], id, Ingredient.of('#forge:shears'))
    }) */
})