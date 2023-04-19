onEvent('recipes', event =>{
    function erOutput(item, type){
        event.remove({output: item, type: type})
    }
    function erInput(item, type){
        event.remove({input: item, type: type})
    }
    function erId(id){
        event.remove({id: id})
    }
    function erType(type){
        event.remove({type: type})
    }
    //Removed Recipes
    erInput('#'+TF+':fiery_vial', 'minecraft:smithing')
    erInput('#'+TF+':fiery_vial', 'minecraft:crafting_shapeless')
    erOutput(TF+':uncrafting_table')

    //Recipes
    event.shapeless(TF+':ironwood_ingot', '9x kubejs:ironwood_nugget')
	event.shapeless('9x kubejs:ironwood_nugget', TF+':ironwood_ingot')
    event.shaped(TF+':uncrafting_table', [
        'LML',
        'WBW',
        'WCW'
    ], {
        L: Item.of(TCON+':large_plate', '{Material:"'+TCON+':bloodbone"}'),
        M: 'ae2:molecular_assembler',
        W: '#minecraft:logs',
        B: 'create:brass_casing',
        C: 'thermal:xp_crystal'
    })
})