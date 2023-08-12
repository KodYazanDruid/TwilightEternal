const tfep = TF + ':entities/'
const tfsp = TF + ':structures/'

onEvent('lootjs', event => {
    event.addLootTableModifier(tfep + 'naga')
        .addWeightedLoot(2, true, [
            LootEntry.of(TF + ':liveroot').limitCount([1, 2]),
            LootEntry.of(TF + ':raw_ironwood').limitCount([2, 5]),
        ])
        .pool(p => {
            p.randomChance(0.75)
            p.addWeightedLoot(2, [
                LootEntry.of('redstone').limitCount([3, 7]),
                LootEntry.of('glowstone_dust').limitCount([3, 7]),
                LootEntry.of(TF + ':raven_feather').limitCount([1, 2])
            ])
        })

    event.addLootTableModifier(tfep + 'questing_ram_rewards')
        .removeLoot(Ingredient.getAll())
        .addLoot(TF + ':crumble_horn')
        .apply(ctx => ctx.addLoot(bundleGen()))
        
})

function bundleGen() {
    let invArr = []
    Ingredient.of('#forge:storage_blocks').filter([
        Ingredient.of('@minecraft'),
        Ingredient.of('@create'),
        Ingredient.of('@thermal'),
        Ingredient.of('@thermal_extra'),
        Ingredient.of('@redstone_arsenal'),
        Ingredient.of('@materialis'),
        Ingredient.of('@tconstruct')
    ]).getStacks().forEach(stk => {
        if(stk.anyStackMatches(Ingredient.of(blStorage))) { return }
        invArr.push(`{Count:1b,id:"${stk.getId()}"}`.replace("'", ""))
    })

    return Item.of('bundle', `{Items:[{Count:1b,id:"twilightforest:quest_ram_trophy"},${invArr.selectRandomElements(8)}]}`)
}

Array.prototype.shuffle = function () {
    var m = this.length, t, i
    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = $Random().nextInt(m--)
        // And swap it with the current element.
        t = this[m]
        this[m] = this[i]
        this[i] = t
    }
    return this
}
Array.prototype.selectRandomElements = function (count) { return this.shuffle().slice(0, count) }