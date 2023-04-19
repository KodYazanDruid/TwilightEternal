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
    erOutput('thermal:fluid_cell_frame')
    erOutput('thermal:fluid_cell')
    erOutput('thermal:xp_crystal')
    erOutput('thermal:charcoal_block')
    erOutput('thermal:gunpowder_block')
    erOutput('thermal:sugar_cane_block')
    erOutput('thermal:bamboo_block')
    erOutput('thermal:apple_block')
    erOutput('thermal:carrot_block')
    erOutput('thermal:potato_block')
    erOutput('thermal:beetroot_block')
    erOutput('thermal:flax_block')
    erOutput('thermal:onion_block')
    erOutput('thermal:tomato_block')
    erOutput('thermal:rice_block')
    erOutput('thermal:energy_duct')
    erOutput('thermal:fluid_duct')
    erOutput('thermal:fluid_duct_windowed')
    erOutput(TE+':upgrade_augment')
    erOutput('thermal:machine_crafter')

    //Recipes
    event.shaped('thermal:fluid_cell_frame', [
        'BVB',
        'VTV',
        'BVB'
    ], {
        B: 'thermal:bronze_ingot',
        V: 'ae2:quartz_vibrant_glass',
        T: 'create:fluid_tank'
    })
    event.shaped('thermal:fluid_cell', [
        'RHR',
        'PFP',
        'RCR'
    ], {
        R: 'thermal:cured_rubber_block',
        H: '#thermal:glass/hardened',
        P: 'create:mechanical_pump',
        F: 'thermal:fluid_cell_frame',
        C: 'minecraft:copper_block',
    })
    event.shaped(Item.of('thermal_extra:upgrade_augment', '{AugmentData:{BaseMod:5.0f,Type:"Upgrade"}}'), [
        'DSD',
        'GEG',
        'DSD'
    ], {
        D: TE+':dragonsteel_ingot',
        S: 'create:shadow_steel',
        G: TE+':soul_infused_gear',
        E: 'thermal:upgrade_augment_3'
    })
    event.shapeless(Item.of('thermal_extra:upgrade_augment', '{AugmentData:{BaseMod:5.0f,Type:"Upgrade"}}'), 'thermal_extra:upgrade_augment')
    event.shaped('4x thermal:energy_duct', [
        'LQL',
        'QEQ',
        'LQL'
    ], {
        L: 'thermal:lead_ingot',
        Q: 'ae2:quartz_glass',
        E: 'create:electron_tube'
    })
    event.shaped('thermal:machine_crafter', [
        ' C ',
        'IMI',
        'SRS'
    ], {
        C: 'create:mechanical_crafter',
        I: 'thermal:invar_ingot',
        M: 'thermal:machine_frame',
        S: 'thermal:signalum_gear',
        R: 'thermal:rf_coil'
    })
})