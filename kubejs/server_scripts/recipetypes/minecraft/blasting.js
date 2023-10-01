onEvent('recipes', event => {
    erId(event, 'infernalexp:blasting/iron_ingot')

    event.blasting(BR + ':uranium_ingot', 'kubejs:raw_uranium').xp(0.7)
    event.blasting(BR + ':uranium_ingot', BR + ':uranium_dust')
    event.blasting(TCON + ':cobalt_ingot', 'kubejs:cobalt_dust')
    event.blasting('create:zinc_ingot', 'kubejs:zinc_dust')

    // Instead of spreading different scripts i put them in here.
    function oreProc(type) {
        event.blasting(`#forge:ingots/${type}`, `create:crushed_raw_${type}`).xp(0.2)
        event.smelting(`#forge:ingots/${type}`, `create:crushed_raw_${type}`).xp(0.2)
        event.recipes.thermal.smelter(`#forge:ingots/${type}`, `create:crushed_raw_${type}`).experience(0.2)
    }
    ['aluminum', 'uranium'].forEach(oreProc)

    event.blasting(`#forge:ingots/ironwood`, `kubejs:crushed_ironwood`).xp(0.2)
    event.smelting(`#forge:ingots/ironwood`, `kubejs:crushed_ironwood`).xp(0.2)
    event.recipes.thermal.smelter(`#forge:ingots/ironwood`, `kubejs:crushed_ironwood`).experience(0.2)
})
