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
    erOutput('#forge:ingots/graphite', 'minecraft:blasting')
    erOutput('#forge:ingots/graphite', 'minecraft:smelting')
    erOutput(BR+':reactor_casing')
    erOutput(BR+':reactor_control_rod')
    erOutput(BR+':reactor_fuel_rod')
    erOutput(BR+':reactor_access_port')
    erOutput(BR+':reactor_power_tap')
    erOutput(BR+':reactor_redstone_port')
    erOutput(BR+':reactor_terminal')
    erOutput(BR+':reactor_glass')
    erId(BR+':crafting/ludicrite_block_enderium')
    erId(BR+':crafting/ludicrite_block_nether_star')

    //Recipes
    event.shapeless(BR+':reactor_glass', ['minecraft:glass', BR+':reactor_casing'])
    event.shaped('4x '+BR+':reactor_casing', [
        'CGC',
        'GQG',
        'CGC'
    ], {
        C: '#forge:ingots/cast_iron',
        G: '#forge:ingots/graphite',
        Q: 'minecraft:smooth_quartz'
    })
    event.shaped(BR+':reactor_control_rod', [
        'RCR',
        'LSL',
        'RGR'
    ], {
        R: BR+':reactor_casing',
        C: TF+':carminite',
        L: 'thermal:lead_ingot',
        S: 'thermal:redstone_servo',
        G: '#forge:ingots/graphite'
    })
    event.shaped(BR+':reactor_access_port', [
        'RHR',
        'CBC',
        'RSR'
    ], {
        R: BR+':reactor_casing',
        H: 'minecraft:hopper',
        C: 'minecraft:copper_ingot',
        B: 'minecraft:barrel',
        S: 'ae2:storage_bus'
    })
    event.shaped(BR+':reactor_terminal', [
        'RGR',
        'LML',
        'RSR'
    ], {
        R: BR+':reactor_casing',
        G: 'redstone_arsenal:flux_gem',
        L: 'thermal:lead_ingot',
        S: 'thermal:redstone_servo',
        M: TCON+':manyullyn_block'
    })
    event.shaped(BR+':reactor_power_tap', [
        'RCR',
        'LFL',
        'RSR'
    ], {
        R: BR+':reactor_casing',
        C: 'thermal:rf_coil',
        L: 'thermal:lead_ingot',
        S: 'thermal:redstone_servo',
        F: 'thermal:energy_cell_frame'
    })
    event.shaped(BR+':reactor_fuel_rod', [
        'RPR',
        'LGL',
        'RUR'
    ], {
        R: BR+':reactor_casing',
        P: 'minecraft:piston',
        L: 'thermal:lead_ingot',
        G: '#forge:ingots/graphite',
        U: '#forge:ingots/uranium'
    })
    event.shaped(BR+':reactor_redstone_port', [
        'RCR',
        'DPD',
        'RDR'
    ], {
        R: BR+':reactor_casing',
        C: 'minecraft:comparator',
        D: 'minecraft:redstone',
        P: 'ae2:logic_processor'
    })

    event.shaped(BR+':cyanite_reprocessor', [
        'RGR',
        'LML',
        'RGR'
    ], {
        R: BR+':reactor_casing',
        G: '#forge:gears/invar',
        L: '#forge:ingots/lead',
        M: 'thermal:machine_frame'
    }).id('biggerreactors:crafting/cyanite_reprocessor')

    event.shaped(BR+':reactor_coolant_port', [
        'RSR',
        'BMB',
        'RPR'
    ], {
        R: BR+':reactor_casing',
        S: '#forge:plates/constantan',
        B: '#forge:ingots/bronze',
        M: 'thermal:fluid_cell_frame',
        P: 'create:fluid_pipe'
    }).id('biggerreactors:crafting/reactor/reactor_coolant_port')

    event.shaped(BR+':reactor_computer_port', [
        'RQR',
        'SMS',
        'RIR'
    ], {
        R: BR+':reactor_casing',
        Q: 'ae2:quartz_fiber',
        S: CA+':gold_spool',
        M: CCR+':wired_modem',
        I: '#forge:ingots/silver'
    }).id('biggerreactors:crafting/reactor/reactor_computer_port')
})