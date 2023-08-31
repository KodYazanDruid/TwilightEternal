onEvent('recipes', event => {
    erId(event, 'infernalexp:blasting/iron_ingot')

    event.blasting(BR+':uranium_ingot', 'kubejs:raw_uranium').xp(0.7)
})
