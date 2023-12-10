let cut_bricks = [
    'gabbro', 'weathered_limestone', 'potassic', 'veridium', 'scorchia', 'scoria',
    'ochrum', 'limestone', 'crimsite', 'asurine', 'tuff', 'deepslate', 'dripstone',
    'calcite', 'andesite', 'diorite', 'granite'
]

onEvent('recipes', event => {
    function erOutput(item, type) {
        event.remove({ output: item, type: type })
    }
    function erInput(item, type) {
        event.remove({ input: item, type: type })
    }
    function erId(id) {
        event.remove({ id: id })
    }
    function erType(type) {
        event.remove({ type: type })
    }
    //Removed Recipes
    erOutput('create_sa:slime_helmet')
    erOutput('create_sa:slime_boots')
    erOutput('createdeco:gold_bars')
    erOutput('createchunkloading:chunk_loader')
    erOutput('chunkloaders:basic_chunk_loader')
    erOutput('create_enchantment_industry:enchanting_guide')
    erOutput(CDDt`bronze_drill`)
    erOutput(CDDt`accelerator_motor`)
    erOutput(CDDt`kinetic_motor`)
    erOutput(CDDt`coal_piece`)
    erOutput(CDDt`industrial_fan`)
    erOutput('interiors:seatwood_planks')
    erId(CAt`crafting/large_connector_gold`)
    erId('create_central_kitchen:filling/honey_bread')
    erId('create_dd:splashing/crushed_raw_tin')
    Array.of('splashing', 'haunting', 'smoking', 'blasting', 'superheating', 'freezing').forEach(element => erOutput(CDD + ':' + element + '_sail'))
    dyenamiColors.forEach(color => {
        let chair_id = 'kubejs:' + color + '_chair'
        let floor_chair_id = 'kubejs:' + color + '_floor_chair'
        erOutput(chair_id)
        erOutput(floor_chair_id)
    })
    colors.forEach(color => {
        let chair_id = 'interiors:' + color + '_chair'
        let floor_chair_id = 'interiors:' + color + '_floor_chair'
        erOutput(chair_id)
        erOutput(floor_chair_id)
    })

    //Recipes
    event.custom({
        "type": "createaddition:rolling",
        "input": {
            "item": INF + ':straw'
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
        F: TF + ':arctic_fur',
        H: 'create_sa:zinc_helmet'
    })
    event.shaped('create_sa:slime_boots', [
        '   ',
        'FBF',
        'S S'
    ], {
        F: TF + ':alpha_yeti_fur',
        B: 'create_sa:zinc_boots',
        S: 'minecraft:slime_block'
    })
    event.shaped('chunkloaders:basic_chunk_loader', [
        'KOK',
        'OSO',
        'KOK'
    ], {
        K: TF + ':knightmetal_ingot',
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
        S: '#forge:plates/brass',
        B: 'createdeco:brass_bars',
        C: FD + ':canvas',
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
    event.shaped('8x ' + CA + ':spool', [
        ' S ',
        'RBR',
        ' S '
    ], {
        S: 'createdeco:cast_iron_sheet',
        R: 'thermal:cured_rubber',
        B: CA + ':brass_rod'
    }).id(CA + ':crafting/spool')
    event.shaped('2x ' + CA + ':connector', [
        ' C ',
        'ASA',
    ], {
        C: CA + ':copper_rod',
        A: 'create:andesite_alloy',
        S: '#forge:slimeballs'
    }).id(CA + ':crafting/small_connector_copper')
    event.shaped('2x ' + CA + ':large_connector', [
        ' E ',
        'AEA',
        'ASA'
    ], {
        E: CA + ':electrum_rod',
        A: 'create:andesite_alloy',
        S: '#forge:slimeballs'
    }).id(CA + ':crafting/large_connector_electrum')
    event.shaped(CDDt`hydraulic_press`, [
        ' S ',
        'HPH',
        ' B '
    ], {
        S: CDDt`sealed_mechanism`,
        H: CDDt`hydraulic_casing`,
        P: 'create:mechanical_press',
        B: CDDt`bronze_block`
    }).id(CDDt`crafting/hydraulic_press`)
    event.shaped(CDDt`bronze_saw`, [
        ' C ',
        'PSP',
        ' B '
    ], {
        C: CDDt`bronze_casing`,
        P: '#forge:plates/steel',
        S: 'create:mechanical_saw',
        B: CDDt`bronze_block`
    }).id(CDDt`crafting/bronze_saw`)

    event.shaped(CDDt`shadow_steel_block`, [
        'SSS',
        'SSS',
        'SSS'
    ], {
        S: CDDt`shadow_steel`
    }).id(CDDt`crafting/shadow_steel_block`)

    event.shaped(CDDt`refined_radiance_block`, [
        'RRR',
        'RRR',
        'RRR'
    ], {
        R: CDDt`refined_radiance`
    }).id(CDDt`crafting/refined_radiance_block`)

    event.shaped('3x interiors:seatwood_planks', [
        'SP',
        'PS'
    ], {
        S: '#minecraft:wooden_slabs',
        P: '#minecraft:planks'
    })

    event.shaped('3x interiors:seatwood_planks', [
        'PS',
        'SP'
    ], {
        S: '#minecraft:wooden_slabs',
        P: '#minecraft:planks'
    })


    for (const type of cut_bricks) {
        let bricks = `create:cut_${type}_bricks`
        if (Item.of(bricks).empty) bricks = `create_dd:cut_${type}_bricks`
        event.shapeless(CDD + ':' + type + '_mossy_bricks', [bricks, Ingredient.of(['moss_block', 'vine'])]).id(`create_dd:crafting/${type}_mossy_bricks`)
    }

    dyenamiColors.forEach(color => {
        let seat_id = DNF + ':create_' + color + '_seat'
        let wool_id = 'dyenamics:' + color + '_wool'
        let dye_id = 'dyenamics:' + color + '_dye'
        let wooden_slab_tag = '#minecraft:wooden_slabs'
        let chair_id = 'kubejs:' + color + '_chair'
        let floor_chair_id = 'kubejs:' + color + '_floor_chair'
        let bag_id = DNF + ':comforts_' + color + '_sleeping_bag'
        let hammock_id = DNF + ':comforts_' + color + '_hammock'

        event.shapeless(floor_chair_id, [seat_id, wooden_slab_tag])
        event.shapeless(floor_chair_id, [wool_id, wooden_slab_tag, wooden_slab_tag])
        event.shapeless(floor_chair_id, ['#twilight:floor_chair', dye_id])
        event.shapeless(chair_id, [seat_id, wooden_slab_tag, wooden_slab_tag])
        event.shapeless(chair_id, [wool_id, wooden_slab_tag, wooden_slab_tag, wooden_slab_tag])
        event.shapeless(chair_id, [floor_chair_id, wooden_slab_tag])
        event.shapeless(chair_id, ['#twilight:chair', dye_id])

        event.shapeless(bag_id, ['comforts:sleeping_bag_white', dye_id])
        event.shapeless(hammock_id, ['comforts:hammock_white', dye_id])
        event.shapeless('dyenamics:' + color + '_shulker_box', ['#forge:shulker_boxes', dye_id])
    })
    event.shapeless('interiors:white_chair', ['#twilight:chair', 'supplementaries:soap'])
    event.shapeless('interiors:white_floor_chair', ['#twilight:floor_chair', 'supplementaries:soap'])

    erOutput('interiors:kelp_seat')
    erOutput('interiors:kelp_floor_chair')
    erOutput('interiors:kelp_chair')
    event.shapeless('interiors:kelp_seat', ['dried_kelp', '#minecraft:wooden_slabs'])
    event.shapeless('interiors:kelp_floor_chair', ['dried_kelp', '#minecraft:wooden_slabs', '#minecraft:wooden_slabs'])
    event.shapeless('interiors:kelp_floor_chair', ['interiors:kelp_seat', '#minecraft:wooden_slabs'])
    event.shapeless('interiors:kelp_chair', ['dried_kelp', '#minecraft:wooden_slabs', '#minecraft:wooden_slabs', '#minecraft:wooden_slabs'])
    event.shapeless('interiors:kelp_chair', ['interiors:kelp_seat', '#minecraft:wooden_slabs', '#minecraft:wooden_slabs'])
    event.shapeless('interiors:kelp_chair', ['interiors:kelp_floor_chair', '#minecraft:wooden_slabs'])

    colors.forEach(color => {
        let seat_id = 'create:' + color + '_seat'
        let wool_id = 'minecraft:' + color + '_wool'
        let dye_id = 'minecraft:' + color + '_dye'
        let wooden_slab_tag = '#minecraft:wooden_slabs'
        let chair_id = 'interiors:' + color + '_chair'
        let floor_chair_id = 'interiors:' + color + '_floor_chair'
        event.shapeless(floor_chair_id, [seat_id, wooden_slab_tag])
        event.shapeless(floor_chair_id, [wool_id, wooden_slab_tag, wooden_slab_tag])
        event.shapeless(floor_chair_id, ['#twilight:floor_chair', dye_id])
        event.shapeless(chair_id, [seat_id, wooden_slab_tag, wooden_slab_tag])
        event.shapeless(chair_id, [wool_id, wooden_slab_tag, wooden_slab_tag, wooden_slab_tag])
        event.shapeless(chair_id, [floor_chair_id, wooden_slab_tag])
        event.shapeless(chair_id, ['#twilight:chair', dye_id])
    })

    event.forEachRecipe({ type: "create_dd:freezing" }, recipe => erId(recipe.getId()))
    event.forEachRecipe({ type: "create_dd:superheating" }, recipe => erId(recipe.getId()))
})