const $AXE_DIG  = java('net.minecraftforge.common.ToolAction').get('axe_dig')

onEvent('tags.items', event => {
    //Might be a better way to do this, but this works for now.
    const unifyTags = [
        ['carrot', 'farmersdelight:carrot_crate'],
        ['carrot', 'quark:carrot_crate'],
        ['carrot', 'thermal:carrot_block'],
        ['potato', 'farmersdelight:potato_crate'],
        ['potato', 'quark:potato_crate'],
        ['potato', 'thermal:potato_block'],
        ['beetroot', 'farmersdelight:beetroot_crate'],
        ['beetroot', 'quark:beetroot_crate'],
        ['beetroot', 'thermal:beetroot_block'],
        ['onion', 'farmersdelight:onion_crate'],
        ['onion', 'thermal:onion_block'],
        ['tomato', 'farmersdelight:tomato_crate'],
        ['tomato', 'thermal:tomato_block'],
        ['sugar_cane', 'farmers_bundle:bale_sugarcane'],
        ['sugar_cane', 'quark:sugar_cane_block'],
        ['sugar_cane', 'thermal:sugar_cane_block'],
        ['bamboo', 'farmers_bundle:bundle_bamboo'],
        ['bamboo', 'quark:bamboo_block'],
        ['bamboo', 'thermal:bamboo_block'],
        ['cocoa_beans', 'farmers_bundle:crate_cocoabean'],
        ['cocoa_beans', 'quark:cocoa_beans_sack'],
        ['glow_berries', 'farmers_bundle:crate_glowberry'],
        ['glow_berries', 'quark:glowberry_sack'],
        ['gunpowder', 'quark:gunpowder_sack'],
        ['gunpowder', 'thermal:gunpowder_block'],
        ['flax', 'thermal:flax_block'],
        ['flax', 'supplementaries:flax_block'],
        ['golden_apple', 'farmers_bundle:crate_goldenapple'],
        ['golden_apple', 'quark:golden_apple_crate'],
        ['sugar', 'farmers_bundle:bag_sugar'],
        ['sugar', 'supplementaries:sugar_cube'],
        ['chorus_fruit', 'endersdelight:chorus_crate'],
        ['chorus_fruit', 'quark:chorus_fruit_block'],
        ['sweet_berries', 'farmers_bundle:crate_sweetberry'],
        ['sweet_berries', 'quark:berry_sack'],
        ['rice', 'farmersdelight:rice_bag'],
        ['rice', 'thermal:rice_block'],
        ['apple', 'farmers_bundle:crate_apple'],
        ['apple', 'quark:apple_crate'],
        ['apple', 'thermal:apple_block'],
    ]

    const starter_candies = [
        'supplementaries:candy', 
        'create_confectionery:candy_cane', 
        'create_confectionery:honey_candy', 
        FD+':melon_popsicle']
    
    const starter_meal = [
        'brewinandchewin:pizza_slice',
        'farmersdelight:stuffed_potato',
        'thermal:pbj_sandwich',
        'farmersdelight:cabbage_rolls',
        'nethersdelight:nether_skewer',
        'alexsdelight:bison_burger',
        'berry_good:glowgurt',
        'farmersdelight:salmon_roll',
        'thermal:sushi_maki',
        'farmersdelight:dumplings']
        
    event.add('forge:mazestone', [
        TF + ':mazestone',
        TF + ':mazestone_brick',
        TF + ':cracked_mazestone',
        TF + ':mossy_mazestone',
        TF + ':decorative_mazestone',
        TF + ':cut_mazestone',
        TF + ':mazestone_border',
        TF + ':mazestone_mosaic'
    ])

    event.add(TF + ':banned_uncraftables', [
        INF + ':mycelial_meatallurgic',
        INF + ':mycelial_culinary',
        'alexsmobs:animal_dictionary'
    ])
    event.add(TF + ':banned_uncrafting_ingredients', [
        'aquaculture:neptunes_bounty',
        TCON + ':sledge_hammer',
        INF + ':pink_slime',
        'minecraft:turtle_egg',
        'ae2:ender_dust'
    ])

    colors.forEach(color => event.add(TF + ':banned_uncrafting_ingredients', 'minecraft:' + color + '_dye'))

    event.add('create:crushed_ores', 'kubejs:crushed_ironwood')
    event.add('forge:blocks/bronze', 'thermal:bronze_block')
    event.add('forge:blocks/steel', 'thermal:steel_block')

    event.remove('curios:charm', 'magicfeather:magicfeather')

    event.remove(TF + ':portal/activator', '#forge:gems/diamond')
    event.add(TF + ':portal/activator', 'ae2:engineering_processor')

    //Purging extractinator's tags.
    event.removeAll('extractinator:common_drops')
    event.removeAll('extractinator:rare_drops')
    event.removeAll('extractinator:very_rare_drops')
    event.removeAll('extractinator:common_gravel_drops')
    event.removeAll('extractinator:common_snow_drops')
    event.removeAll('extractinator:rare_sand_drops')
    function extract(id, type, items) {
        event.add(`twilight:extract_${id}_${type}`, items)
    }
    extract('minecraft', 'raw', ['minecraft:raw_iron', 'minecraft:raw_copper', 'minecraft:raw_gold'])
    extract('thermal', 'raw', ['thermal:raw_tin', 'thermal:raw_nickel', 'thermal:raw_lead', 'thermal:raw_silver'])
    extract('thermal', 'dust', ['thermal:apatite_dust', 'thermal:cinnabar_dust', 'thermal:niter_dust', 'thermal:sulfur_dust'])
    extract('elemental', 'powder', ['thermal:basalz_powder', 'thermal:blitz_powder', 'thermal:blizz_powder', 'minecraft:blaze_powder'])
    extract('rare', 'gem', ['minecraft:emerald', 'minecraft:diamond'])
    extract('common', 'gem', ['minecraft:lapis_lazuli', 'minecraft:amethyst_shard', 'minecraft:coal'])
    extract(TF, 'material', [TF + ':borer_essence', TF + ':torchberries', TF + ':transformation_powder', TF + ':armor_shard', TF + ':carminite', TF + ':liveroot'])
    extract('dirt', 'misc', ['minecraft:clay_ball', 'farmersdelight:tree_bark', 'farmersdelight:straw', 'minecraft:rotten_flesh', 'minecraft:bone_meal', 'thermal:slag'])

    event.add('forge:fertilizer', 'waterstrainer:fertilizer')
    event.add('twilight:extract_dirt_misc', ['waterstrainer:fertilizer', INF + ':fertilizer'])
    event.add('curios:magicfeather', 'magicfeather:magicfeather')
    event.add('forge:plates', 'createdeco:zinc_sheet')

    event.add('sliceanddice:allowed_tools', '#farmersdelight:tools/knives')
    event.add('sliceanddice:allowed_tools', '#bookshelf:shears')

    //for(let i of armorTypes) for(let j of thermalIngots) event.add('twilight:starter_'+i, `${TCOMP}:${j}_${i}`)
    Ingredient.of(/tools_complement:\w+helmet/).itemIds.forEach(helmet => event.add('twilight:starter_helmet', helmet))
    Ingredient.of(/tools_complement:\w+chestplate/).itemIds.forEach(chestplate => event.add('twilight:starter_chestplate', chestplate))
    Ingredient.of(/tools_complement:\w+leggings/).itemIds.forEach(leggings => event.add('twilight:starter_leggings', leggings))
    Ingredient.of(/tools_complement:\w+boots/).itemIds.forEach(boots => event.add('twilight:starter_boots', boots))

    Ingredient.of(/\w+:\w+tea$/).itemIds.forEach(tea => event.add('twilight:starter_tea', tea))
    Ingredient.of(/\w+:\w+(juice|cider|custard)$/).itemIds.forEach(juice => event.add('twilight:starter_juice', juice))
    Ingredient.of(/\w+:\w+pie_slice$/).itemIds.forEach(pie => event.add('twilight:starter_pie', pie))
    Ingredient.of(/\w+:\w+cake_slice$/).itemIds.forEach(cake => event.add('twilight:starter_cake', cake))
    Ingredient.of(/\w+:\w+salad$/).itemIds.forEach(salad => event.add('twilight:starter_salad', salad))
    Ingredient.of(/\w+:\w+soup$/).itemIds.forEach(soup => event.add('twilight:starter_soup', soup))
    starter_candies.forEach(candy => event.add('twilight:starter_candy', candy))
    starter_meal.forEach(meal => event.add('twilight:starter_meal', meal))

    for (let i of colors) {
        event.add('comforts:sleeping_bags', 'comforts:sleeping_bag_' + i)
        event.add('comforts:hammocks', 'comforts:hammock_' + i)
    }

    function addUnifyTag(material, item) {
        event.add(`forge:storage_blocks`, item)
        event.add(`forge:storage_blocks/${material}`, item)
    }

    Ingredient.all.stacks.forEach(ingredient => {
        var item = Item.of(ingredient)
        if (item.getItemStack().canPerformAction($AXE_DIG)){
            event.add('twilight:allowed_tools', item.getId())
        }
    })

    unifyTags.forEach(entry => addUnifyTag(entry[0], entry[1]))

    event.removeAllTagsFrom('thermal:onion_seeds')
    event.removeAllTagsFrom('thermal:tomato_seeds')
    event.removeAllTagsFrom('thermal:rice_seeds')

})