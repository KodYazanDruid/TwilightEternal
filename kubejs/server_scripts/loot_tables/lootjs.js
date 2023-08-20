const $Random = java('java.util.Random')
/* const $LootItemCondition = java("net.minecraft.world.level.storage.loot.predicates.LootItemCondition")
const $EnchantTome = java('vazkii.quark.content.tools.loot.EnchantTome') */

let colorIDs = []
for(let i of colors) colorIDs.push(`minecraft:${i}_dye`)
for(let i of dyenamiColors) colorIDs.push(`dyenamics:${i}_dye`)

/* let allEnchants = Array.from($Registry.ENCHANTMENT.keySet().toArray()) */

onEvent('lootjs', event => {
    // TODO Convert ALL of the KubeJS loot table modifier codes to LootJS
    event.addLootTableModifier('minecraft:chests/buried_treasure')
        .removeLoot(Ingredient.getAll().filter([Ingredient.of('tnt'), Ingredient.of(Item.of('thermaloot:variable_capacitor').ignoreNBT())]).not())
        .addLoot('heart_of_the_sea')
        .addWeightedLoot([TCOMP+':iron_knife', TCOMP+':nickel_knife', TCOMP+':bronze_knife', TCOMP+':constantan_knife'])
        .addWeightedLoot(['thermal:diving_helmet', 'thermal:diving_chestplate', 'thermal:diving_leggings', 'thermal:diving_boots'])
        .addWeightedLoot([Item.of('minecraft:potion', '{Potion:"minecraft:long_water_breathing"}'), 'brewinandchewin:salty_folly', 'bundledelight:salty_folly_glass', 'bundledelight:salty_folly_swig'])
        .pool(pool => {
            pool.randomChance(0.75)
            pool.addWeightedLoot(2, true, [
                LootEntry.of('diamond').limitCount([2, 4]),
                LootEntry.of('emerald').limitCount([3, 18])
            ])
        })
        .pool(pool => {
            pool.randomChance(0.7)
            pool.addWeightedLoot(2, true, [
                LootEntry.of('prismarine_crystals').limitCount([5, 12]),
                LootEntry.of('prismarine_shard').limitCount([3, 9])
            ])
        })
        .pool(pool => {
            pool.addWeightedLoot(2, [
                LootEntry.of("iron_ingot").limitCount([2, 6]),
                LootEntry.of("gold_ingot").limitCount([1, 3]),
                LootEntry.of("copper_ingot").limitCount([4, 9]),
                LootEntry.of("create:zinc_ingot").limitCount([2, 7]),
                LootEntry.of("thermal:tin_ingot").limitCount([2, 5]),
                LootEntry.of("thermal:nickel_ingot").limitCount([2, 5]),
                LootEntry.of("thermal:silver_ingot").limitCount([1, 4]),
                LootEntry.of("thermal:lead_ingot").limitCount([2, 4]),
                LootEntry.of(TCON+":cobalt_ingot").limitCount([1, 2])
            ])
            pool.addWeightedLoot([
                LootEntry.of('cooked_salmon').limitCount([2, 5]),
                LootEntry.of(FD+':cooked_salmon_slice').limitCount([2, 5]),
                LootEntry.of(FD+':salmon_roll').limitCount([2, 5]),
                LootEntry.of('cooked_cod').limitCount([2, 5]),
                LootEntry.of(FD+':cooked_cod_slice').limitCount([2, 5]),
                LootEntry.of(FD+':cod_roll').limitCount([2, 5])
            ])
        })

        //Aquaculture 2 treasure fishing loot
        event.addLootTableModifier('aquaculture:box/neptunes_bounty')
            .addWeightedLoot(5, [
                LootEntry.of('farmersrespite:coffee_beans').limitCount([1, 3]), //Coffee Beans
                LootEntry.of('farmersrespite:tea_seeds').limitCount([1, 3]), //Tea Seeds
                LootEntry.of('minecraft:sea_pickle').limitCount([1, 2]), //Sea Pickle
                LootEntry.of('minecraft:seagrass').limitCount([2, 3]), //Seagrass
                LootEntry.of('farmersdelight:tree_bark').limitCount([1, 3]), //Tree Bark
                LootEntry.of('farmersdelight:canvas').limitCount([1, 2]), //Canvas
                LootEntry.of('thermal:compost').limitCount([2, 4]), //Compost
                LootEntry.of('thermal:phytogro').limitCount([1, 3]), //Phytogro
                LootEntry.of('thermal:aquachow').limitCount([2, 5]), //Aquachow
                LootEntry.of('thermal:deep_aquachow').limitCount([1 , 3]) //Deep Aquachow
            ])
            .addWeightedLoot(2, arrayToLoot(colorIDs, [2, 5]))
            /* .apply(ctx => {
                let jrand = $Random().nextInt(4)
                ctx.addLoot(Item.of(getRandomTicTool(jrand), '{tic_materials:["materialis:neptunium", "materialis:neptunium", "materialis:neptunium"]}'))
            }) */
        event.addLootTableModifier('aquaculture:box/neptunes_bounty_junk')
            .addWeightedLoot(3, [
                LootEntry.of('farmersdelight:tree_bark').limitCount([1, 3]), //Tree Bark
                LootEntry.of('thermal:compost').limitCount([2, 4]), //Compost
                LootEntry.of('minecraft:seagrass').limitCount([2, 5]), //Seagrass
                LootEntry.of('waterstrainer:fertilizer').limitCount([2, 4]), //Fertilizer
                LootEntry.of('minecraft:sea_pickle').limitCount([1, 2]) //Sea Pickle
            ])

        //event.addLootTableModifier('aquaculture:box/box')

        //event.addLootTableModifier('aquaculture:box/lockbox')

        /* event.addLootTableModifier('aquaculture:box/treasure_chest')
            .addLoot(itemChance('aquaculture:neptunium_ingot', 1))
            .addLoot(Item.of(getRandomTicTool(), '{tic_materials:["materialis:neptunium", "materialis:neptunium", "materialis:neptunium"]}')) */

        const ignoreSD = [
            Ingredient.of(Item.of('quark:ancient_tome').ignoreNBT()), 
            Ingredient.of(Item.of('thermaloot:variable_capacitor').ignoreNBT())
        ]
        //const musicDiscs = Ingredient.of('#minecraft:music_discs').filter(Item.of('minecraft:'))
        event.addLootTableModifier('minecraft:chests/simple_dungeon')
            .removeLoot(Ingredient.getAll().filter(ignoreSD).not())
            .addWeightedLoot(2, arrayToLoot(Ingredient.of('#forge:seeds').getStacks(), 1))
            .addWeightedLoot([2, 4], )

        /* event.addLootTableModifier('minecraft:blocks/coarse_dirt')
            .apply(ctx => {
                let tomeInstance = new $EnchantTome(new $LootItemCondition[0])
                tomeInstance.run(Item.of('quark:ancient_tome'), )
            }) */

        event.addBlockLootModifier

})

let itemChance = (item, chance) => { return Item.of(item).withChance(chance) }

function getRandomTicTool(rand) {
    switch(rand){
        case 0:
            return TCON+':sword'
        case 1:
            return TCON+':pickaxe'
        case 2:
            return TCON+':hand_axe'
        case 3:
            return 'tinkers_things:shovel'
    }
}

let arrayToLoot = (array, qty) => {
    let entry = []
    for(let i of array) entry.push(LootEntry.of(i).limitCount(qty))
    return entry
}
