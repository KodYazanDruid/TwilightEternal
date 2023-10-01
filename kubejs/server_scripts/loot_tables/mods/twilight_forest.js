const tfep = TF + ':entities/'
const tfsp = TF + ':structures/'

onEvent('lootjs', event => {
    event.addLootTableModifier(tfep + 'questing_ram_rewards')
        .removeLoot(Ingredient.all)
        .addLoot(TF + ':crumble_horn')
        .apply(ctx => {ctx.addLoot(bundleGen()); console.log('rolled')})
        
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

    event.addLootTableModifier(tfep + 'lich')
        .removeLoot(Ingredient.getAll())
        .addLoot(TF+':lich_trophy')
        .addWeightedLoot([
            TF+':twilight_scepter', TF+':lifedrain_scepter',
            TF+':zombie_scepter', TF+':fortification_scepter'
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
            LootEntry.of(TF+':ironwood_ingot').limitCount([3, 6])
        ])
        .addWeightedLoot([2, 4], true, [
            LootEntry.of(TCOMP+':electrum_helmet').enchantWithLevels(30, true),
            LootEntry.of(TCOMP+':electrum_chestplate').enchantWithLevels(30, true),
            LootEntry.of(TCOMP+':electrum_leggings').enchantWithLevels(30, true),
            LootEntry.of(TCOMP+':electrum_boots').enchantWithLevels(30, true),
            LootEntry.of(TCOMP+':electrum_sword').enchantWithLevels(30, true)
        ])
        
})

// blStrage defined in item_tags.js
function bundleGen() {
    let invArr = []
    global.storageBlockStacks.forEach(stk => {
        if(stk.anyStackMatches(Ingredient.of(global.blStorage))) { return }
        invArr.push(`{Count:1b,id:"${stk.getId()}"}`.replace("'", ""))
    })
    return Item.of('bundle', `{Items:[{Count:1b,id:"twilightforest:quest_ram_trophy"},${selectRandomElements(invArr, 8)}]}`)
}
