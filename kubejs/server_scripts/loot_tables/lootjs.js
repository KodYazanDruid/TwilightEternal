const $LootItemConditionBuilder = java('net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder')

let colorIDs = []
for (let i of colors) colorIDs.push(`minecraft:${i}_dye`)
for (let i of dyenamiColors) colorIDs.push(`dyenamics:${i}_dye`)

const filtered_flowers = Ingredient.of('#minecraft:small_flowers').filter(Ingredient.of(['@farmersdelight', 'wither_rose']).not()).itemIds

onEvent('lootjs', event => {
    // TODO Convert ALL of the KubeJS loot table modifier codes to LootJS
    // Maybe not
    // Well... Maybe yes because this shit is good.

    //Global
    event.addLootTypeModifier(LootType.CHEST)
        .replaceLoot('bucket', 'miners_delight:copper_cup')
        .replaceLoot('milk_bucket', 'miners_delight:milk_cup')
        .replaceLoot('water_bucket', 'miners_delight:water_cup')
        .replaceLoot('beetroot_soup', 'miners_delight:beetroot_soup_cup')
        .replaceLoot('mushroom_stew', 'miners_delight:mushroom_stew_cup')
        .apply(ctx => {
            ctx.findLoot([
                Item.of('leather_helmet').ignoreNBT(),
                Item.of('leather_chestplate').ignoreNBT(),
                Item.of('leather_leggings').ignoreNBT(),
                Item.of('leather_boots').ignoreNBT(),
                Item.of('leather_horse_armor').ignoreNBT()
            ]).forEach(stk => {
                let id = stk.id
                let nbt = stk.nbt
                ctx.removeLoot(stk)
                let item = Item.of(id, nbt)
                item.nbt.merge(randomColorNbt())
                ctx.addLoot(item)
            })
            ctxWeighedReplace(ctx, 'bread', [
                ['neapolitan:banana_bread', 5],
                ['alexsdelight:bunfungus_sandwich', 3],
                ['farmersdelight:bacon_sandwich', 4],
                ['brewinandchewin:ham_and_cheese_sandwich', 4],
                ['bundledelight:cheeseburger', 2],
                ['bundledelight:scarlet_cheeseburger', 2]
            ])
            ctxWeighedReplace(ctx, ['potato', 'baked_potato'], [
                ['farmersdelight:stuffed_potato', 2],
                ['largemeals:potato_soup', 2],
                ['baked_potato', 3],
                ['potato', 4]
            ])
            ctxWeighedReplace(ctx, ['porkchop', 'cooked_porkchop'], [
                ['farmersdelight:bacon_sandwich', 3],
                ['farmersdelight:bacon_and_eggs', 4],
                ['brewinandchewin:ham_and_cheese_sandwich', 3]
            ])
            ctxWeighedReplace(ctx, ['cod', 'cooked_cod'], [
                ['farmersdelight:fish_stew', 1],
                ['miners_delight:baked_cod_stew_cup', 1],
                ['farmersdelight:cod_roll', 2],
                ['farmersdelight:cooked_cod_slice', 4]
            ])
            ctxWeighedReplace(ctx, ['salmon', 'cooked_salmon'], [
                ['farmersdelight:cooked_salmon_slice', 4],
                ['farmersdelight:salmon_roll', 2],
                ['farmersdelight:grilled_salmon', 1]
            ])
            ctxWeighedReplace(ctx, 'pumpkin_pie', [
                ['farmersdelight:stuffed_pumpkin', 2],
                ['miners_delight:pumpkin_soup_cup', 2],
                ['create_central_kitchen:pumpkin_pie_slice', 4]
            ])
            ctxWeighedReplace(ctx, ['cooked_beef', 'beef'], [
                ['bundledelight:scarlet_cheeseburger', 3],
                ['bundledelight:cheeseburger', 3],
                ['farmersdelight:hamburger', 4],
                ['miners_delight:beef_stew_cup', 4]
            ])
            ctxWeighedReplace(ctx, ['cooked_mutton', 'mutton'], [
                ['farmersdelight:mutton_wrap', 4],
                ['farmersdelight:pasta_with_mutton_chop', 3],
                ['farmersdelight:roasted_mutton_chops', 2]
            ])
            ctxWeighedReplace(ctx, ['cooked_chicken', 'chicken'], [
                ['farmersdelight:chicken_sandwich', 4],
                ['farmersdelight:roast_chicken', 3],
                ['miners_delight:chicken_soup_cup', 3]
            ])
            ctxWeighedReplace(ctx, 'neapolitan:strawberries', [
                ['neapolitan:strawberries', 3],
                ['neapolitan:chocolate_strawberries', 3],
                ['neapolitan:strawberry_milkshake', 3]
            ])
            ctxWeighedReplace(ctx, 'farmersdelight:ham', [
                ['farmersdelight:ham', 5],
                ['farmersdelight:smoked_ham', 4],
                ['brewinandchewin:ham_and_cheese_sandwich', 3]
            ])
            ctxWeighedReplace(ctx, 'sweet_berries', [
                ['sweet_berries', 4],
                ['farmersdelight:sweet_berry_cookie', 3],
                ['farmersdelight:sweet_berry_cheesecake_slice', 3],
                ['twilightdelight:berry_stick', 3]
            ])
            ctxWeighedReplace(ctx, 'rabbit', [
                ['miners_delight:rabbit_stew_cup', 1],
                ['cooked_rabbit', 2]
            ])
            ctxWeighedReplace(ctx, 'pufferfish', [
                ['largemeals:pufferfish_broth', 1],
                ['oceansdelight:fugu_roll', 2],
                ['pufferfish', 3]
            ])
            ctxWeighedReplace(ctx, 'melon', [
                ['melon', 3],
                ['farmersdelight:melon_popsicle', 4],
                ['farmersdelight:melon_juice', 4]
            ])
            ctxReplaceLoot(ctx, 'cookie', Ingredient.of('#twilight:cookies'))
            ctxReplaceLoot(ctx, 'cake', Ingredient.of('#twilight:cakes').filter(Ingredient.of('thermal:potion_cake').not()).itemIds)
            ctxReplaceLoot(ctx, ['iron_ingot', 'gold_ingot', 'copper_ingot'], basicIngots)
            ctxReplaceLoot(ctx, ['iron_nugget', 'gold_nugget'], basicNuggets)
            ctxReplaceLoot(ctx, 'tnt', Ingredient.of('#twilight:tnts').filter(Ingredient.of(['thermal:nuke_tnt', EEt`nuclear_bomb`]).not()).itemIds)
            ctxReplaceLoot(ctx, '#minecraft:flowers', filtered_flowers)
            ctxReplaceLoot(ctx, '#minecraft:wool', Ingredient.of('#minecraft:wool').filter(Ingredient.of('@chipped').not()).itemIds)
            ctxReplaceMaybe(ctx, 'brown_mushroom', 'farmersdelight:brown_mushroom_colony', 0.4)
            ctxReplaceMaybe(ctx, 'red_mushroom', 'farmersdelight:red_mushroom_colony', 0.4)
        })

    event.addLootTableModifier('minecraft:chests/village/village_butcher')
        .apply(ctx => {
            ctxReplaceLoot(ctx, '#farmersdelight:tools/knives', Ingredient.of('#forge:tools/knives').filter(['@tools_complement', '@farmersdelight']).filter(Ingredient.of(['farmersdelight:diamond_knife', 'farmersdelight:netherite_knife', TCOMPt`netherite_knife`, TCOMPt`diamond_knife`]).not()).itemIds)
        })

    event.addLootTableModifier('minecraft:chests/village/village_armorer')
        .apply(ctx => {
            ctxReplaceLoot(ctx, 'iron_helmet', LootEntry.of(selectRandomItem(Ingredient.of('#twilight:head_wearable').filter('@tools_complement').itemIds)).enchantRandomly())
        })

    event.addLootTableModifier('minecraft:chests/village/village_toolsmith')
        .apply(ctx => {
            ctxReplaceLoot(ctx, 'iron_pickaxe', LootEntry.of(selectRandomItem(Ingredient.of('#forge:tools/pickaxes').filter('@tools_complement').itemIds)).enchantRandomly())
            //ctxReplaceLoot(ctx, 'iron_axe', LootEntry.of(selectRandomItem(Ingredient.of('#twilight:axes').filter('@tools_complement').itemIds)))
            ctxReplaceLoot(ctx, 'iron_shovel', LootEntry.of(selectRandomItem(Ingredient.of('#forge:tools/shovels').filter('@tools_complement').itemIds)).enchantRandomly())
        })

    //Blocks
    event.addBlockLootModifier('create_dd:tin_ore')
        .replaceLoot('create_dd:raw_tin', 'thermal:raw_tin')
        .replaceLoot('create_dd:tin_ore', 'thermal:tin_ore')

    // Chests
    event.addLootTableModifier('minecraft:chests/buried_treasure')
        .pool(pool => {
            pool.randomChance(0.7)
            pool.addWeightedLoot(2, true, [
                LootEntry.of('prismarine_crystals').limitCount([4, 8]),
                LootEntry.of('prismarine_shard').limitCount([3, 7])
            ])
        })
        .apply(ctx => {
            if(flipCoin()) ctx.addLoot(Item.of('quark:ancient_tome', genTomeNbt()))
            ctxReplaceLoot(ctx, Item.of('iron_sword').ignoreNBT(), [TCOMP + ':iron_knife', TCOMP + ':nickel_knife', TCOMP + ':bronze_knife', TCOMP + ':constantan_knife'])
            ctxReplaceLoot(ctx, Item.of('potion').ignoreNBT(), [Item.of('minecraft:potion', '{Potion:"minecraft:long_water_breathing"}'), 'brewinandchewin:salty_folly', 'bundledelight:salty_folly_glass', 'bundledelight:salty_folly_swig'])
            ctxReplaceLoot(ctx, Item.of('leather_chestplate').ignoreNBT(), ['thermal:diving_helmet', 'thermal:diving_chestplate', 'thermal:diving_leggings', 'thermal:diving_boots'])
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
            LootEntry.of('thermal:deep_aquachow').limitCount([1, 3]) //Deep Aquachow
        ])
        .addWeightedLoot(2, arrayToLoot(colorIDs, 2, 5))

    event.addLootTableModifier('aquaculture:box/neptunes_bounty_junk')
        .addWeightedLoot(3, [
            LootEntry.of('farmersdelight:tree_bark').limitCount([1, 3]), //Tree Bark
            LootEntry.of('thermal:compost').limitCount([2, 4]), //Compost
            LootEntry.of('minecraft:seagrass').limitCount([2, 5]), //Seagrass
            LootEntry.of('waterstrainer:fertilizer').limitCount([2, 4]), //Fertilizer
            LootEntry.of('minecraft:sea_pickle').limitCount([1, 2]) //Sea Pickle
        ])

    const ignoreSD = [
        Ingredient.of(Item.of('quark:ancient_tome').ignoreNBT()),
        Ingredient.of(Item.of('thermaloot:variable_capacitor').ignoreNBT()),
        Ingredient.of(Item.of('supplementaries:quiver').ignoreNBT())
    ]
    event.addLootTableModifier('minecraft:chests/simple_dungeon')
        .removeLoot(Ingredient.getAll().filter(ignoreSD).not())
        .addLoot(LootEntry.of(FD + ':rope').limitCount([8, 22]))
        .pool(pool => {
            pool.randomChance(0.65)
            pool.addWeightedLoot([
                LootEntry.of('iron_horse_armor').enchantRandomly().withChance(0.3),
                LootEntry.of('golden_horse_armor').enchantRandomly().withChance(0.4),
                LootEntry.of('diamond_horse_armor').enchantRandomly().withChance(0.2)
            ])
        })
        .pool(pool => {
            pool.randomChance(0.3)
            pool.addLoot('book').enchantRandomly()
        })
        .pool(pool => {
            pool.randomChance(0.3)
            pool.addWeightedLoot([
                'enchanted_golden_apple',
                'music_disc_otherside'
            ])
        })
        .addWeightedLoot(2, arrayToLoot(Ingredient.of('#forge:seeds').getStacks(), 4, 7))
        .addWeightedLoot([2, 3], true, [
            LootEntry.of('bone').limitCount([3, 6]),
            LootEntry.of('rotten_flesh').limitCount([3, 6]),
            LootEntry.of('gunpowder').limitCount([3, 6]),
            LootEntry.of('string').limitCount([3, 6]),
            LootEntry.of('spider_eye').limitCount([3, 6]),
            LootEntry.of('miners_delight:bat_wing').limitCount([3, 6])
        ])
        .pool(pool => {
            pool.randomChance(0.4)
            pool.addWeightedLoot([
                LootEntry.of(TCON + ':sky_slime_grass_seeds').limitCount([1, 4]).withChance(0.6),
                LootEntry.of(TCON + ':earth_slime_grass_seeds').limitCount([1, 2]).withChance(0.7),
                LootEntry.of(TCON + ':sky_slime_sapling').limitCount([1, 2]).withChance(0.8),
                LootEntry.of(TCON + ':earth_slime_sapling').withChance(0.9)
            ])
        })
        .pool(pool => {
            pool.randomChance(0.75)
            pool.addWeightedLoot(2, [
                LootEntry.of('saddle'),
                LootEntry.of('name_tag'),
                LootEntry.of('supplementaries:bomb_blue'),
                LootEntry.of('quark:blank_rune').limitCount([2, 3]),
                LootEntry.of('golden_apple').limitCount([1, 3]),
                LootEntry.of('miners_delight:cave_carrot').limitCount([3, 6])
            ])
        })
        .addWeightedLoot(2, [
            LootEntry.of("iron_ingot").limitCount([2, 6]),
            LootEntry.of("gold_ingot").limitCount([1, 3]),
            LootEntry.of("copper_ingot").limitCount([4, 9]),
            LootEntry.of("create:zinc_ingot").limitCount([2, 7]),
            LootEntry.of("thermal:tin_ingot").limitCount([2, 5]),
            LootEntry.of("thermal:nickel_ingot").limitCount([2, 5]),
            LootEntry.of("thermal:silver_ingot").limitCount([1, 4]),
            LootEntry.of("thermal:lead_ingot").limitCount([2, 4]),
            LootEntry.of(TCON + ":cobalt_ingot").limitCount([1, 2])
        ])
        .addWeightedLoot(2, [
            LootEntry.of('redstone').limitCount([4, 9]),
            LootEntry.of('lapis_lazuli').limitCount([4, 9]),
            LootEntry.of('coal').limitCount([4, 9])
        ])
        .apply(ctx => {
            ctx.addLoot(LootEntry.of(selectRandomElement(Ingredient.of('#minecraft:creeper_drop_music_discs').itemIds)).withChance(0.37))
        })

    // Nether Fortress
    event.addLootTableModifier('minecraft:chests/nether_bridge')
        .removeLoot(Ingredient.all)
        .addWeightedLoot(2, [
            LootEntry.of('minecraft:golden_sword').enchantRandomly().limitCount([1, 1]),
            LootEntry.of('minecraft:golden_chestplate').enchantRandomly().limitCount([1, 1]),
            LootEntry.of('minecraft:golden_leggings').enchantRandomly().limitCount([1, 1]),
            LootEntry.of('minecraft:golden_boots').enchantRandomly().limitCount([1, 1]),
            LootEntry.of('minecraft:golden_helmet').enchantRandomly().limitCount([1, 1])
        ])
        .addWeightedLoot(2, true, [
            LootEntry.of('gold_ingot').limitCount([2, 4]),
            LootEntry.of('iron_ingot').limitCount([3, 6]),
            LootEntry.of('tconstruct:cobalt_nugget').limitCount([6, 9]),
            LootEntry.of('stalwart_dungeons:raw_tungsten').limitCount([2, 4])
        ])
        .addWeightedLoot(2, [
            LootEntry.of('nethersdelight:nether_skewer').limitCount([3, 5]),
            LootEntry.of('nethersdelight:hoglin_sirloin').limitCount([2, 4]),
            LootEntry.of('nethersdelight:strider_moss_stew').limitCount([2, 6]),
            LootEntry.of('nethersdelight:strider_slice').limitCount([3, 7]),
            LootEntry.of('nethersdelight:hoglin_ear').limitCount([3, 8])
        ])
        .pool(pool => {
            pool.randomChance(0.75)
            pool.addWeightedLoot([2, 4], [
                LootEntry.of('saddle'),
                LootEntry.of('name_tag'),
                LootEntry.of('flint_and_steel'),
                LootEntry.of('supplementaries:bomb_blue'),
                LootEntry.of('quark:blank_rune').limitCount([2, 3]),
                LootEntry.of('golden_apple').limitCount([1, 3]),
                LootEntry.of('obsidian').limitCount([2, 4]),
                LootEntry.of('quark:ancient_tome')
            ])
        })
        .pool(pool => {
            pool.randomChance(0.75)
            pool.addWeightedLoot(2, [
                LootEntry.of('nether_wart').limitCount([2, 4]),
                LootEntry.of('tconstruct:blood_slime_grass_seeds').limitCount([1, 4])
            ])
        })
        .pool(pool => {
            pool.randomChance(0.65)
            pool.addWeightedLoot([
                LootEntry.of('iron_horse_armor').enchantRandomly().withChance(0.3),
                LootEntry.of('golden_horse_armor').enchantRandomly().withChance(0.4),
                LootEntry.of('diamond_horse_armor').enchantRandomly().withChance(0.2)
            ])
        })
        .pool(pool => {
            pool.randomChance(0.3)
            pool.addLoot(LootEntry.of('diamond').limitCount([1, 3]))
        })
        .apply(ctx => {
            ctx.findLoot('quark:ancient_tome').forEach(stk => stk.setNbt(genTomeNbt()))
            ctx.addLoot(LootEntry.of('thermaloot:single_capacitor'))
        })

    //Replace blank rune with rainbow rune
    event.addLootTypeModifier(LootType.ENTITY, LootType.BLOCK, LootType.CHEST, LootType.FISHING)
        .replaceLoot('quark:blank_rune', 'quark:rainbow_rune', true)
        .replaceLoot('alexsmobs:banana', 'neapolitan:banana', true)

    //Ae2 meteorite loot
    event.addLootTableModifier('ae2:chests/meteorite')
        .pool(p => {
            p.randomChance(0.5)
            p.addLoot(LootEntry.of('ender_pearl').limitCount([1, 2]))
        })
        .apply(ctx => {
            ctxReplaceLoot(ctx, 'gold_nugget', filteredNuggets)
        })

    //Unusual end
    event.addLootTableModifier(/unusualend:chests\/\w+/)
        .apply(ctx => {
            ctxReplacePreserveNbt(ctx, Item.of('iron_sword').ignoreNBT(), 'enlightened_end:tenebrium_sword')
            ctxWeighedReplace(ctx, ['chorus_fruit', 'unusualend:chorus_pie', 'unusualend:ender_stew', 'unusualend:chorus_juice'], [
                ['endersdelight:crawling_sandwich', 3],
                ['endersdelight:chorus_pie_slice', 2],
                ['exquisito:chorus_khanom_chan', 1],
                ['exquisito:chorus_ice_cream', 3],
                ['exquisito:halo_halo', 1]
            ])
        })

    event.addLootTableModifier('minecraft:chests/ancient_end_city')
        .apply(ctx => {
            ctxReplacePreserveNbt(ctx, Item.of('iron_pickaxe').ignoreNBT(), 'enlightened_end:tenebrium_pickaxe')
        })

    event.addLootTableModifier('minecraft:chests/end_house')
        .apply(ctx => {
            ctxReplacePreserveNbt(ctx, Item.of('iron_pickaxe').ignoreNBT(), 'enlightened_end:tenebrium_pickaxe')
        })
})

let itemChance = (item, chance) => { return Item.of(item).withChance(chance) }

function getRandomTicTool(rand) {
    switch (rand) {
        case 0:
            return TCON + ':sword'
        case 1:
            return TCON + ':pickaxe'
        case 2:
            return TCON + ':hand_axe'
        case 3:
            return 'tinkers_things:shovel'
    }
}

let arrayToLoot = (array, min, max) => {
    let entry = []
    for (let i of array) entry.push(LootEntry.of(i).limitCount([min, max]))
    return entry
}

let selectRandomItem = (array) => array[~~(Math.random() * array.length)]

function ctxReplaceLoot(ctx, filter, replacement, nbt) {
    ctx.findLoot(filter).forEach(i => {
        let count = i.count
        ctx.removeLoot(i)
        if (Array.isArray(replacement)) nbt ? ctx.addLoot(LootEntry.of(selectRandomItem(replacement)).limitCount(count).addNbt(nbt())) : ctx.addLoot(LootEntry.of(selectRandomItem(replacement)).limitCount(count))
        else nbt ? ctx.addLoot(LootEntry.of(replacement).limitCount(count).addNbt(nbt())) : ctx.addLoot(LootEntry.of(replacement).limitCount(count))
    })
}

function ctxReplaceMaybe(ctx, filter, replacement, chance, nbt) {
    ctx.findLoot(filter).forEach(i => {
        if (Math.random() < chance) {
            let count = i.count
            ctx.removeLoot(i)
            if (Array.isArray(replacement)) nbt ? ctx.addLoot(LootEntry.of(selectRandomItem(replacement)).limitCount(count).addNBT(nbt())) : ctx.addLoot(LootEntry.of(selectRandomItem(replacement)).limitCount(count))
            else nbt ? ctx.addLoot(LootEntry.of(replacement).limitCount(count).addNBT(nbt())) : ctx.addLoot(LootEntry.of(replacement).limitCount(count))
        }
    })
}

function ctxReplacePreserveNbt(ctx, filter, replacement) {
    ctx.findLoot(filter).forEach(i => {
        let count = i.count
        let nbt = i.nbt
        ctx.removeLoot(i)
        if (Array.isArray(replacement)) ctx.addLoot(LootEntry.of(selectRandomItem(replacement)).limitCount(count).addNbt(nbt))
        else ctx.addLoot(LootEntry.of(replacement).limitCount(count).addNbt(nbt))
    })
}

function ctxWeighedReplace(ctx, filter, map) {
    ctx.findLoot(filter).forEach(e => {
        let count = e.count
        let weighedList = new Map(map)
        let weights = Array.from(weighedList.values()).reduce((part, a) => part += a)
        ctx.removeLoot(e)
        let counts = []
        Array.from(weighedList.values()).forEach(e => counts.push(Math.round(e / weights * count)))
        let countedMap = Array.from(weighedList.keys()).map((e, i) => [e, counts[i]])
        countedMap.forEach(v => ctx.addLoot(LootEntry.of(v[0]).limitCount(flipCoin() ? flipCoin() ? v[1] + 1 : v[1] - 1 : v[1])))
    })
}