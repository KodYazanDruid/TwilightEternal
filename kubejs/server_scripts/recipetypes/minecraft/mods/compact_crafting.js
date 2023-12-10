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
        'BBB'
    ], {
        E: '#forge:rods/enderium',
        P: INF+':plastic',
        S: 'ae2:calculation_processor',
        B: DD+':bolted_industrial_iron_slab'
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