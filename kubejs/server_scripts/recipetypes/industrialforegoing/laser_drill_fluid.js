onEvent('recipes', event => {
    event.custom({
      "output": "{FluidName:\"twilightforest:fiery_essence\",Amount:5}",
      "rarity": [
        {
          "whitelist": {
            "type": "minecraft:worldgen/biome",
            "values": [
                "twilightforest:fire_swamp"
            ]
          },
          "blacklist": {},
          "depth_min": -64,
          "depth_max": 256,
          "weight": 8
        }
      ],
      "pointer": 0,
      "catalyst": {
        "item": "industrialforegoing:laser_lens14"
      },
      "entity": "minecraft:empty",
      "type": "industrialforegoing:laser_drill_fluid"
    })
})