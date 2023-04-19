onEvent('recipes', event => {
  event.remove({id: "tinkers_reforged:smeltery/melting/redstone"})
  event.remove({id: "tinkers_reforged:smeltery/melting/redstone_block"})
  event.remove({id: "tinkers_reforged:smeltery/melting/redstone_ore"})

  function melt(input, output, outputAmount, temp, time) {
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
    })

  }

  melt("kubejs:impure_uranium", "kubejs:unprepared_uranium", 180, 982, 67)
  melt("minecraft:redstone", "thermal:redstone", 100, 1000, 40)
  melt("minecraft:redstone_block", "thermal:redstone", 900, 1000, 200)

})