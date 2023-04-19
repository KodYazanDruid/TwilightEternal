onEvent('player.logged_in', event => {
    let player = event.player
    if(!player.stages.has('starting_items')){
        player.stages.add('starting_items')
        player.give('tconstruct:hand_axe')
        player.give('tconstruct:pickaxe')
        player.give('8x brewinandchewin:pizza_slice')
        player.give('2x farmersrespite:green_tea')
        player.give('4x supplementaries:candy')
        player.setLegsArmorItem('tools_complement:tin_leggings')
        player.setFeetArmorItem('tools_complement:tin_boots')
    }
})