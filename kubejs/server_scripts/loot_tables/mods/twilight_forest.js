//priority: 2
const tfep = TF + ':entities/'
const tfsp = TF + ':structures/'

let rich = ['looting', 'fortune']

const seeds = Ingredient.of('#forge:seeds').itemIds

onEvent('lootjs', event => {
    event.addLootTypeModifier(LootType.ENTITY)
        .anyDimension('twilightforest:twilight_forest')
        .randomChance(.01)
        .addLoot('twilighttweaks:time_powder')

    event.addLootTableModifier(/twilightforest:structures\/\w+/)
        .replaceLoot(TFt`red_thread`, 'redstone', true)
        .replaceLoot(Item.of(TFt`mazebreaker_pickaxe`).ignoreNBT(), Item.of('twilightforest:mazebreaker_pickaxe', '{Damage:0}').enchant('minecraft:fortune', 4).enchant('minecraft:efficiency', 5).enchant('minecraft:unbreaking', 3))
        .apply(ctx => {
            ctxReplaceMaybe(ctx, TFt`maze_wafer`, 'twilightdelight:chocolate_wafer', .5)
            ctxReplaceMaybe(ctx, 'coal', 'thermal:coal_coke', .5)
            ctxReplaceLoot(ctx, 'wheat_seeds', seeds)
            ctxReplaceLoot(ctx, Item.of('potion').ignoreNBT(), 'potion', randomPotionNbt)
            ctxReplaceLoot(ctx, Item.of('splash_potion').ignoreNBT(), 'splash_potion', randomPotionNbt)
            ctxReplaceLoot(ctx, Item.of('iron_sword').ignoreNBT(), LootEntry.of(selectRandomItem(Ingredient.of('#forge:tools/swords').filter('@tools_complement').itemIds)).enchantRandomly())
        })

    event.addLootTableModifier(tfep + 'questing_ram_rewards')
        .removeLoot(Ingredient.all)
        .apply(ctx => ctx.addLoot(bundleGen()))

    event.addLootTableModifier(tfep + 'naga')
        .pool(p => {
            p.addLoot(LootEntry.of(TF + ':liveroot').limitCount([1, 2]))
            p.addLoot(LootEntry.of(TF + ':raw_ironwood').limitCount([2, 5]))
            p.applyLootingBonus([1, 2])
        })
        .pool(p => {
            p.addWeightedLoot(2, [
                LootEntry.of('redstone').limitCount([3, 7]),
                LootEntry.of('glowstone_dust').limitCount([3, 7]),
                LootEntry.of(TF + ':raven_feather').limitCount([1, 2])
            ])
            p.applyLootingBonus([1, 2])
        })
        .apply(ctx => {
            ctx.addLoot(TF_BUNDLE.enchant(rich[~~(Math.random() * rich.length)], pickInRange(1, 3)))
        })

    event.addLootTableModifier(tfep + 'lich')
        .removeLoot(Ingredient.getAll())
        .addLoot(TF + ':lich_trophy')
        .addWeightedLoot([
            TF + ':twilight_scepter', TF + ':lifedrain_scepter',
            TF + ':zombie_scepter', TF + ':fortification_scepter'
        ])
        .addWeightedLoot(2, [
            LootEntry.of('golden_apple').limitCount([1, 2]),
            LootEntry.of('ender_pearl').limitCount([1, 4]),
            LootEntry.of('bone').limitCount([2, 5])
        ])
        .addWeightedLoot([2, 3], [
            LootEntry.of('copper_ingot').limitCount([4, 7]),
            LootEntry.of('create:zinc_ingot').limitCount([3, 5]),
            LootEntry.of('thermal:steel_ingot').limitCount([1, 3]),
            LootEntry.of(TF + ':ironwood_ingot').limitCount([3, 6])
        ])
        .addWeightedLoot([2, 4], true, [
            LootEntry.of(TCOMP + ':electrum_helmet').enchantWithLevels(30, true),
            LootEntry.of(TCOMP + ':electrum_chestplate').enchantWithLevels(30, true),
            LootEntry.of(TCOMP + ':electrum_leggings').enchantWithLevels(30, true),
            LootEntry.of(TCOMP + ':electrum_boots').enchantWithLevels(30, true),
            LootEntry.of(TCOMP + ':electrum_sword').enchantWithLevels(30, true)
        ])
        .apply(ctx => {
            ctx.addLoot(TF_BUNDLE.enchant(rich[~~(Math.random() * rich.length)], pickInRange(1, 3)))
        })

    event.addLootTableModifier(tfep + 'minoshroom')
        .apply(ctx => {
            ctx.addLoot(TF_BUNDLE.enchant(rich[~~(Math.random() * rich.length)], pickInRange(1, 3)))
        })

    event.addLootTableModifier(tfep + 'hydra')
        .apply(ctx => {
            ctx.addLoot(TF_BUNDLE.enchant(rich[~~(Math.random() * rich.length)], pickInRange(1, 3)))
        })

    event.addLootTableModifier(tfep + 'alpha_yeti')
        .apply(ctx => {
            ctx.addLoot(TF_BUNDLE.enchant(rich[~~(Math.random() * rich.length)], pickInRange(1, 3)))
        })

    event.addLootTableModifier(tfep + 'snow_queen')
        .apply(ctx => {
            ctx.addLoot(TF_BUNDLE.enchant(rich[~~(Math.random() * rich.length)], pickInRange(1, 3)))
        })

    event.addLootTableModifier(tfsp + 'stronghold_boss')
        .addWeightedLoot(2, true, [
            LootEntry.of(TF + ':knightmetal_ingot').limitCount([3, 6]),
            LootEntry.of('kubejs:knightmetal_nugget').limitCount([6, 10]),
        ])
        .addWeightedLoot(2, true, [
            LootEntry.of(TF + ':raw_venison').limitCount([2, 4]),
            LootEntry.of(TF + ':cooked_venison').limitCount([1, 3]),
            LootEntry.of('twilightdelight:raw_venison_rib').limitCount([3, 5]),
            LootEntry.of('twilightdelight:cooked_venison_rib').limitCount([2, 4])
        ])
        .apply(ctx => {
            ctx.addLoot(TF_BUNDLE.enchant(rich[~~(Math.random() * rich.length)], pickInRange(1, 3)))
        })

    event.addLootTableModifier(tfsp + 'darktower_boss')
        .apply(ctx => {
            ctx.addLoot(TF_BUNDLE.enchant(rich[~~(Math.random() * rich.length)], pickInRange(1, 3)))
        })

    event.addLootTableModifier(tfsp + 'useless')
        .removeLoot(Ingredient.all)
        .apply(ctx => {
            let entries = [
                LootEntry.of(Item.of(selectRandomItem(Ingredient.of('#forge:feathers').itemIds))).limitCount([1, 3]),
                LootEntry.of('flower_pot'),
                LootEntry.of('sand'),
                LootEntry.of('bone_meal'),
                LootEntry.of('flint').limitCount([1, 3]),
            ].concat(arrayToLoot(selectRandomElements(seeds, 2), 1, 3))
                .concat(arrayToLoot(selectRandomElements(filtered_flowers, 2), 1, 3))
                .concat(arrayToLoot(selectRandomElements(Ingredient.of(['bamboo', 'sugar_cane', 'cactus']).itemIds, 2), 1, 3))
            ctx.addLoot(selectRandomElement(entries))
        })

    event.addLootTableModifier(tfsp + 'tower_room')
        .removeLoot(Ingredient.of(['potion', 'splash_potion']).not())
        .pool(p => {
            p.randomChance(.4)
            p.addWeightedLoot([2, 3], true, [
                LootEntry.of('create_sa:brass_sword').enchantRandomly().withChance(.7),
                LootEntry.of('create_sa:brass_axe').enchantRandomly().withChance(.7),
                LootEntry.of('create_sa:experience_sword').enchantRandomly().withChance(.7),
                LootEntry.of('create_sa:experience_axe').enchantRandomly().withChance(.7),
                LootEntry.of('tools_complement:nickel_sword').enchantRandomly().withChance(.7),
                LootEntry.of('tools_complement:nickel_axe').enchantRandomly().withChance(.7),
                LootEntry.of('tools_complement:nickel_helmet').enchantRandomly().withChance(.7),
                LootEntry.of('tools_complement:nickel_chestplate').enchantRandomly().withChance(.7),
                LootEntry.of('tools_complement:nickel_leggings').enchantRandomly().withChance(.7),
                LootEntry.of('tools_complement:nickel_boots').enchantRandomly().withChance(.7)
            ])
        })
        .pool(p => {
            p.randomChance(.3)
            p.addWeightedLoot([
                LootEntry.of('twilightforest:transformation_powder').limitCount([2, 4]).withWeight(4),
                LootEntry.of('twilightforest:charm_of_keeping_1').withWeight(2),
                LootEntry.of('twilightforest:peacock_feather_fan')
            ])
        })
        .addWeightedLoot(2, true, [
            LootEntry.of('cactus').limitCount([1, 3]),
            LootEntry.of('poppy').limitCount([1, 2]),
            LootEntry.of('dandelion').limitCount([1, 2])
        ])
        .addWeightedLoot(2, true, [
            LootEntry.of('minecraft:spider_eye').limitCount([1, 3]),
            LootEntry.of('minecraft:fermented_spider_eye').limitCount([1, 2]),
            LootEntry.of('minecraft:glass_bottle'),
            LootEntry.of('minecraft:ghast_tear'),
            LootEntry.of('minecraft:sugar').limitCount([1, 3]),
            LootEntry.of('minecraft:blaze_powder').limitCount([1, 2]),
            LootEntry.of('minecraft:magma_cream').limitCount([2, 3]),
            LootEntry.of('minecraft:glistering_melon_slice').limitCount([1, 2])
        ])
        .addWeightedLoot(2, true, [
            LootEntry.of('twilightforest:steeleaf_ingot').limitCount([1, 2]),
            LootEntry.of('twilightforest:ironwood_ingot').limitCount([1, 2]),
            LootEntry.of('iron_ingot').limitCount([2, 3]),
            LootEntry.of('gold_ingot').limitCount([1, 2])
        ])

    event.addLootTableModifier(tfsp + 'tower_library')
        .apply(ctx => {
            ctxReplaceLoot(ctx, Item.of('golden_pickaxe').ignoreNBT(), LootEntry.of(selectRandomItem(Ingredient.of('#forge:tools/pickaxes').filter('@tools_complement').itemIds)).enchantRandomly())
            ctxReplaceLoot(ctx, Item.of('iron_leggings').ignoreNBT(), LootEntry.of('twilightforest:ironwood_leggings').enchantRandomly())
        })

    event.addLootTableModifier(tfsp + 'stronghold_room')
        .removeLoot(Ingredient.of('#forge:ingots'))
        .replaceLoot(Item.of('diamond_sword').ignoreNBT(), LootEntry.of('create_sa:rose_quartz_sword').enchantRandomly(), true)
        .addWeightedLoot(2, true, [
            LootEntry.of('iron_ingot').limitCount([2, 4],),
            LootEntry.of('copper_ingot').limitCount([4, 6],),
            LootEntry.of('create:zinc_ingot').limitCount([3, 4],),
            LootEntry.of(TFt`ironwood_ingot`).limitCount([2, 4],)
        ])

    event.addLootTableModifier(tfsp + 'labyrinth_vault')
        .apply(ctx => {
            ctxReplaceLoot(ctx, 'emerald_block', ['diamond_block', 'emerald_block', 'netherite_block', CDDt`chromatic_block`, CDDt`refined_radiance_block`, CDDt`shadow_steel_block`])
        })

    event.addLootTableModifier(tfsp + 'hill_1')
        .apply(ctx => {
            ctxReplaceLoot(ctx, Item.of('iron_pickaxe').ignoreNBT(), LootEntry.of(selectRandomItem(Ingredient.of('#forge:tools/pickaxes').filter('@tools_complement').itemIds)).enchantWithLevels(15))
        })
    /*
    twilightforest:structures/stronghold_boss ☺
    twilightforest:structures/stronghold_room ☺
    twilightforest:structures/tower_room ☺
    twilightforest:structures/tower_library ☺
    twilightforest:structures/useless ☺
    twilightforest:structures/labyrinth_room ☻
    twilightforest:structures/labyrinth_vault ☻
    twilightforest:structures/labyrinth_dead_end ☻
    twilightforest:structures/stronghold_cache ☻
    twilightforest:structures/aurora_cache ☻
    twilightforest:structures/well ☻
    twilightforest:structures/graveyard ☻
    twilightforest:structures/quest_grove_dropper ☻
    twilightforest:structures/hill_3 ☻
    twilightforest:structures/hill_2 ☻
    twilightforest:structures/hill_1 ☻
    twilightforest:structures/troll_vault ♥
    twilightforest:structures/tree_cache ♥
    twilightforest:structures/aurora_room ♥
    twilightforest:structures/troll_garden ☻
    twilightforest:structures/darktower_cache ☻
    twilightforest:structures/fancy_well
    twilightforest:structures/hedge_maze
    twilightforest:structures/darktower_key
    twilightforest:structures/foundation_basement
    twilightforest:structures/darktower_boss
    twilightforest:structures/basement
    */
})

let randomPotionNbt = () => '{Potion:"' + getRandomItem(Utils.getRegistry('potion').getIds().toArray().filter(i => i != 'minecraft:empty')) + '"}'

// blStrage defined in item_tags.js
function bundleGen() {
    let invArr = []
    global.storageBlockStacks.forEach(stk => {
        if (stk.anyStackMatches(Ingredient.of(global.blStorage))) { return }
        invArr.push(`{Count:1b,id:"${stk.getId()}"}`.replace("'", ""))
    })
    return Item.of('bundle', `{Items:[{Count:1b,id:"twilightforest:quest_ram_trophy"},{Count:1b,id:"twilightforest:crumble_horn"},${selectRandomElements(invArr, 8)}]}`)
}