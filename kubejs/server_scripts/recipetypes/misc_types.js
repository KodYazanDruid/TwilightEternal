onEvent('recipes', event => {
    event.custom({
        "type": "forge:conditional",
        "recipes": [
          {
            "conditions": [
              {
                "modid": "sewingkit",
                "type": "forge:mod_loaded"
              },
              {
                "type": "toolbelt:enable_sewing_crafting"
              }
            ],
            "recipe": {
              "type": "sewingkit:sewing",
              "materials": [
                {
                  "ingredient": {
                    "item": "sewingkit:leather_strip"
                  },
                  "count": 4
                },
                {
                  "ingredient": {
                    "item": "sewingkit:leather_sheet"
                  },
                  "count": 8
                },
                {
                  "ingredient": {
                    "item": "tinkers_reforged:aluminum_ingot"
                  },
                  "count": 4
                },
                {
                  "ingredient": {
                    "item": "minecraft:string"
                  },
                  "count": 16
                }
              ],
              "tool": {
                "type": "sewingkit:tool_ingredient",
                "tool_type": "sewingkit_sew",
                "tool_level": "minecraft:wood"
              },
              "result": {
                "item": "toolbelt:belt"
              }
            }
          }
        ]
      }).id('toolbelt:belt_via_sewing')
    event.custom({
        "type": "forge:conditional",
        "recipes": [
          {
            "conditions": [
              {
                "modid": "sewingkit",
                "type": "forge:mod_loaded"
              },
              {
                "type": "toolbelt:enable_sewing_crafting"
              }
            ],
            "recipe": {
              "type": "sewingkit:sewing",
              "materials": [
                {
                  "ingredient": {
                    "item": "sewingkit:leather_strip"
                  },
                  "count": 2
                },
                {
                  "ingredient": {
                    "item": "sewingkit:leather_sheet"
                  },
                  "count": 4
                },
                {
                  "ingredient": {
                    "item": "materialis:fairy_ingot"
                  },
                  "count": 1
                },
                {
                  "ingredient": {
                    "item": "minecraft:string"
                  },
                  "count": 8
                }
              ],
              "tool": {
                "type": "sewingkit:tool_ingredient",
                "tool_type": "sewingkit_sew",
                "tool_level": "minecraft:wood"
              },
              "result": {
                "item": "toolbelt:pouch"
              }
            }
          }
        ]
      }).id('toolbelt:pouch_via_sewing')
      
})