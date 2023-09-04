const prizeRE = /Prize:"(\w+|\d+)"/

onEvent('item.right_click', event => {
    const { player, item, hand } = event
    let fortuneLvl = ~~item.getEnchantments().get('minecraft:fortune')
    let lootingLvl = ~~item.getEnchantments().get('minecraft:looting')
    let lootAmp = Math.max(fortuneLvl, lootingLvl)
    if (!prizeRE.test(item.nbt)) return
    event.cancel()

    switch (item.nbt.Prize) {
        case 'Create':
            item.setNbt(customBundleNbt(global.createPrize, 3, lootAmp))
            break
        case 'Thermal':
            item.setNbt(customBundleNbt(global.thermalPrize, 4, lootAmp))
            break
        case 'TConstruct':
            item.setNbt(customBundleNbt(global.tconstructPrize, 3, lootAmp))
            break
        case 'TForest':
            item.setNbt(customBundleNbt(global.tforestPrize, 4, lootAmp))
            break
        case 'Minecraft':
            item.setNbt(customBundleNbt(global.minecraftPrize, 5, lootAmp))
            break
        case 'Foregoing':
            item.setNbt(customBundleNbt(global.foregoingPrize, 3, lootAmp))
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
                invArr.push(`{Count:${count}b,id:"${i[0]}"}`.replace("'", ""))
                copy.splice(copy.indexOf(i), 1)
                shuffleArray(copy)
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
