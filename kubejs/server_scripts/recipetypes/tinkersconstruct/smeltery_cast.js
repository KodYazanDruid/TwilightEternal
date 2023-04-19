onEvent('recipes', event => {
    event.recipes.tconstruct.casting_basin(BR+':uranium_ore', TCON+':molten_uranium', 180).cast('#forge:stone').consumeCast()
    event.recipes.tconstruct.casting_basin('minecraft:redstone_block', 'thermal:redstone', 900).noCast()
    event.recipes.tconstruct.casting_basin('minecraft:glowstone', 'thermal:glowstone', 1000).noCast()

    event.recipes.tconstruct.casting_table('thermal:redstone_servo', 'thermal:redstone', 50).cast('minecraft:iron_ingot').consumeCast()
    event.recipes.tconstruct.casting_table('thermal:rf_coil', 'thermal:redstone', 50).cast('minecraft:gold_ingot').consumeCast() 
    event.recipes.tconstruct.casting_table('create:rose_quartz', 'thermal:redstone', 300).cast('minecraft:quartz').consumeCast()
})
