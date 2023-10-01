onEvent('recipes', event => {
    const ae2_cables = ['glass', 'covered', 'covered_dense', 'smart', 'smart_dense']

    function fluixCableWashing(type) {event.recipes.createSplashing('ae2:fluix_'+type+'_cable', '#ae2:'+type+'_cable')}

    ae2_cables.forEach(fluixCableWashing)

	event.recipes.createSplashing(['9x kubejs:ironwood_nugget', Item.of('twilightforest:torchberries').withChance(0.5)],'kubejs:crushed_ironwood')
    event.recipes.createSplashing('ae2:fluix_crystal', 'ae2:fluix_crystal_seed')
    event.recipes.createSplashing('ae2:certus_quartz_crystal', 'ae2:certus_crystal_seed')
    event.recipes.createSplashing(['9x tinkers_reforged:aluminum_nugget', Item.of('iron_nugget').withChance(0.25)], 'create:crushed_raw_aluminum')
    event.recipes.createSplashing([BRt`uranium_ingot`, Item.of('thermal:lead_nugget').withChance(0.25)], 'create:crushed_raw_uranium')

    event.recipes.createSplashing(['9x thermal:tin_nugget', Item.of('thermal:apatite').withChance(0.12)], 'create:crushed_raw_tin').id('create:splashing/thermal/crushed_raw_tin')
    event.recipes.createSplashing(['9x thermal:nickel_nugget', Item.of('create:copper_nugget').withChance(0.25)], 'create:crushed_raw_nickel').id('create:splashing/thermal/crushed_raw_nickel')
    event.recipes.createSplashing(['9x thermal:lead_nugget', Item.of('thermal:silver_nugget').withChance(0.25)], 'create:crushed_raw_lead').id('create:splashing/thermal/crushed_raw_lead')
    event.recipes.createSplashing(['9x thermal:silver_nugget', Item.of('thermal:lead_nugget').withChance(0.25)], 'create:crushed_raw_silver').id('create:splashing/thermal/crushed_raw_silver')

})
