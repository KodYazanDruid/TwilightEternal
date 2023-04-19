onEvent('recipes', event => {
    // Remove recipes
    erOutput(event, CS+':zinc_handle')
    
    // Add recipes
    function rolling (output, input, count) {
        event.custom({
            "type":"createaddition:rolling",
            "input": Ingredient.of(input).toJson(),
            "result": Item.of(count+'x '+output).toResultJson()
        }).id(CA+':rolling/'+output.replace(":","/"))
    }

    rolling(CS+':zinc_handle', 'create:zinc_ingot', '1')
    rolling('minecraft:stick', '#minecraft:logs', '16')


})