onEvent('recipes', event => {
    event.recipes.createMixing([Fluid.of('thermal:glowstone', 1000), 'ae2:certus_quartz_crystal'], [Fluid.of('create:honey', 500), TF+':torchberries', 'ae2:charged_certus_quartz_crystal']).heated()
    event.recipes.createMixing([Fluid.of('thermal:redstone', 1000), 'create:rose_quartz'], [Fluid.of(TCON+':blood', 500), 'minecraft:bone_meal', 'create:polished_rose_quartz']).heated()
    event.remove({output: TF+':raw_ironwood'})
    event.recipes.createMixing('4x '+TF+':raw_ironwood', ['minecraft:gold_ingot' ,'minecraft:raw_iron' ,TF+':liveroot']).heated()
    event.recipes.createMixing('2x '+TCON+':pig_iron_ingot', ['iron_ingot', 'honey_bottle', '2x '+TCON+':blood_slime_ball']).id(CA+':compat/tconstruct/pig_iron')
    erId(event, CA+':compat/tconstruct/pig_iron_2')
    event.recipes.createMixing('2x thermal:rose_gold_ingot', ['copper_ingot', 'gold_ingot']).id(CA+':compat/tconstruct/rose_gold')
    event.recipes.createMixing('2x '+TCONt`hepatizon_ingot`, ['2x copper_ingot', TCONt`cobalt_ingot`, 'quartz_block']).superheated().id(CAt`compat/tconstruct/hepatizon`)
    event.recipes.createMixing('2x '+CDDt`bronze_ingot`, ['4x thermal:bronze_ingot', 'create:zinc_ingot']).superheated()

    //Unify recipes
    event.recipes.createMixing([Fluid.of(INF+':essence'), 'kubejs:enzymatic_essence_catalyst'], [Fluid.of('cofh_core:experience'), 'kubejs:enzymatic_essence_catalyst'])
    event.recipes.createMixing([Fluid.of('cofh_core:experience'), 'kubejs:enzymatic_essence_catalyst'], [Fluid.of(INF+':essence'), 'kubejs:enzymatic_essence_catalyst'])
    
    //FD compat recipes
    event.recipes.createMixing('miners_delight:fish_stew_cup', ['#forge:crops/onion', '#forge:raw_fishes', 'miners_delight:copper_cup', Fluid.of('create_central_kitchen:tomato_sauce', 250)])
})