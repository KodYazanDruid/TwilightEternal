onEvent('recipes', event => {
    function applicationRecipeTag(inputs, output){
        event.custom({
            "type": "create:item_application",
                "ingredients": [inputs[0], inputs[1]],
                "results": [output]
        })
    }
    function applicationRecipe(inputs, output){
        applicationRecipeTag([{"item": inputs[0]}, {"item": inputs[1]}], {"item": output})
    }

    applicationRecipe(['kubejs:crude_controller', 'kubejs:refined_fluix_mechanism'], 'ae2:controller')
    applicationRecipe(['minecraft:beacon', 'ae2:spatial_anchor'], 'createchunkloading:chunk_loader')
    applicationRecipe(['minecraft:stone', 'biggerreactors:uranium_dust'], 'kubejs:impure_uranium')

    applicationRecipeTag([{"tag": "forge:stripped_logs"}, {"item": "create:shadow_steel"}], {"item": "create:shadow_steel_casing"})
    applicationRecipeTag([{"tag": "forge:stripped_wood"}, {"item": "create:shadow_steel"}], {"item": "create:shadow_steel_casing"})
    applicationRecipeTag([{"tag": "forge:stripped_logs"}, {"item": "create:refined_radiance"}], {"item": "create:refined_radiance_casing"})
    applicationRecipeTag([{"tag": "forge:stripped_wood"}, {"item": "create:refined_radiance"}], {"item": "create:refined_radiance_casing"})
    applicationRecipeTag([{"item": "thermal:fluid_duct"}, {"tag": "thermal:glass/hardened"}], {"item": "thermal:fluid_duct_windowed"})

})