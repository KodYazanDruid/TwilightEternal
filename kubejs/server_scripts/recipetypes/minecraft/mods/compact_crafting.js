onEvent('recipes', event => {
    event.shaped('compactcrafting:projector_dish', [
        'LSP',
        'LES',
        'LSP'
        ], {
            L: 'thermal:lumium_glass',
            S: 'thermal:steel_ingot',
            E: 'create:electron_tube',
            P: INF+':plastic'
        }).id('compactcrafting:projector_dish')

    event.shaped('compactcrafting:base', [
        ' E ',
        'PSP',
        'BCB'
    ], {
        E: 'minecraft:end_rod',
        P: INF+':plastic',
        S: 'thermal:steel_block',
        B: DD+':bolted_industrial_iron_slab',
        C: 'ae2:spatial_cell_component_16'
    }).id('compactcrafting:base')

    event.shaped('compactcrafting:field_projector', [
        'MD ',
        ' B ',
        ' S '
    ], {
        M: 'compactcrafting:projector_dish',
        D: 'thermal:diamond_gear',
        B: 'compactcrafting:base',
        S: 'ae2:spatial_pylon'
    }).id('compactcrafting:field_projector')
})