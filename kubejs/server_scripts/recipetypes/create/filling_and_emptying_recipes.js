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
})