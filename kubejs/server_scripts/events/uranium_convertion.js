/* onEvent('block.break', event => {
    let block = event.block
    if(block.id != 'kubejs:impure_uranium') return

    let melon_husk = block.createEntity("husk")
    melon_husk.x += 0.5
    melon_husk.y += 0.5
    melon_husk.z += 0.5
    melon_husk.setCustomName('Melon Husk')
    melon_husk.setCustomNameAlwaysVisible(true)
    melon_husk.setHeadArmorItem('melon')
    //melon_husk.mergeFullNBT('{customLootTableNBtPropertyName:"melon_husk"}')
    melon_husk.spawn()
}) */
 onEvent('item.right_click', event => {
    const { entity, player, item, hand } = event
    if(item.id == EEt`starsteel_ingot`){
        console.log(player.fullNBT.ForgeCaps['enlightened_end:player_variables'].radiation)
    }

 })
