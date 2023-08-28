onEvent('recipes', event => {
    event.recipes.tconstruct.casting_basin(BR+':uranium_ore', TCON+':molten_uranium', 180).cast('#forge:stone').consumeCast()
    event.recipes.tconstruct.casting_basin('minecraft:redstone_block', 'thermal:redstone', 900).noCast()
    event.recipes.tconstruct.casting_basin('minecraft:glowstone', 'thermal:glowstone', 1000).noCast()

    event.recipes.tconstruct.casting_table('thermal:redstone_servo', 'thermal:redstone', 50).cast('minecraft:iron_ingot').consumeCast()
    event.recipes.tconstruct.casting_table('thermal:rf_coil', 'thermal:redstone', 50).cast('minecraft:gold_ingot').consumeCast() 
    event.recipes.tconstruct.casting_table('create:rose_quartz', 'thermal:redstone', 300).cast('minecraft:quartz').consumeCast()
    event.recipes.tconstruct.casting_table('redstone_arsenal:flux_gem', 'thermal:redstone', 250).cast('minecraft:diamond').consumeCast()
    event.recipes.tconstruct.casting_table('thermal:redstone_servo', 'thermal:redstone', 50).cast('minecraft:iron_ingot').consumeCast()
    event.recipes.tconstruct.casting_table('thermal:rf_coil', 'thermal:redstone', 50).cast('minecraft:gold_ingot').consumeCast()
    event.recipes.tconstruct.casting_table('create:rose_quartz', 'thermal:redstone', 300).cast('minecraft:quartz').consumeCast()

    event.recipes.tconstruct.casting_table('miners_delight:beetroot_soup_cup', 'tconstruct:beetroot_soup', 250).cast('miners_delight:copper_cup').consumeCast()
    event.recipes.tconstruct.casting_table('miners_delight:mushroom_stew_cup', 'tconstruct:mushroom_stew', 250).cast('miners_delight:copper_cup').consumeCast()
    event.recipes.tconstruct.casting_table('miners_delight:rabbit_stew_cup', 'tconstruct:rabbit_stew', 250).cast('miners_delight:copper_cup').consumeCast()
})