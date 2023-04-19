onEvent('recipes', event => {
    const materials = ['wood', 'copper', 'iron', 'silver', 'gold', 'diamond', 'obsidian']
    function colossalWall(type){
        switch(type) {
            case 'wood':
                event.shaped(CC+':chest_wall_'+type, [
                    'ISI',
                    'SBS',
                    'ISI'
                ], {
                    I: '#minecraft:planks',
                    S: '#minecraft:wooden_slabs',
                    B: 'create:brass_casing'
                }).id(CC+':chest_wall_'+type)
                break;
            case 'diamond':
                event.shaped(CC+':chest_wall_'+type, [
                    'ISI',
                    'SBS',
                    'ISI'
                ], {
                    I: 'minecraft:'+type,
                    S: '#minecraft:wooden_slabs',
                    B: 'create:brass_casing'
                }).id(CC+':chest_wall_'+type)
                break;
            case 'obsidian':
                event.shaped(CC+':chest_wall_'+type, [
                    'III',
                    'IBI',
                    'III'
                ], {
                    I: 'minecraft:'+type,
                    B: CC+':chest_wall_diamond',
                }).id(CC+':chest_wall_'+type)
                break;
            case 'silver':
                event.shaped(CC+':chest_wall_'+type, [
                    'ISI',
                    'SBS',
                    'ISI'
                ], {
                    I: 'thermal:'+type+'_ingot',
                    S: '#minecraft:wooden_slabs',
                    B: 'create:brass_casing'
                }).id(CC+':chest_wall_'+type)
                break;
            default:
                event.shaped(CC+':chest_wall_'+type, [
                    'ISI',
                    'SBS',
                    'ISI'
                ], {
                    I: 'minecraft:'+type+'_ingot',
                    S: '#minecraft:wooden_slabs',
                    B: 'create:brass_casing'
                }).id(CC+':chest_wall_'+type)
        }
    }
    function colossalCore(type) {
        event.shaped(CC+':colossal_chest_'+type, [
            'IAI',
            'CBD',
            'IPI'
        ], {
            I: TCON+':rose_gold_ingot',
            A: 'ae2:logic_processor',
            C: 'ae2:calculation_processor',
            D: 'ae2:engineering_processor',
            B: CC+':chest_wall_'+type,
            P: 'minecraft:observer'
        }).id(CC+':colossal_chest_'+type)
    }
    function colossalInterface(type) {
        event.shaped(CC+':interface_'+type, [
            ' I ',
            'IBI',
            ' P '
        ], {
            I: '#forge:plates/iron',
            B: CC+':chest_wall_'+type,
            P: 'create:portable_storage_interface'
        }).id(CC+':interface_'+type)
    }
    materials.forEach(colossalWall)
    materials.forEach(colossalInterface)
    materials.forEach(colossalCore)

    event.shaped(CC+':upgrade_tool', [
        ' P ',
        'PHP',
        ' P '
    ], {
        P: '#forge:plates/iron',
        H: 'thermal:tinker_bench'
    }).id(CC+':upgrade_tool')
})