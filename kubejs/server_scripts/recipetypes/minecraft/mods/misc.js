onEvent('recipes', event =>{
    const snads = ['s', 'red_s', 'suol_s']
    let fullAkashicTome = Item.of('akashictome:tome', '{"akashictome:data":{cookingforblockheads:{Count:1b,id:"cookingforblockheads:no_filter_edition"},ftbquests:{Count:1b,id:"ftbquests:book"},industrialforegoing:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"industrialforegoing:industrial_foregoing"}},kubejs:{Count:1b,id:"kubejs:create_manual"},pfm:{Count:1b,id:"pfm:furniture_book"},sebastrnlib:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"sebastrnlib:sebastrn_mods_guide_book"}},solcarrot:{Count:1b,id:"solcarrot:food_book"},thermal:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"thermal:guidebook"}},twilightforest:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"twilightforest:guide"}}},"akashictome:is_morphing":1b}')

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
    function moduleCraft(type, item){
        event.shaped('portality:module_'+type, [
            ' S ',
            'TFT',
            ' C '
        ], {
            S: 'thermal:redstone_servo',
            T: 'create:electron_tube',
            F: 'portality:frame',
            C: item
        })
    }
    function genericFour(output, itemArray, id){
        event.shaped(output, [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: itemArray[0],
            B: itemArray[1],
            C: itemArray[2]
        }).id(id)
    }
    //Removed Recipes
    erOutput('naturescompass:naturescompass')
    erOutput('explorerscompass:explorerscompass')
    erOutput('extractinator:extractinator')
    erOutput('globalxp:xp_block')
    erOutput('travel_anchors:travel_anchor')
    erOutput('travel_anchors:travel_staff')
    erOutput('torchmaster:feral_flare_lantern')
    erOutput('torchmaster:megatorch')
    erOutput(DD+':industrial_iron_billet')
    erOutput(AP+':plating_block')
    erOutput('magicfeather:magicfeather')
    erId('extractinator:extractinating/cobblestone')
    erId('extractinator:extractinating/stone')
    erOutput('chunkloaders:single_chunk_loader')
    erOutput('backpacked:backpack')
    erOutput('quark:gold_bars')
    erId(AP+':bone_meal')
    event.remove({mod: 'portality'})
    for(let i of toolsVanilla){
        erOutput(TCOMP+':copper_'+i)
    }

    //Recipes
    event.shapeless('8x kubejs:tiny_coal', 'minecraft:coal')
    event.shapeless('8x kubejs:tiny_charcoal', 'minecraft:charcoal')
    event.shapeless('minecraft:coal', '8x kubejs:tiny_coal')
    event.shapeless('minecraft:charcoal', '8x kubejs:tiny_charcoal')
    event.shapeless('portality:teleportation_token', ['minecraft:name_tag', 'ae2:basic_card', 'minecraft:blue_dye', 'minecraft:blue_dye', 'minecraft:black_dye'])
    event.shapeless(TCON+':necrotic_bone', AP+':withered_bone')
    event.shapeless(AP+':withered_bone', TCON+':necrotic_bone')
    //To fix a bug that prevents stacking torches
    event.shapeless('minecraft:torch', 'minecraft:torch')
    moduleCraft('items', 'ae2:sky_stone_chest')
    moduleCraft('fluids', 'thermal:fluid_cell')
    moduleCraft('energy', 'thermal:energy_cell')
    moduleCraft('interdimensional', 'ae2:quantum_ring')
   
    for(let i of snads) {
        let snadj =''
        if(i=='suol_s'){
            snadj = 'soul_s'
        }else {
            snadj = i
        }
        genericFour('snad:'+i+'nad', ['create:tree_fertilizer', 'thermal:phytogro', 'minecraft:'+snadj+'and'], 'snad:'+i+'nad')
    }
    event.shaped('naturescompass:naturescompass', [
        'SLS',
        'LCL',
        'SLS'
    ], {
        S: 'minecraft:flowering_azalea',
        L: '#'+TCON+':slimy_logs',
        C: 'minecraft:compass'
    })
    event.shaped('explorerscompass:explorerscompass', [
        'MDH',
        'DCD',
        'QDN'
    ], {
        M: TCON+':manyullyn_ingot',
        H: TCON+':hepatizon_ingot',
        Q: TCON+':queens_slime_ingot',
        N: 'minecraft:netherite_ingot',
        D: '#forge:deepslate',
        C: 'ae2:sky_compass'
    })
    event.shaped('extractinator:extractinator', [
        ' C ',
        'PMN',
        'BZN'
    ], {
        C: 'create:cogwheel',
        P: 'create:mechanical_piston',
        M: INF+':machine_frame_simple',
        N: AP+':nether_brass_chain',
        B: 'create:basin',
        Z: 'create:zinc_block'
    })
    event.shaped('globalxp:xp_block', [
        'SBS',
        'BXB',
        'SBS'
    ], {
        S: 'thermal:steel_ingot',
        B: 'createdeco:cast_iron_bars',
        X: 'thermal:xp_crystal'
    })
    event.shaped('travel_anchors:travel_anchor', [
        'DPD',
        'EME',
        'DSD'
    ], {
        D: 'minecraft:polished_deepslate',
        P: 'minecraft:ender_pearl',
        E: 'thermal:enderium_ingot',
        M: 'industrialforegoing:machine_frame_simple',
        S: 'twilightforest:steeleaf_ingot'
    })
    event.shaped('travel_anchors:travel_staff', [
        'S',
        'H',
        'H'
    ], {
        S: 'twilightforest:steeleaf_ingot',
        H: Item.of('tconstruct:tough_handle', '{Material:"tconstruct:steel"}')
    })
    /* event.shaped('twilight:rune_embedder', [
        'GGG',
        'LTC',
        'PEP'
    ], {
        G: 'minecraft:gilded_blackstone',
        L: 'ae2:logic_processor',
        T: Item.of('tconstruct:scorched_anvil', '{texture:"thermal_extra:twinite_block"}'),
        C: 'ae2:calculation_processor',
        P: AP+':plating_block',
        E: 'ae2:engineering_processor'
    }) */
    event.shaped('twilight:draconic_rtg', [
        'IEI',
        'DFD',
        'ICI'
    ], {
        I: DD+':industrial_iron_billet',
        E: 'ae2:engineering_processor',
        D: 'thermal:steel_plate',
        F: 'thermal:energy_cell_frame',
        C: 'ae2:calculation_processor'
    })
    event.shaped('torchmaster:feral_flare_lantern', [
        'LRL',
        'RCR',
        'LRL'
    ], {
        L: 'thermal:lumium_ingot',
        R: 'create:refined_radiance',
        C: 'thermal:lightning_charge'
    })
    event.shaped('torchmaster:megatorch', [
        'RCR',
        'ETE',
        'LTL'
    ], {
        L: 'thermal:lumium_block',
        E: 'create:refined_radiance',
        T: '#architects_palette:twisted_logs',
        R: 'quark:rainbow_rune',
        C: 'thermal:coal_coke_block'
    })
    event.shaped('summoningrituals:altar', [
        'CSC',
        'WBW',
        'GRG'
    ], {
        C: 'minecraft:candle',
        S: 'minecraft:wither_skeleton_skull',
        B: 'minecraft:red_wool',
        G: 'create:brass_casing',
        W: '#forge:plates/gold',
        R: 'create:brass_block'
    })
    event.shaped('8x '+AP+':plating_block', [
        'NPN',
        'PSP',
        'NPN'
    ], {
        N: 'createdeco:cast_iron_nugget',
        P: 'createdeco:cast_iron_sheet',
        S: 'createdeco:cast_iron_sheet_metal'
    })
    event.shaped('quark:matrix_enchanter', [
        ' M ',
        'KEK',
        'CCC'
    ], {
        M: Item.of('minecraft:enchanted_book').enchant('minecraft:mending', 1),
        K: TF+':knightmetal_ingot',
        E: 'minecraft:enchanting_table',
        C: '#quark:corundum'
    })
    event.shaped('portality:controller', [
        'SPS',
        'GFG',
        'SMS'
    ], {
        S: 'thermal:steel_ingot',
        P: 'ae2:spatial_io_port',
        G: 'redstone_arsenal:flux_gem',
        F: 'portality:frame',
        M: 'ae2:monitor'
    })
    event.shaped('8x portality:frame', [
        'CGC',
        'PFP',
        'CGC'
    ], {
        C: 'create:railway_casing',
        G: 'thermal:lumium_gear',
        P: 'thermal:enderium_plate',
        F: 'ae2:fluix_crystal'
    })
    event.shaped('backpacked:backpack', [
        'WSW',
        'BCB',
        'WLW'
    ], {
        W: 'thermal:hazmat_fabric',
        L: Item.of('tconstruct:bowstring', '{Material:"tconstruct:string"}'),
        S: Item.of('tconstruct:tool_binding', '{Material:"tconstruct:leather"}'),
        C: 'ironchest:iron_chest',
        B: 'supplementaries:rope'
    })
    
    event.shaped(TT+':chisel', [
        'F',
        'S'
    ], {
        F: 'minecraft:flint',
        S: Item.of('tconstruct:tool_handle', '{Material:"tconstruct:wood"}')
    }).id(TT+':chisel')

    event.shaped(fullAkashicTome, [
        'IAC',
        'ABA',
        'GAZ'
    ], {
        I: 'minecraft:iron_ingot',
        A:  FD+':canvas',
        C: 'minecraft:copper_ingot',
        B: 'akashictome:tome',
        G: 'minecraft:gold_ingot',
        Z: 'create:zinc_ingot'
    })

    event.shaped('kubejs:enzymatic_essence_catalyst', [
        ' SE',
        'SNS',
        'ES '
    ], {
        E: 'minecraft:emerald',
        S: TCON+':earth_slime_crystal',
        N: 'create:experience_nugget'
    })

    event.shaped(CEI+':experience_rotor', [
        ' Z ',
        'ZCZ',
        ' Z '
    ], {
        Z: 'create:zinc_ingot',
        C: 'kubejs:enzymatic_essence_catalyst'
    }).id(CEI+':crafting/experience_rotor')

})