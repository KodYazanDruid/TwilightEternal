onEvent('recipes', event => {
    const rangeAddons = new Map([
        ['0', 'minecraft:cobblestone'],
        ['1', 'minecraft:lapis_lazuli'],
        ['2', 'minecraft:copper_ingot'],
        ['3', 'minecraft:iron_ingot'],
        ['4', 'create:zinc_ingot'],
        ['5', 'minecraft:gold_ingot'],
        ['6', 'create:brass_ingot'],
        ['7', 'minecraft:diamond'],
        ['8', 'minecraft:emerald'],
        ['9', 'twilightforest:ironwood_ingot'],
        ['10', 'tconstruct:manyullyn_ingot'],
        ['11', 'thermal:enderium_ingot'],
    ])
    for(let i of rangeAddons.keys()) {
        event.remove({id: INF+':dissolution_chamber/range_addon'+i})
        event.smithing(Item.of(INF+':range_addon'+i, '{TitaniumAugment:{Range:'+i+'.0f}}'), 'kubejs:range_addon_base', rangeAddons.get(i)).id('twilight:smithing/range_addon'+i)
    }
    event.smithing('thermal:xp_crystal', 'minecraft:amethyst_shard', 'create_sa:heap_of_experience')

})