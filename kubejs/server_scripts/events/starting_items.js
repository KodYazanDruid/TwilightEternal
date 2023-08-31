onEvent('player.logged_in', event => {
    let player = event.player
    if(!player.stages.has('starting_items')){
        player.stages.add('starting_items')
        player.give('tconstruct:hand_axe')
        player.give('tconstruct:pickaxe')
        //player.setHeadArmorItem(giveRandomFromList(Ingredient.of('#twilight:starter_helmet').itemIds))
        player.setChestArmorItem(giveRandomFromList(Ingredient.of('#twilight:starter_chestplate').itemIds))
        //player.setLegsArmorItem(giveRandomFromList(Ingredient.of('#twilight:starter_leggings').itemIds))
        player.setFeetArmorItem(giveRandomFromList(Ingredient.of('#twilight:starter_boots').itemIds))
        if(Math.random() >= 0.5) {
            player.give(Item.of(giveRandomFromList(Ingredient.of('#twilight:starter_meal').itemIds), 3))
        } else {
            player.give(Item.of(giveRandomFromList(Ingredient.of('#twilight:starter_soup').itemIds), 2))
            player.give(Item.of(giveRandomFromList(Ingredient.of('#twilight:starter_salad').itemIds), 2))
        } 
        player.give(Item.of(giveRandomOfTwo(Ingredient.of('#twilight:starter_pie').itemIds, Ingredient.of('#twilight:starter_cake').itemIds), 2))
        player.give(Item.of(giveRandomOfTwo(Ingredient.of('#twilight:starter_tea').itemIds, Ingredient.of('#twilight:starter_juice').itemIds), 3))
        player.give(Item.of(giveRandomFromList(Ingredient.of('#twilight:starter_candy').itemIds), 5))
    }
})
/**
 * @param {Internal.Set<String>} list
 * @returns {Internal.ItemStack}
 */
var giveRandomFromList = list => list[Math.floor(Math.random() * list.length)]
/**
 * @param {Internal.Set<String>} list 
 * @param {Internal.Set<String>} list2 
 * @returns {Internal.ItemStack}
 */
var giveRandomOfTwo = (list, list2) => Math.random() >= 0.5 ? giveRandomFromList(list) : giveRandomFromList(list2)
