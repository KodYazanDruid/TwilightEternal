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
    erId('create:crushing/uranium_ore')
    erOutput('create_sa:slime_helmet')
    erOutput('create_sa:slime_boots')
    erOutput('createdeco:gold_bars')
    erOutput('createchunkloading:chunk_loader')
    erOutput('chunkloaders:basic_chunk_loader')
    erOutput('create_enchantment_industry:enchanting_guide')
    erId(CA+':crafting/large_connector_gold')

    //Recipes

    event.custom({
        "type":"createaddition:rolling",
        "input": {
              "item": INF+':straw'
        },
        "result": {
            "item": "createaddition:straw",
            "count": 1
        }
    }).id('createaddition:rolling/straw')

    event.shaped('create_sa:slime_helmet', [
        ' S ',
        'FHF',
        '   '
    ], {
        S: 'minecraft:slime_block',
        F: TF+':arctic_fur',
        H: 'create_sa:zinc_helmet'
    })
    event.shaped('create_sa:slime_boots', [
        '   ',
        'FBF',
        'S S'
    ], {
        F: TF+':alpha_yeti_fur',
        B: 'create_sa:zinc_boots',
        S: 'minecraft:slime_block'
    })
    event.shaped('chunkloaders:basic_chunk_loader', [
	    'KOK',
	    'OSO',
	    'KOK'
	], {
	    K: TF+':knightmetal_ingot',
	    O: 'minecraft:obsidian',
	    S: 'ae2:spatial_anchor'
	})
    event.shaped('create_enchantment_industry:enchanting_guide', [
        'NHN',
        'SBS',
        'NMN'
    ], {
        H: 'create_enchantment_industry:hyper_experience_bottle',
        S: 'create:sturdy_sheet',
        B: 'minecraft:book',
        M: 'quark:matrix_enchanter',
        N: 'minecraft:nether_star'
    })
    event.shaped('create_enchantment_industry:disenchanter', [
        'SBS',
        'CDC',
        'GEG'
    ], {
        S: 'create:brass_sheet',
        B: 'createdeco:brass_bars',
        C: FD+':canvas',
        D: 'create:item_drain',
        G: 'minecraft:grindstone',
        E: 'thermal:dynamo_disenchantment'
    }).id('create_enchantment_industry:crafting/disenchanter')
    event.shaped('create_enchantment_industry:printer', [
        'T',
        'W',
        'P'
    ], {
        T: 'create:fluid_tank',
        P: '#forge:plates/shellite',
        W: 'create:mechanical_press'
    }).id('create_enchantment_industry:crafting/printer')
    event.shaped('8x '+CA+':spool', [
        ' S ',
        'RBR',
        ' S '
    ], {
        S: 'createdeco:cast_iron_sheet',
        R: 'thermal:cured_rubber',
        B: CA+':brass_rod'
    }).id(CA+':crafting/spool')
    event.shaped('2x '+CA+':connector', [
        ' C ',
        'ASA',
    ], {
        C: CA+':copper_rod',
        A: 'create:andesite_alloy',
        S: '#forge:slimeballs'
    }).id(CA+':crafting/small_connector_copper')
    event.shaped('2x '+CA+':large_connector', [
        ' E ',
        'AEA',
        'ASA'
    ], {
        E: CA+':electrum_rod',
        A: 'create:andesite_alloy',
        S: '#forge:slimeballs'
    }).id(CA+':crafting/large_connector_electrum')
})