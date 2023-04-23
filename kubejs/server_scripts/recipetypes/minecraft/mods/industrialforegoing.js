onEvent('recipes', event =>{
    const conveyorTypes = ['extraction', 'insertion', 'detection', 'bouncing', 'dropping', 'blinking', 'splitting']
    const blackHoleTypes = ['common', 'pity', 'simple', 'advanced', 'supreme']
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
    erOutput(INF+':conveyor')
    erOutput(INF+':black_hole_controller')
    erOutput(INF+':item_transporter_type')
    erOutput(INF+':fluid_transporter_type')
    erOutput(INF+':world_transporter_type')
    erOutput(INF+':machine_frame_pity')
    erOutput(INF+':block_placer')
    erOutput(INF+':block_breaker')
    erOutput(INF+':fluid_placer')
    erOutput(INF+':fluid_collector')
    erOutput(INF+':iron_gear')
    erOutput(INF+':gold_gear')
    erOutput(INF+':diamond_gear')
    erOutput(INF+':mechanical_dirt')
    erOutput(INF+':mycelial_furnace')
    erId(INF+':dissolution_chamber/xp_bottles')
    function conveyorRemove(type){
        erOutput(INF+':conveyor_'+type+'_upgrade')
    }
    conveyorTypes.forEach(e =>{
        conveyorRemove(e)
    })
    function blackHoleRemove(type){
        erOutput(INF+':'+type+'_black_hole_tank')
        erOutput(INF+':'+type+'_black_hole_unit')
    }
    blackHoleTypes.forEach(e =>{
        blackHoleRemove(e)
    })
    erId(INF+':laser_drill_ore/ores/sapphire')
    erId(INF+':laser_drill_ore/ores/ruby')
    erOutput(INF+':material_stonework_factory')

    //Recipes
    event.shaped(INF+':machine_frame_pity', [
        'LIL',
        'IBI',
        'LIL'
    ], {
        L: '#minecraft:logs',
        I: TF+':ironwood_ingot',
        B: 'create:brass_casing'
    })
    event.shaped(INF+':block_placer', [
        'PFP',
        'IMI',
        'PCP'
    ], {
        P: INF+':plastic',
        F: 'create:brass_sheet',
        I: 'thermal:electrum_ingot',
        M: INF+':machine_frame_pity',
        C: 'thermal:redstone_servo'
    })
    event.shaped(INF+':block_breaker', [
        'PAP',
        'IMI',
        'PCP'
    ], {
        P: INF+':plastic',
        A: 'thermal:drill_head',
        I: 'thermal:electrum_ingot',
        M: INF+':machine_frame_pity',
        C: 'thermal:redstone_servo'
    })
    event.shaped(INF+':fluid_placer', [
        'PFP',
        'EME',
        'PSP'
    ], {
        P: INF+':plastic',
        F: 'create:fluid_pipe',
        E: 'thermal:constantan_ingot',
        M: INF+':machine_frame_pity',
        S: 'thermal:redstone_servo'
    })
    event.shaped(INF+':fluid_collector', [
        'PFP',
        'EME',
        'PSP'
    ], {
        P: INF+':plastic',
        F: 'create:mechanical_pump',
        E: 'thermal:constantan_ingot',
        M: INF+':machine_frame_pity',
        S: 'thermal:redstone_servo'
    })
    event.shaped(INF+':material_stonework_factory', [
        'PMP',
        'SFR',
        'PTP'
    ], {
        P: INF+':plastic',
        M: 'ae2:molecular_assembler',
        S: Item.of('tconstruct:pickaxe', '{Damage:0,tic_broken:0b,tic_materials:["materialis:pink_slime","materialis:pink_slime","materialis:pink_slime"],tic_modifiers:[{level:3s,name:"tconstruct:overslime"},{level:1s,name:"tconstruct:piercing"},{level:3s,name:"materialis:overeating"}],tic_persistent_data:{abilities:1,upgrades:3},tic_stats:{"tconstruct:attack_damage":2.0f,"tconstruct:attack_speed":1.32f,"tconstruct:durability":830.0f,"tconstruct:harvest_tier":"minecraft:diamond","tconstruct:mining_speed":7.7000003f},tic_volatile_data:{"tconstruct:overslime_cap":50,"tconstruct:overslime_friend":1b}}'),
        F: INF+':machine_frame_advanced',
        R: 'thermal:machine_furnace',
        T: 'thermal:machine_pulverizer'
    })
    event.shaped(INF+':mycelial_furnace', [
        'CRC',
        'DFD',
        'PMP'
    ], {
        C: 'minecraft:coal_block',
        R: 'minecraft:redstone',
        D: 'thermal:dynamo_stirling',
        F: 'thermal:machine_furnace',
        P: Item.of('tconstruct:large_plate', '{Material:"tconstruct:electrum"}'),
        M: INF+':machine_frame_simple'    
    })
    event.shaped(INF+':fluid_extractor', [
        'TPT',
        'HMH',
        'TGT'
    ], {
        T: '#forge:ingots/tin',
        P: '#forge:plates/bronze',
        H: '#thermal:glass/hardened',
        M: INF+':machine_frame_pity',
        G: '#forge:gears/constantan'
    }).id(INF+':fluid_extractor')
})