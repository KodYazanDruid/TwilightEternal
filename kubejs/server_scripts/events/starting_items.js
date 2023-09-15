onEvent('player.logged_in', event => {
    let player = event.player
    let sackList = []
    if(!player.stages.has('starting_items')){
        player.stages.add('starting_items')
        player.give('tconstruct:hand_axe')
        player.give('tconstruct:pickaxe')
        player.give('ftbquests:book')
        player.setChestArmorItem(giveRandomFromList(Ingredient.of('#twilight:starter_chestplate').itemIds))
        player.setFeetArmorItem(giveRandomFromList(Ingredient.of('#twilight:starter_boots').itemIds))
        if(Math.random() >= 0.5) {
            sackList.push([giveRandomFromList(Ingredient.of('#twilight:starter_meal').itemIds), 3])
        } else {
            sackList.push([giveRandomFromList(Ingredient.of('#twilight:starter_soup').itemIds), 2])
            sackList.push([giveRandomFromList(Ingredient.of('#twilight:starter_salad').itemIds), 2])
        } 
        sackList.push([giveRandomOfTwo(Ingredient.of('#twilight:starter_pie').itemIds, Ingredient.of('#twilight:starter_cake').itemIds), 2])
        sackList.push([giveRandomOfTwo(Ingredient.of('#twilight:starter_tea').itemIds, Ingredient.of('#twilight:starter_juice').itemIds), 3])
        sackList.push([giveRandomOfTwo(Ingredient.of('#twilight:starter_candy').itemIds, Ingredient.of('#twilight:starter_ice_cream').itemIds), 2])
        player.give(starterSack(sackList))
    }
})

let giveRandomFromList = list => list[~~(Math.random() * list.length)]

let giveRandomOfTwo = (list, list2) => Math.random() >= 0.5 ? giveRandomFromList(list) : giveRandomFromList(list2)

let starterSack = (list) => {
    let sack = Item.of('supplementaries:sack')
    let slots = shuffleArray(randomUqInt(list.length, 0, 8))
    if(!sack.nbt) sack.nbt = {}
    if(!sack.nbt.Items) sack.nbt.Items = []
    let itemArr = []
    for(let i=0; i<list.length; i++) {
        let itemStr = `{Count:${list[i][1]}b,Slot:${slots[i]}b,id:"${list[i][0]}"}`
        itemArr.push(itemStr)
    }
    sack.setNbt(`{BlockEntityTag:{ForgeCaps:{},Items:[${itemArr}]}}`)
    return sack
}