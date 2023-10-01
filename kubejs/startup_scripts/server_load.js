//Priority: 2
onEvent('server.load', _ => {
    let shuffledOreMap

    let createPrize = []
    let thermalMats = []
    let thermalPrize = []
    let tconMats = []
    let tconstructPrize = []
    let tforestMats = []
    let tforestPrize = []
    let minecraftMats = []
    let minecraftPrize = []
    let foregoingPrize = []

    let storageBlockStacks

    let shuffleArray = (array) => global.shuffleArray(array)

    console.log('Loading Server...')
    /**
     * 
     * Block right click.
     */
    let rareIng = Ingredient.of(['ancient_debris', '#forge:ores/emerald', '#forge:ores/diamond'])

    let ores = shuffleArray(Ingredient.of('#forge:ores')
        .filter(Ingredient.of(['twilightforest:raw_ironwood', 'twilightforest:armor_shard_cluster', '#forge:ores/ruby', '#forge:ores/sapphire', rareIng]).not())
        .getItemIds().toArray())

    let rareOres = shuffleArray(rareIng.getItemIds().toArray())
    let rareOresMap = new Map()
    for (let rare of rareOres) {
        if (Ingredient.of('#forge:ores/emerald').getItemIds().contains(rare)) rareOresMap.set(rare, 4)
        else if (Ingredient.of('#forge:ores/diamond').getItemIds().contains(rare)) rareOresMap.set(rare, 4)
        else if (rare == 'minecraft:ancient_debris') rareOresMap.set(rare, 1)
    }

    let weighed = new Map()
    for (let ore of ores) weighed.set(ore, 10)
    for (let rare of rareOresMap.keys()) weighed.set(rare, rareOresMap.get(rare))
    shuffledOreMap = new Map(shuffleArray(Array.from(weighed.entries())))

    /**
     * 
     * Custom Bundles.
     */
    // Item ID, Item Count, Item Weight
    createPrize = [
        ['create:zinc_ingot', [2, 4], 5],
        ['create:andesite_alloy', [3, 8], 5],
        ['create:andesite_casing', [2, 6], 2],
        ['create:cogwheel', [3, 5], 3],
        ['create:large_cogwheel', [2, 5], 3],
        ['create:gearbox', [1, 3], 2],
        ['create:shaft', [3, 6], 4],
        ['create:brass_casing', [2, 4], 2],
        ['create:brass_ingot', [2, 3], 3],
        ['create:polished_rose_quartz', [1, 4], 2],
        ['create:sturdy_sheet', [2, 4], 3]
    ]

    Ingredient.of(['@thermal', '@thermal_extra']).filter([
        Ingredient.of('#forge:ingots'),
        Ingredient.of('#forge:gears'),
        Ingredient.of('#forge:plates'),
        Ingredient.of('#thermal:glass/hardened')
    ]).getStacks().forEach(stk => thermalMats.push(Array.of(stk.id, [2, 4], 5)))
    thermalPrize = thermalMats.concat([
        ['thermal:niter', [3, 5], 6],
        ['thermal:apatite', [3, 5], 6],
        ['thermal:cinnabar', [3, 5], 6],
        ['thermal:sulfur', [3, 5], 6],
        ['thermal:hazmat_fabric', [2, 3], 3],
        ['thermal:beekeeper_fabric', [2, 3], 3],
        ['thermal:diving_fabric', [2, 3], 3],
        ['thermal:basalz_rod', [1, 3], 5],
        ['thermal:blizz_rod', [1, 3], 5],
        ['thermal:blitz_rod', [1, 3], 5],
        ['thermal:earth_charge', [2, 4], 4],
        ['thermal:ice_charge', [2, 4], 4],
        ['thermal:lightning_charge', [2, 4], 4],
        ['thermal:cured_rubber', [3, 6], 3],
        ['thermal:bitumen', [2, 5], 4],
        ['thermal:phytogro', [3, 6], 5],
        ['thermal:redstone_servo', [1, 3], 5],
        ['thermal:rf_coil', [1, 3], 5]
    ])

    Ingredient.of('@tconstruct').filter([
        Ingredient.of('#forge:ingots'),
        Ingredient.of('#tconstruct:slime_block')
    ]).getStacks().forEach(stk => tconMats.push(Array.of(stk.id, [2, 4], 5)))
    tconstructPrize = tconMats.concat([
        ['glass', [3, 5], 5],
        ['copper', [4, 6], 5]
    ])

    Ingredient.of('@twilightforest').filter([
        Ingredient.of('#forge:ingots'),
        Ingredient.of('#forge:ores'),
        Ingredient.of('#forge:gems')
    ]).getStacks().forEach(stk => tforestMats.push(Array.of(stk.id, [2, 4], 5)))
    tforestPrize = tforestMats.concat([
        ['twilightforest:experiment_115', [2, 5], 6],
        ['twilightforest:transformation_powder', [1, 3], 4],
        ['twilightforest:arctic_fur', [3, 6], 5],
        ['twilightforest:ice_bomb', [1, 3], 3],
        ['twilightforest:maze_wafer', [2, 5], 5],
        ['twilightforest:borer_essence', [2, 5], 5],
        ['twilightforest:torchberries', [4, 6], 5],
        ['twilightforest:cooked_meef', [2, 5], 4]
    ])

    Ingredient.of('@minecraft').filter([
        Ingredient.of('#forge:ingots').filter(Ingredient.of('netherite_ingot').not()),
        Ingredient.of('#forge:ores').filter(Ingredient.of(['ancient_debris', '#forge:ores/emerald', '#forge:ores/diamond']).not())
    ]).getStacks().forEach(stk => minecraftMats.push(Array.of(stk.id, [2, 4], 4)))
    Ingredient.of('@minecraft').filter(Ingredient.of('#forge:gems')).getStacks()
        .forEach(stk => minecraftMats.push(Array.of(stk.id, [1, 3], 3)))
    minecraftPrize = minecraftMats.concat([
        ['ender_pearl', [1, 3], 4],
        ['blaze_rod', [2, 4], 5],
        ['ghast_tear', [1, 2], 3],
        ['leather', [3, 5], 5],
        ['book', [2, 4], 4],
        ['netherite_ingot', [1, 2], 2],
        ['ancient_debris', [1, 2], 2],
        ['diamond_ore', [2, 3], 2],
        ['deepslate_diamond_ore', [2, 3], 2],
        ['emerald_ore', [2, 3], 2],
        ['deepslate_emerald_ore', [2, 3], 2]
    ])

    foregoingPrize = [
        ['industrialforegoing:tinydryrubber', [6, 10], 5],
        ['industrialforegoing:dryrubber', [2, 6], 5],
        ['industrialforegoing:fertilizer', [4, 7], 5],
        ['industrialforegoing:plastic', [2, 4], 4],
        ['industrialforegoing:pink_slime', [2, 3], 3],
        ['industrialforegoing:dark_glass', [3, 4], 3],
        ['kubejs:range_addon_base', [1, 3], 3],
        ['industrialforegoing:pink_slime_ingot', [1, 2], 2],
        ['industrialforegoing:machine_frame_pity', [1, 3], 4],
        ['industrialforegoing:machine_frame_simple', [1, 2], 3],
        ['industrialforegoing:machine_frame_advanced', [1, 1], 2],
        ['industrialforegoing:machine_frame_supreme', [1, 1], 1]
    ]

    /**
     * 
     * loot_tables/mods/twilight_forest.js
     */
    storageBlockStacks = Ingredient.of('#forge:storage_blocks').filter([
        Ingredient.of('@minecraft'),
        Ingredient.of('@create'),
        Ingredient.of('@thermal'),
        Ingredient.of('@thermal_extra'),
        Ingredient.of('@redstone_arsenal'),
        Ingredient.of('@materialis'),
        Ingredient.of('@tconstruct'),
        Ingredient.of('@aquaculture'),
        Ingredient.of('@twilightforest'),
        Ingredient.of('@ae2'),
        Ingredient.of('@architects_palette'),
        Ingredient.of('@create_dd'),
        Ingredient.of('@enlightened_end')
    ]).filter(Ingredient.of('create_dd:leather_block').not()).getStacks()

    global.shuffledOreMap = shuffledOreMap

    global.createPrize = createPrize
    global.thermalMats = thermalMats
    global.thermalPrize = thermalPrize
    global.tconMats = tconMats
    global.tconstructPrize = tconstructPrize
    global.tforestMats = tforestMats
    global.tforestPrize = tforestPrize
    global.minecraftMats = minecraftMats
    global.minecraftPrize = minecraftPrize
    global.foregoingPrize = foregoingPrize

    global.storageBlockStacks = storageBlockStacks
})