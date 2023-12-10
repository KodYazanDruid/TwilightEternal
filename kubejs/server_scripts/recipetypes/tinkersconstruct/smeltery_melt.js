onEvent('recipes', event => {
  event.remove({ id: "tinkers_reforged:smeltery/melting/redstone" })
  event.remove({ id: "tinkers_reforged:smeltery/melting/redstone_block" })
  event.remove({ id: "tinkers_reforged:smeltery/melting/redstone_ore" })

  function melt(input, output, outputAmount, temp, time, id) {
    event.custom({
      "type": "tconstruct:melting",
      "ingredient": {
        "item": input
      },
      "result": {
        "fluid": output,
        "amount": outputAmount
      },
      "temperature": temp,
      "time": time
    }).id(id)
  }
  function damageableMelt(input, output, outputAmount, temp, time, id) {
    event.custom({
      "type": "tconstruct:damagable_melting",
      "ingredient": {
        "item": input
      },
      "result": {
        "fluid": output,
        "amount": outputAmount,
        "unit_size": 10
      },
      "temperature": temp,
      "time": time
    }).id(id)
  }

  melt("kubejs:impure_uranium", "kubejs:unprepared_uranium", 180, 982, 67, 'twilight/uranium_melt')
  melt("minecraft:redstone", "thermal:redstone", 100, 1000, 40, 'twilight/redstone_melt')
  melt("minecraft:redstone_block", "thermal:redstone", 900, 1000, 200, 'twilight/redstone_melt_block')
  melt('beetroot', 'tconstruct:beetroot_soup', 125, 100, 160, 'tconstruct:smeltery/melting/slime/beetroot_soup')
  melt(CDDt`diamond_shard`, TCONt`molten_diamond`, 25, 1450, 32, 'twilight/diamond_shard_melt')

  let basicIngots = thermalIngots.concat(['copper'])
  let allTypes = toolsVanilla.concat(tcompTools)
  basicIngots.forEach(id => {
    allTypes.forEach(type => {
      let count = 1
      switch (type) {
        case 'helmet':
          count = 5
          break
        case 'chestplate':
          count = 8
          break
        case 'leggings':
          count = 7
          break
        case 'boots':
          count = 4
          break
        case 'sword':
          count = 2
          break
        case 'pickaxe':
          count = 3
          break
        case 'axe':
          count = 3
          break
        case 'shovel':
          count = 1
          break
        case 'hoe':
          count = 2
          break
        case 'excavator':
          count = 11
          break
        case 'hammer':
          count = 13
          break
        case 'sickle':
          count = 3
          break
        case 'knife':
          count = 1
          break
      }
      damageableMelt(`${TCOMP}:${id}_${type}`, `${TCON}:molten_${id}`, 90 * count, 750, 12 * count, `tconstruct:smeltery/melting/${id}/${type}`)
    })
  })
  
})