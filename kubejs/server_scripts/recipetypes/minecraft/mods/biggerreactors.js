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
    erOutput(BR+':graphite_ingot', 'minecraft:blasting')
    erOutput(BR+':graphite_ingot', 'minecraft:smelting')
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
        G: BR+':graphite_ingot',
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
        G: BR+':graphite_ingot'
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
        G: BR+':graphite_ingot',
        U: BR+':uranium_ingot'
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
    //create me a recipe for BR+':cyanite_reprocessor' with id
    event.shaped(BR+':cyanite_reprocessor', [
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
})