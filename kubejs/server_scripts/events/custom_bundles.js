const nbtRE = /Prize:"(\w+|\d+)"/
//const toolsRE = /\w+:\w+_(helmet|chestplate|leggings|boots|sword|pickaxe|axe|shovel|hoe)/

// Item ID, Item Count, Item Weight
let createPrize = [
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

let thermalMats = []
Ingredient.of(['@thermal', '@thermal_extra']).filter([
    Ingredient.of('#forge:ingots'),
    Ingredient.of('#forge:gears'),
    Ingredient.of('#forge:plates'),
    Ingredient.of('#thermal:glass/hardened')
]).getStacks().forEach(stk => thermalMats.push(Array.of(stk.id, [2, 4], 5)))
let thermalPrize = thermalMats.concat([
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

let tconMats = []
Ingredient.of('@tconstruct').filter([
    Ingredient.of('#forge:ingots'),
    Ingredient.of('#tconstruct:slime_block'),
]).getStacks().forEach(stk => tconMats.push(Array.of(stk.id, [2, 4], 5)))
let tconstructPrize = tconMats.concat([
    ['glass', [3, 5], 5],
    ['copper', [4, 6], 5]
])

let tforestMats = []
Ingredient.of('@twilightforest').filter([
    Ingredient.of('#forge:ingots'),
    Ingredient.of('#forge:ores'),
    Ingredient.of('#forge:gems'),
]).getStacks().forEach(stk => tforestMats.push(Array.of(stk.id, [2, 4], 5)))
let tforestPrize = tforestMats.concat([
    ['twilightforest:experiment_115', [2, 5], 6],
    ['twilightforest:transformation_powder', [1, 3], 4],
    ['twilightforest:arctic_fur', [3, 6], 5],
    ['twilightforest:ice_bomb', [1, 3], 3],
    ['twilightforest:maze_wafer', [2, 5], 5],
    ['twilightforest:borer_essence', [2, 5], 5],
    ['twilightforest:torchberries', [4, 6], 5],
    ['twilightforest:cooked_meef', [2, 5], 4]
])

let minecraftMats = []
Ingredient.of('@minecraft').filter([
    Ingredient.of('#forge:ingots').filter(Ingredient.of('#forge:ingots').filter('netherite_ingot').not()),
    Ingredient.of('#forge:ores').filter(Ingredient.of('#forge:ores').filter(['ancient_debris', '#forge:ores/emerald', '#forge:ores/diamond']).not())
]).getStacks().forEach(stk => minecraftMats.push(Array.of(stk.id, [2, 4], 4)))
Ingredient.of('@minecraft').filter(Ingredient.of('#forge:gems')).getStacks()
    .forEach(stk => minecraftMats.push(Array.of(stk.id, [1, 3], 3)))
let minecraftPrize = minecraftMats.concat([
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
    ['deepslate_emerald_ore', [2, 3], 2],
])

let foregoingPrize = [
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

onEvent('item.right_click', event => {
    const { player, item, hand } = event
    let fortuneLvl = ~~item.getEnchantments().get('minecraft:fortune')
    let lootingLvl = ~~item.getEnchantments().get('minecraft:looting')
    let lootAmp = Math.max(fortuneLvl, lootingLvl)
    if (!nbtRE.test(item.nbt)) return
    event.cancel()

    switch (item.nbt.Prize) {
        case 'Create':
            item.setNbt(customBundleNbt(createPrize, 3, lootAmp))
            break
        case 'Thermal':
            item.setNbt(customBundleNbt(thermalPrize, 4, lootAmp))
            break
        case 'TConstruct':
            item.setNbt(customBundleNbt(tconstructPrize, 3, lootAmp))
            break
        case 'TForest':
            item.setNbt(customBundleNbt(tforestPrize, 4, lootAmp))
            break
        case 'Minecraft':
            item.setNbt(customBundleNbt(minecraftPrize, 5, lootAmp))
            break
        case 'Foregoing':
            item.setNbt(customBundleNbt(foregoingPrize, 3, lootAmp))
            break
    }
})

/**
 * @param {Array} array
 * @returns {Internal.CompoundTag}
 */
function customBundleNbt(array, roll, el) {
    let invArr = []
    let copy = [].concat(array.shuffle())

    while (roll + el > 0) {
        let totalWeight = 0
        for (let i of copy) totalWeight += i[2]

        let random = ~~(Math.random() * totalWeight)

        for (let i of copy) {
            random -= i[2]
            if (random <= 0) {
                let count = Array.isArray(i[1]) ? pickInRange(i[1][0] + Math.round(el / 2), i[1][1] + el) : i[1]
                //let count = pickInRange(i[1][0] + Math.round(el / 2), i[1][1] + el)
                invArr.push(`{Count:${count}b,id:"${i[0]}"}`.replace("'", ""))
                copy.splice(copy.indexOf(i), 1)
                copy.shuffle()
                break
            }
        }
        roll--
    }
    return `{Items:[${invArr}]}`
}

let pickInRange = (min, max) => { return ~~(Math.random() * (max - min + 1) + min) }

let modifiers = []
function generateRandomTconMod() {
    let random = ~~(Math.random() * modifiers.length)
    return Item.of('tconstruct:modifier_crystal', `{modifier:"${modifiers[random]}}`)
}

//let enchItems = (item, enchant, level) => item.nbt.Enchantments = [{id:enchant,lvl:level}]

//item.nbt.Enchantments = [{id:"minecraft:fortune",lvl:3}, {id:"minecraft:unbreaking",lvl:3}]
