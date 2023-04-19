onEvent('recipes', event => {
    event.custom({
      "output": {
        "item": BR+":uranium_ore"
      },
      "rarity": [
        {
          "whitelist": {
            "type": "minecraft:worldgen/biome",
            "values": [
              "minecraft:the_end",
              "minecraft:the_void",
              "minecraft:small_end_islands",
              "minecraft:end_barrens",
              "minecraft:end_highlands",
              "minecraft:end_midlands"
            ]
          },
          "blacklist": {},
          "depth_min": 0,
          "depth_max": 255,
          "weight": 1
        }
      ],
      "pointer": 0,
      "catalyst": {
        "item": "industrialforegoing:laser_lens5"
      },
      "type": "industrialforegoing:laser_drill_ore"
    })

    event.custom({
      "output": {
        "item": "create:raw_zinc"
      },
      "rarity": [
        {
          "whitelist": {},
          "blacklist": {
            "type": "minecraft:worldgen/biome",
            "values": [
              "minecraft:the_end",
              "minecraft:the_void",
              "minecraft:small_end_islands",
              "minecraft:end_barrens",
              "minecraft:end_highlands",
              "minecraft:end_midlands"
            ]
          },
          "depth_min": 5,
          "depth_max": 70,
          "weight": 5
        },
        {
          "whitelist": {},
          "blacklist": {
            "type": "minecraft:worldgen/biome",
            "values": [
              "minecraft:the_end",
              "minecraft:the_void",
              "minecraft:small_end_islands",
              "minecraft:end_barrens",
              "minecraft:end_highlands",
              "minecraft:end_midlands"
            ]
          },
          "depth_min": 0,
          "depth_max": 255,
          "weight": 1
        }
      ],
      "pointer": 0,
      "catalyst": {
        "item": "industrialforegoing:laser_lens8"
      },
      "type": "industrialforegoing:laser_drill_ore"
    })
    event.custom({
      "output": {
        "tag": "forge:ores/apatite"
      },
      "rarity": [
        {
          "whitelist": {},
          "blacklist": {
            "type": "minecraft:worldgen/biome",
            "values": [
              "minecraft:the_end",
              "minecraft:the_void",
              "minecraft:small_end_islands",
              "minecraft:end_barrens",
              "minecraft:end_highlands",
              "minecraft:end_midlands"
            ]
          },
          "depth_min": 10,
          "depth_max": 30,
          "weight": 5
        },
        {
          "whitelist": {},
          "blacklist": {
            "type": "minecraft:worldgen/biome",
            "values": [
              "minecraft:the_end",
              "minecraft:the_void",
              "minecraft:small_end_islands",
              "minecraft:end_barrens",
              "minecraft:end_highlands",
              "minecraft:end_midlands"
            ]
          },
          "depth_min": 0,
          "depth_max": 255,
          "weight": 1
        }
      ],
      "pointer": 0,
      "catalyst": {
        "item": "industrialforegoing:laser_lens3"
      },
      "type": "industrialforegoing:laser_drill_ore"
    })
    event.custom({
      "output": {
        "tag": "forge:ores/cinnabar"
      },
      "rarity": [
        {
          "whitelist": {},
          "blacklist": {
            "type": "minecraft:worldgen/biome",
            "values": [
              "minecraft:the_end",
              "minecraft:the_void",
              "minecraft:small_end_islands",
              "minecraft:end_barrens",
              "minecraft:end_highlands",
              "minecraft:end_midlands"
            ]
          },
          "depth_min": 5,
          "depth_max": 25,
          "weight": 7
        },
        {
          "whitelist": {},
          "blacklist": {
            "type": "minecraft:worldgen/biome",
            "values": [
              "minecraft:the_end",
              "minecraft:the_void",
              "minecraft:small_end_islands",
              "minecraft:end_barrens",
              "minecraft:end_highlands",
              "minecraft:end_midlands"
            ]
          },
          "depth_min": 0,
          "depth_max": 255,
          "weight": 1
        }
      ],
      "pointer": 0,
      "catalyst": {
        "item": "industrialforegoing:laser_lens14"
      },
      "type": "industrialforegoing:laser_drill_ore"
    })

})