onEvent('recipes', event => {
  /**
   * @param {string} fluid Fluid ID
   * @param {number} amount Fluid amount
   * @param {string} lens Lens ID
   * @param {string} entity Entity ID
   * @param {number} depth_min Minimum depth
   * @param {number} depth_max Maximum depth
   * @param {number} weight Weight
   * @param {string[]} biomes Biomes
   * 
   *  */ 
  function mineFluid(fluid, amount, lens, entity, depth_min, depth_max, weight, biomes) {
    event.custom({
      "output": `{FluidName:\"${fluid}\",Amount:${amount}}`,
      "rarity": [
        {
          "whitelist": {
            "type": "minecraft:worldgen/biome",
            "values": biomes
          },
          "blacklist": {},
          "depth_min": depth_min,
          "depth_max": depth_max,
          "weight": weight
        }
      ],
      "pointer": 0,
      "catalyst": {
        "item": lens
      },
      "entity": entity,
      "type": "industrialforegoing:laser_drill_fluid"
    }).id(`twilight:laser_drill_fluid/${fluid.replace(':', '_')}`)
  }

  mineFluid('thermal:crude_oil', 20, 'industrialforegoing:laser_lens15', 'minecraft:empty', -64, 0, 8, 
    ["minecraft:desert",
    "minecraft:desert_hills",
    "minecraft:desert_lakes",
    "minecraft:ocean",
    "minecraft:cold_ocean",
    "minecraft:deep_cold_ocean",
    "minecraft:deep_frozen_ocean",
    "minecraft:deep_lukewarm_ocean",
    "minecraft:deep_warm_ocean",
    "minecraft:warm_ocean"])

  mineFluid('twilightforest:fiery_essence', 5, 'industrialforegoing:laser_lens14', 'minecraft:empty', -64, 256, 8,
    ['twilightforest:fire_swamp'])
})