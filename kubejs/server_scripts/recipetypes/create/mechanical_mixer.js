onEvent('recipes', event => {
    event.recipes.createMixing([Fluid.of('thermal:glowstone', 1000), 'ae2:certus_quartz_crystal'], [Fluid.of('create:honey', 500), TF+':torchberries', 'ae2:charged_certus_quartz_crystal']).heated()
    event.recipes.createMixing([Fluid.of('thermal:glowstone', 1000), 'ae2:certus_quartz_crystal'], [Fluid.of(TCON+':honey', 500), TF+':torchberries', 'ae2:charged_certus_quartz_crystal']).heated()
    event.recipes.createMixing([Fluid.of('thermal:glowstone', 1000), 'ae2:certus_quartz_crystal'], [Fluid.of('cofh_core:honey', 500), TF+':torchberries', 'ae2:charged_certus_quartz_crystal']).heated()
    event.recipes.createMixing([Fluid.of('thermal:redstone', 1000), 'create:rose_quartz'], [Fluid.of(TCON+':blood', 500), 'minecraft:bone_meal', 'create:polished_rose_quartz']).heated()
    event.remove({output: TF+':raw_ironwood'})
    event.recipes.createMixing('4x '+TF+':raw_ironwood',['minecraft:gold_ingot' ,'minecraft:raw_iron' ,TF+':liveroot']).heated()
})