onEvent('recipes', event => {
    function cookingPot(output, container, inputs) {
        event.custom({
            "type": "farmersdelight:cooking",
            "recipe_book_tab": "meals",
            "ingredients": jsonItemObjectBuilder(inputs),
            "result": Item.of(output).toJson(),
            "container": Item.of(container).toJson(),
            "experience": 1.0,
            "cookingtime": 200
          }).id(FD+':cooking/'+output)
    }

    cookingPot('beetroot_soup', 'bowl', ['minecraft:beetroot', 'minecraft:beetroot'])
})

function jsonItemObjectBuilder (item) {
    for(let i = 0; i < item.length; i++) item[i] = { "item": item[i] }
    return Array.from(item)
}