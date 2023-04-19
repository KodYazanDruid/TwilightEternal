onEvent('tags.items', event => {
    event.add('forge:mazestone', [
    TF+':mazestone',
    TF+':mazestone_brick',
    TF+':cracked_mazestone',
    TF+':mossy_mazestone',
    TF+':decorative_mazestone',
    TF+':cut_mazestone',
    TF+':mazestone_border',
    TF+':mazestone_mosaic'
    ])

    event.add(TF+':banned_uncraftables', [
        INF+':mycelial_meatallurgic',
        INF+':mycelial_culinary',
        'alexsmobs:animal_dictionary'
    ])
    event.add(TF+':banned_uncrafting_ingredients', [
        'aquaculture:neptunes_bounty',
        TCON+':sledge_hammer',
        INF+':pink_slime',
        'minecraft:turtle_egg'
    ])

    event.add('create:crushed_ores', 'kubejs:crushed_ironwood')
    event.add('forge:blocks/bronze', 'thermal:bronze_block')
    event.add('forge:blocks/steel', 'thermal:steel_block')

    event.remove('forge:gears/iron', INF+':iron_gear')
    event.remove('forge:gears/gold', INF+':gold_gear')
    event.remove('forge:gears/diamond', INF+':diamond_gear')
    event.remove('curios:charm', 'magicfeather:magicfeather')

    event.remove(TF+':portal/activator', '#forge:gems/diamond')
    event.add(TF+':portal/activator', 'ae2:engineering_processor')

    //Purging extractinator's tags.
    event.removeAll('extractinator:common_drops')
    event.removeAll('extractinator:rare_drops')
    event.removeAll('extractinator:very_rare_drops')
    event.removeAll('extractinator:common_gravel_drops')
    event.removeAll('extractinator:common_snow_drops')
    event.removeAll('extractinator:rare_sand_drops')
    function extract(id, type, items){
        event.add(`twilight:extract_${id}_${type}`, items)
    }
    extract('minecraft', 'raw', ['minecraft:raw_iron', 'minecraft:raw_copper', 'minecraft:raw_gold'])
    extract('thermal', 'raw', ['thermal:raw_tin', 'thermal:raw_nickel', 'thermal:raw_lead', 'thermal:raw_silver'])
    extract('thermal', 'dust', ['thermal:apatite_dust', 'thermal:cinnabar_dust', 'thermal:niter_dust', 'thermal:sulfur_dust'])
    extract('elemental', 'powder', ['thermal:basalz_powder', 'thermal:blitz_powder', 'thermal:blizz_powder', 'minecraft:blaze_powder'])
    extract('rare', 'gem', ['minecraft:emerald', 'minecraft:diamond'])
    extract('common', 'gem', ['minecraft:lapis_lazuli', 'minecraft:amethyst_shard', 'minecraft:coal'])
    extract(TF, 'material', [TF+':borer_essence', TF+':torchberries', TF+':transformation_powder', TF+':armor_shard', TF+':carminite', TF+':liveroot'])
    extract('dirt', 'misc', ['minecraft:clay_ball', 'farmersdelight:tree_bark', 'farmersdelight:straw', 'minecraft:rotten_flesh', 'minecraft:bone_meal', 'thermal:slag'])

    event.add('forge:fertilizer', 'waterstrainer:fertilizer')
    event.add('twilight:extract_dirt_misc', ['waterstrainer:fertilizer', INF+':fertilizer'])
    event.add('curios:magicfeather', 'magicfeather:magicfeather')
    /* event.add('curios:backpack', 'backpacked:backpack')
    event.remove('curios:back', 'backpacked:backpack') */

    for(let i of colors) {
        event.add('comforts:sleeping_bags', 'comforts:sleeping_bag_'+i)
        event.add('comforts:hammocks', 'comforts:hammock_'+i)
    }
})