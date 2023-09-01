onEvent('recipes', event => {
    erId(event, 'infernalexp:smelting/iron_ingot')

    event.smelting(BR+':uranium_ingot', 'kubejs:raw_uranium').xp(0.7)
    event.smelting(TCON+':cobalt_ingot', 'kubejs:cobalt_dust')
    event.smelting('create:zinc_ingot', 'kubejs:zinc_dust')
})