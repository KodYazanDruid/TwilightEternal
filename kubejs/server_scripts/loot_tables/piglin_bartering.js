const $Registry = java('net.minecraft.core.Registry')
const $Enchantments = java('net.minecraft.world.item.enchantment.Enchantments')

onEvent('lootjs', event => {
    event.addLootTableModifier('minecraft:gameplay/piglin_bartering')
            .removeLoot(Ingredient.getAll())
            .addWeightedLoot(1,[
                LootEntry.of('quark:ancient_tome').withWeight(2),
                LootEntry.of(Item.of('tconstruct:scorched_lantern', '{tank:{Amount:50,FluidName:"tconstruct:blazing_blood"}}')).withWeight(3),
                LootEntry.of('enchanted_book').enchantRandomly(['minecraft:soul_speed', 'alexsmobs:straddle_jump', 'alexsmobs:lavawax']).withWeight(3),
                LootEntry.of(Item.of('minecraft:potion', '{Potion:"minecraft:water"}')).withWeight(3),
                LootEntry.of(Item.of('minecraft:potion', '{Potion:"minecraft:fire_resistance"}')).withWeight(3),
                LootEntry.of(Item.of('minecraft:splash_potion', '{Potion:"minecraft:fire_resistance"}')).withWeight(3),
                LootEntry.of('thermal:obsidian_glass').withWeight(4),
                LootEntry.of('iron_nugget').limitCount([10, 25]).withWeight(4),
                LootEntry.of('quartz').limitCount([2, 5]).withWeight(4),
                LootEntry.of('ender_pearl').limitCount([2, 4]).withWeight(4),
                LootEntry.of(TCOMP+':lead_boots').enchantRandomly('minecraft:soul_speed').withWeight(4),
                LootEntry.of('infernalexp:molten_gold_cluster').limitCount([1, 3]).withWeight(5),
                LootEntry.of('create:blaze_cake_base').withWeight(6),
                LootEntry.of('obsidian').withWeight(6),
                LootEntry.of('nethersdelight:propelpearl').limitCount([2, 4]).withWeight(6),
                LootEntry.of('crying_obsidian').withWeight(6),
                LootEntry.of('fire_charge').limitCount([1, 3]).withWeight(10),
                LootEntry.of('leather').limitCount([2, 4]).withWeight(12),
                LootEntry.of('soul_sand').limitCount([2, 4]).withWeight(12),
                LootEntry.of('nethersdelight:soul_compost').limitCount([1, 4]).withWeight(12),
                LootEntry.of('string').limitCount([3, 9]).withWeight(12),
                LootEntry.of('nether_brick').limitCount([2, 8]).withWeight(12),
                LootEntry.of('spectral_arrow').limitCount([2, 6]).withWeight(12),
                LootEntry.of('black_stone').limitCount([4, 10]).withWeight(12),
                LootEntry.of('gravel').limitCount([3, 10]).withWeight(12)
            ])
            .apply(ctx => {
                ctx.findLoot('quark:ancient_tome').forEach(stk => stk.setNbt(genTomeNbt()))
            })
})

function genTome() {
    let ench = $Registry.ENCHANTMENT.getRandom($Random()).get().value()
    let enchID = $Registry.ENCHANTMENT.getKey(ench)
    let enchMax = ench.getMaxLevel()
    return enchMax > 1 && !ench.isCurse() ? Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"'+enchID+'",lvl:'+enchMax+'s}]}') : genTome()
}

function genTomeNbt() {
    let ench = $Registry.ENCHANTMENT.getRandom($Random()).get().value()
    let enchID = $Registry.ENCHANTMENT.getKey(ench)
    let enchMax = ench.getMaxLevel()
    return enchMax > 1 && !ench.isCurse() ? '{StoredEnchantments:[{id:"'+enchID+'",lvl:'+enchMax+'s}]}' : genTomeNbt()
}