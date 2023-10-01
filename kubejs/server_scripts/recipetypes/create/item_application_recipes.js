onEvent('recipes', event => {
    function applicationRecipe(inputs, output){
        event.custom({
            "type": "create:item_application",
            "ingredients": [Ingredient.of(inputs[0]).toJson(), Ingredient.of(inputs[1]).toJson()],
            "results": [Item.of(output).toResultJson()]
          }).id('twilight:item_application/'+output.replace(":","/"))
    }

    applicationRecipe(['kubejs:crude_controller', 'kubejs:refined_fluix_mechanism'], 'ae2:controller')
    applicationRecipe(['minecraft:beacon', 'ae2:spatial_anchor'], 'createchunkloading:chunk_loader')
    applicationRecipe(['minecraft:stone', 'biggerreactors:uranium_dust'], 'kubejs:impure_uranium')
    applicationRecipe(['#forge:stripped_logs', 'create:shadow_steel'], 'create:shadow_steel_casing')
    applicationRecipe(['#forge:stripped_wood', 'create:shadow_steel'], 'create:shadow_steel_casing')
    applicationRecipe(['#forge:stripped_logs', 'create:refined_radiance'], 'create:refined_radiance_casing')
    applicationRecipe(['#forge:stripped_wood', 'create:refined_radiance'], 'create:refined_radiance_casing')
    applicationRecipe(['thermal:fluid_duct', '#thermal:glass/hardened'], 'thermal:fluid_duct_windowed')
    applicationRecipe(['create:brass_casing', CCR+':wired_modem'], CA+':digital_adapter')
    applicationRecipe(['create:mechanical_drill', CDDt`bronze_block`], CDDt`bronze_drill`)

})