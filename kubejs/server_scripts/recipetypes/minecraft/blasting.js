onEvent('recipes', event => {
    erId(event, 'infernalexp:blasting/iron_ingot')

    event.blasting(BR+':uranium_ingot', 'kubejs:raw_uranium').xp(0.7)
    event.blasting(BR+':uranium_ingot', BR+':uranium_dust')
    event.blasting(TCON+':cobalt_ingot', 'kubejs:cobalt_dust')
    event.blasting('create:zinc_ingot', 'kubejs:zinc_dust')
})
