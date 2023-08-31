onEvent('recipes', event => {
    erId(event, 'infernalexp:smelting/iron_ingot')

    event.smelting(BR+':uranium_ingot', 'kubejs:raw_uranium').xp(0.7)
})