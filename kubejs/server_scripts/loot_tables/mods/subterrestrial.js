const sp = (type) => `subterrestrial:chests/cabin/${type}`

onEvent('lootjs', event => {
    event.addLootTableModifier(/subterrestrial:chests\/cabin\/\w+/)
        .apply(ctx => {
            let helmet = selectRandomItem(tcomp_helmets)
            let chestplate = selectRandomItem(tcomp_chestplates)
            let leggings = selectRandomItem(tcomp_leggings)
            let boots = selectRandomItem(tcomp_boots)
            let pickaxes = selectRandomItem(tcomp_pickaxes)
            let axes = selectRandomItem(tcomp_axes)
            let shovels = selectRandomItem(tcomp_shovels)
            ctxReplaceMaybe(ctx, 'string', 'supplementaries:flax', .5)
            ctxReplaceLoot(ctx, Item.of('potion').ignoreNBT(), 'potion', randomPotionNbt)
            ctxReplaceLoot(ctx, Item.of('splash_potion').ignoreNBT(), 'splash_potion', randomPotionNbt)
            ctxReplaceLoot(ctx, Item.of('iron_helmet').ignoreNBT(), helmet, () => randomDamageNbt(helmet))
            ctxReplaceLoot(ctx, Item.of('iron_chestplate').ignoreNBT(), chestplate, () => randomDamageNbt(chestplate))
            ctxReplaceLoot(ctx, Item.of('iron_leggings').ignoreNBT(), leggings, () => randomDamageNbt(leggings))
            ctxReplaceLoot(ctx, Item.of('iron_boots').ignoreNBT(), boots, () => randomDamageNbt(boots))
            ctxReplaceLoot(ctx, Item.of('iron_pickaxe').ignoreNBT(), pickaxes, () => randomDamageNbt(pickaxes))
            ctxReplaceLoot(ctx, Item.of('iron_axe').ignoreNBT(), axes, () => randomDamageNbt(axes))
            ctxReplaceLoot(ctx, Item.of('iron_shovel').ignoreNBT(), shovels, () => randomDamageNbt(shovels))
            ctxReplaceLoot(ctx, Item.of('leather_helmet').ignoreNBT(), 'leather_helmet', () => randomColorAndDamageNbt('leather_helmet'))
            ctxReplaceLoot(ctx, Item.of('leather_chestplate').ignoreNBT(), 'leather_chestplate', () => randomColorAndDamageNbt('leather_chestplate'))
            ctxReplaceLoot(ctx, Item.of('leather_leggings').ignoreNBT(), 'leather_leggings', () => randomColorAndDamageNbt('leather_leggings'))
            ctxReplaceLoot(ctx, Item.of('leather_boots').ignoreNBT(), 'leather_boots', () => randomColorAndDamageNbt('leather_boots'))
        })

    event.addLootTableModifier(sp`blocks`)
        .apply(ctx => {
            ctxReplaceMaybe(ctx, 'sand', Ingredient.of('#forge:concrete_powders').itemIds, .5)
            ctxReplaceMaybe(ctx, 'gravel', 'extractinator:silt', .5)
        })

    event.addLootTableModifier(sp`brewing`)
        .addLoot("buzzier_bees:four_leaf_clover")

    event.addLootTableModifier(sp`enhanced_enchanting`)
        .apply(ctx => { if (Math.random() < .2) ctx.addLoot(genTome()) })

    event.addLootTableModifier(sp`weaving`)
        .apply(ctx => {
            ctxReplaceLoot(ctx, '#forge:dyes', Ingredient.of('#forge:dyes').itemIds)
        })
})

let randomDamageNbt = (stack) => {
    let durablity = Item.of(stack).item.maxDamage
    let damage = ~~(Math.random() * durablity)
    return `{Damage:${damage}}`
}

let randomColorNbt = () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16)
    let decimal = parseInt(randomColor, 16)
    return `{display:{color:${decimal}}}`
}

let randomColorAndDamageNbt = (stack) => {
    let durablity = Item.of(stack).item.maxDamage
    let damage = ~~(Math.random() * durablity)
    let randomColor = Math.floor(Math.random() * 16777215).toString(16)
    let decimal = parseInt(randomColor, 16)
    return `{Damage:${damage},display:{color:${decimal}}}`
}