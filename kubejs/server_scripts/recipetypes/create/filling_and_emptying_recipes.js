onEvent('recipes', event => {
    event.recipes.createFilling('twilightforest:fiery_ingot', [
        'minecraft:iron_ingot',
        Fluid.of(TF+':fiery_essence', 250)
    ])

    event.recipes.createEmptying([
        'minecraft:glass_bottle',
        Fluid.of(TF+':fiery_essence', 250)
    ],
        '#twilightforest:fiery_vial'
    )
})