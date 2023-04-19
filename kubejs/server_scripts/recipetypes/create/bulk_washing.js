onEvent('recipes', event => {
    const ae2_cables = ['glass', 'covered', 'covered_dense', 'smart', 'smart_dense']

    function fluixCableWashing(type){
        event.recipes.createSplashing('ae2:fluix_'+type+'_cable', '#ae2:'+type+'_cable')
    }

	event.recipes.createSplashing(['9x kubejs:ironwood_nugget', Item.of('twilightforest:torchberries').withChance(0.5)],'kubejs:crushed_ironwood')

    ae2_cables.forEach(fluixCableWashing)

    event.recipes.createSplashing('ae2:fluix_crystal', 'ae2:fluix_crystal_seed')
    event.recipes.createSplashing('ae2:certus_quartz_crystal', 'ae2:certus_crystal_seed')
 
})
