onEvent('recipes', event => {
  event.remove({id: "tinkers_reforged:smeltery/melting/redstone"})
  event.remove({id: "tinkers_reforged:smeltery/melting/redstone_block"})
  event.remove({id: "tinkers_reforged:smeltery/melting/redstone_ore"})

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

  melt("kubejs:impure_uranium", "kubejs:unprepared_uranium", 180, 982, 67, 'twilight/uranium_melt')
  melt("minecraft:redstone", "thermal:redstone", 100, 1000, 40, 'twilight/redstone_melt')
  melt("minecraft:redstone_block", "thermal:redstone", 900, 1000, 200, 'twilight/redstone_melt_block')
  melt('beetroot', 'tconstruct:beetroot_soup', 125, 100, 160, 'tconstruct:smeltery/melting/slime/beetroot_soup')
})