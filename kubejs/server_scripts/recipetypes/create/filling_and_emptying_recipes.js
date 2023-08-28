onEvent('recipes', event => {
    event.recipes.createFilling('twilightforest:fiery_ingot', [
        'minecraft:iron_ingot',
        Fluid.of(TF+':fiery_essence', 250)
    ])
    event.recipes.createFilling('thermal:redstone_servo', [
        'minecraft:iron_ingot',
        Fluid.of('thermal:redstone', 50)
    ])
    event.recipes.createFilling('thermal:rf_coil', [
        'minecraft:gold_ingot',
        Fluid.of('thermal:redstone', 50)
    ])
    event.recipes.createFilling('create:rose_quartz', [
        'minecraft:quartz',
        Fluid.of('thermal:redstone', 300)
    ])
    event.recipes.createFilling('redstone_arsenal:flux_gem', [
        'minecraft:diamond',
        Fluid.of('thermal:redstone', 250)
    ])


    event.recipes.createEmptying([
        'minecraft:glass_bottle',
        Fluid.of(TF+':fiery_essence', 250)
    ],
        '#twilightforest:fiery_vial'
    )
    event.recipes.createFilling('beetroot_soup', ['bowl', Fluid.of('tconstruct:beetroot_soup', 250)])
    event.recipes.createFilling('miners_delight:beetroot_soup_cup', ['miners_delight:copper_cup', Fluid.of('tconstruct:beetroot_soup', 250)])
    event.recipes.createFilling('mushroom_stew', ['bowl', Fluid.of('tconstruct:mushroom_stew', 250)])
    event.recipes.createFilling('miners_delight:mushroom_stew_cup', ['miners_delight:copper_cup', Fluid.of('tconstruct:mushroom_stew', 250)])
    event.recipes.createFilling('rabbit_stew', ['bowl', Fluid.of('tconstruct:rabbit_stew', 250)])
    event.recipes.createFilling('miners_delight:rabbit_stew_cup', ['miners_delight:copper_cup', Fluid.of('tconstruct:rabbit_stew', 250)])

    event.recipes.createEmptying(['minecraft:bowl', Fluid.of('tconstruct:beetroot_soup', 250)], 'beetroot_soup')
    event.recipes.createEmptying(['miners_delight:copper_cup', Fluid.of('tconstruct:beetroot_soup', 250)], 'miners_delight:beetroot_soup_cup')
    event.recipes.createEmptying(['minecraft:bowl', Fluid.of('tconstruct:mushroom_stew', 250)], 'mushroom_stew')
    event.recipes.createEmptying(['miners_delight:copper_cup', Fluid.of('tconstruct:mushroom_stew', 250)], 'miners_delight:mushroom_stew_cup')
    event.recipes.createEmptying(['minecraft:bowl', Fluid.of('tconstruct:rabbit_stew', 250)], 'rabbit_stew')
    event.recipes.createEmptying(['miners_delight:copper_cup', Fluid.of('tconstruct:rabbit_stew', 250)], 'miners_delight:rabbit_stew_cup')
})