onEvent('recipes', event =>{
    function dissolutionChamber(input, fluid, output, proccesTime){
        //Thanks Buuz135 for the recipe json <3
        event.custom({
              "input": input,
              "inputFluid": "{FluidName:\""+fluid[0]+"\",Amount:"+fluid[1]+"}",
              "processingTime": proccesTime,
              "output": {
                "item": output[0],
                "count": output[1]
              },
              "type": INF+":dissolution_chamber"
        })
    }
    //Usage: dissolutionChamber([{"item": "item0"},.....,{"item": "item7"}], ["fluid", "amount"], ["output", count], 100)
    dissolutionChamber([
            {"item": "create:wheat_flour"},
            {"item": "create:wheat_flour"},
            {"item": "create:wheat_flour"},
            {"item": "create:wheat_flour"},
            {"item": "create:wheat_flour"},
            {"item": "create:wheat_flour"},
            {"item": "create:wheat_flour"},
            {"item": "create:wheat_flour"}
        ],
        ["minecraft:milk", "250"], ["minecraft:bread", 8], 100)

    function addonCrafts(type, component){
            event.remove({id: INF+':dissolution_chamber/'+type+'_addon_1'})
            dissolutionChamber([
                    {"item": "ae2:basic_card"},
                    {"item": "thermal:gold_gear"},
                    {"item": TF+":carminite"},
                    {"item": component}
                ],
                [INF+":latex", "1000"], [INF+':'+type+'_addon_1', 1], 100)
            event.remove({id: INF+':dissolution_chamber/'+type+'_addon_2'})
            dissolutionChamber([
                    {"item": "ae2:advanced_card"},
                    {"item": "thermal:diamond_gear"},
                    {"item": TF+":carminite"},
                    {"item": component}
                ],
                [INF+":latex", "1000"], [INF+':'+type+'_addon_2', 1], 100)
    }
    addonCrafts('processing', 'create:mechanical_mixer')
    addonCrafts('efficiency', 'create:blaze_cake')
    addonCrafts('speed', 'minecraft:honeycomb')

    dissolutionChamber([
        {"item": "minecraft:mycelium"},
        {"item": AP+":rotten_flesh_block"},
        {"item": "thermal:redstone_servo"},
        {"item": "create:fluid_tank"},
        {"item": INF+":machine_frame_pity"}
    ],
    ["thermal:creosote", "1000"], [INF+":mechanical_dirt", 1], 200)
    event.custom({
        "input": [
            {
                "item": "minecraft:experience_bottle"
            }
        ],
        "processingTime": 5,
        "output": {
            "item": "minecraft:glass_bottle",
            "count": 1
          },
        "outputFluid": "{FluidName:\"industrialforegoing:essence\",Amount:250}",
        "type": "industrialforegoing:dissolution_chamber"
      })
      event.custom({
        "input": [
            {
                "item": "minecraft:glass_bottle"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:essence\",Amount:250}",
        "processingTime": 5,
        "output": {
            "item": "minecraft:experience_bottle",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    })

    dissolutionChamber([
        {"item": "minecraft:redstone"},
        {"item": "minecraft:redstone"},
        {"item": "infernalexp:quartz_glass_pane"},
        {"item": "infernalexp:quartz_glass_pane"},
        {"item": "create:zinc_ingot"},
        {"item": "create:zinc_ingot"},
        {"item": "ae2:fluix_crystal"},
        {"item": "ae2:fluix_crystal"}

    ], [INF+':latex', '1000'], ['kubejs:range_addon_base', 1], 100)
})