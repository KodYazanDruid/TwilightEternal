onEvent('recipes', event => {
    /* event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 3,
        "layers": [
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["-", "P", "-"],
                    ["P", "-", "P"],
                    ["-", "P", "-"]
                ]
            },
            {
                "type": "compactcrafting:filled",
                "component": "E"
            }
        ],
        "catalyst": {
            "id": "twilightforest:tower_key",
            "Count": 1
        },
        "components": {
            "E": {
                "type": "compactcrafting:block",
                "block": "minecraft:end_stone"
            },
            "P": {
                "type": "compactcrafting:block",
                "block": AP+":ender_pearl_block"
            }
        },
        "outputs": [
            {
                "id": "minecraft:end_portal_frame",
                "Count": 1
            }
        ]
      }) */

      event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 3,
        "layers": [
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["S", "S", "S"],
                    ["S", "G", "S"],
                    ["S", "S", "S"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["S", "G", "S"],
                    ["G", "M", "G"],
                    ["S", "G", "S"]
                ]
            },{
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["S", "S", "S"],
                    ["S", "G", "S"],
                    ["S", "S", "S"]
                ]
            }
        ],
        "catalyst": {
            "id": "ae2:engineering_processor",
            "Count": 1
        },
        "components": {
            "S": {
                "type": "compactcrafting:block",
                "block": "ae2:smooth_sky_stone_block"
            },
            "G": {
                "type": "compactcrafting:block",
                "block": "thermal:obsidian_glass"
            },
            "M": {
                "type": "compactcrafting:block",
                "block": "thermal:energy_cell_frame"
            }
        },
        "outputs": [
            {
                "id": "kubejs:crude_controller",
                "Count": 1
            }
        ]
      })
})