const starter_helmets = Ingredient.of('#twilight:starter_helmet').itemIds
const starter_chestplates = Ingredient.of('#twilight:starter_chestplate').itemIds
const starter_leggings = Ingredient.of('#twilight:starter_leggings').itemIds
const starter_boots = Ingredient.of('#twilight:starter_boots').itemIds

onEvent('player.logged_in', event => {
    let player = event.player
    if(!player.stages.has('starting_items')){
        player.stages.add('starting_items')
        player.give('tconstruct:hand_axe')
        player.give('tconstruct:pickaxe')
        player.give('8x brewinandchewin:pizza_slice')
        player.give('2x farmersrespite:green_tea')
        player.give('4x supplementaries:candy')
        player.setHeadArmorItem(giveRandomFromList(starter_helmets))
        player.setChestArmorItem(giveRandomFromList(starter_chestplates))
        player.setLegsArmorItem(giveRandomFromList(starter_leggings))
        player.setFeetArmorItem(giveRandomFromList(starter_boots))
        starter_helmets.forEach(item => console.log(item))
        starter_chestplates.forEach(item => console.log(item))
        starter_leggings.forEach(item => console.log(item)) 
        starter_boots.forEach(item => console.log(item))
    }
})

/**
 * @param {Internal.Set<String>} list
 * @returns {Internal.ItemStack}
 */
var giveRandomFromList = list => list[Math.floor(Math.random() * list.length)]