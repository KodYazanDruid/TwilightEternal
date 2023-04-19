onEvent('recipes', event => {
    event.recipes.createMechanicalCrafting('kubejs:crude_controller', [
        'SASAS',
        'ACTCA',
        'STFTS',
        'ACTCA',
        'SASAS'
    ], {
        S: 'ae2:smooth_sky_stone_block',
        A: 'twilightforest:aurora_block',
        F: 'twilightforest:fiery_ingot',
        T: 'twilightforest:torchberries',
        C: 'ae2:engineering_processor'
    })
    event.recipes.createMechanicalCrafting('magicfeather:magicfeather', [
        ' FWF ',
        'FRCRF',
        'SCECL',
        'FRCRF',
        ' FIF '
    ], {
        F: 'supplementaries:feather_block',
        W: 'ae2:wireless_receiver',
        R: 'quark:rainbow_rune',
        C: 'create:refined_radiance',
        S: 'thermal:signalum_ingot',
        L: 'thermal:lumium_ingot',
        I: 'thermal:enderium_ingot',
        E: Item.of('redstone_arsenal:flux_elytra', '{Energy:2400000}').enchant('cofh_core:holding', 4).enchant('ensorcellation:soulbound', 1).weakNBT()
    })
    event.recipes.createMechanicalCrafting(CA + ':electric_motor', [
        '  BSB  ',
        ' BCFCB ',
        'BCRORCB',
        ' BCRCB ',
        '  EAE  '
    ], {
        B: 'create:brass_sheet',
        S: 'create:shaft',
        C: CA + ':copper_spool',
        F: 'thermal:rf_coil',
        R: 'create:refined_radiance',
        O: CA + ':brass_rod',
        E: 'thermal:redstone_servo',
        A: CA + ':capacitor'
    }).id(CA + ':mechanical_crafting/electric_motor')
    event.recipes.createMechanicalCrafting(CA + ':alternator', [
        '  BSB  ',
        ' BCFCB ',
        'BCRORCB',
        ' BCRCB ',
        '  EAE  '
    ], {
        B: 'thermal:steel_plate',
        S: 'create:shaft',
        C: CA + ':copper_spool',
        F: 'thermal:rf_coil',
        R: 'create:shadow_steel',
        O: CA + ':brass_rod',
        E: 'thermal:redstone_servo',
        A: CA + ':capacitor'
    }).id(CA + ':mechanical_crafting/alternator')
    //generate me a gilded quartz pickaxe recipe with diamond in its recipe
    event.recipes.createMechanicalCrafting(CS+':rose_quartz_pickaxe', [
        '  Q  ',
        'IQDQI',
        'Q D Q',
        '  Z  ',
        '  Z  '
    ], {
        Q: "create:polished_rose_quartz",
        D: 'minecraft:diamond',
        I: "#forge:plates/iron",
        Z: CS+':zinc_handle'
    }).id(CS+':rose_quartz_pickaxe_recipe')
    event.recipes.createMechanicalCrafting(CS+':rose_quartz_shovel', [
        ' IQI ',
        ' QDQ ',
        '  D  ',
        '  Z  ',
        '  Z  '
    ], {
        Q: "create:polished_rose_quartz",
        D: 'minecraft:diamond',
        I: "#forge:plates/iron",
        Z: CS+':zinc_handle'
    }).id(CS+':rose_quartz_shovel_recipe')
    event.recipes.createMechanicalCrafting(CS+':rose_quartz_sword', [
        '  Q  ',
        '  Q  ',
        '  D  ',
        ' IDI ',
        '  Z  '
    ], {
        Q: "create:polished_rose_quartz",
        D: 'minecraft:diamond',
        I: "#forge:plates/iron",
        Z: CS+':zinc_handle'
    }).id(CS+':rose_quartz_sword_recipe')
    event.recipes.createMechanicalCrafting(CS+':rose_quartz_axe', [
        ' QQ  ',
        ' QDQI',
        ' ID  ',
        '  Z  ',
        '  Z  '
    ], {
        Q: "create:polished_rose_quartz",
        D: 'minecraft:diamond',
        I: "#forge:plates/iron",
        Z: CS+':zinc_handle'
    }).id(CS+':rose_quartz_axe_recipe')

})
