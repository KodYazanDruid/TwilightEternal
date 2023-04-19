onEvent('recipes', event => {
	event.recipes.createCrushing('ae2:ender_dust', 'minecraft:ender_pearl')
	event.recipes.createCrushing('ae2:sky_dust', 'ae2:sky_stone_block')
	event.recipes.createCrushing('ae2:fluix_dust', 'ae2:fluix_crystal')
	event.recipes.createCrushing('ae2:certus_quartz_dust', '#ae2:all_certus_quartz')
	event.recipes.createCrushing(['kubejs:crushed_ironwood', Item.of('create:experience_nugget').withChance(0.75)], 'twilightforest:raw_ironwood')
	event.recipes.createCrushing([Item.of('twilightforest:armor_shard').withChance(0.65).withCount(7)], '#forge:mazestone')
	event.recipes.createCrushing(['infernalexp:glownuggets', Item.of('infernalexp:glownuggets').withChance(0.50).withCount(1), 'minecraft:glowstone_dust',Item.of('minecraft:glowstone_dust').withChance(0.50).withCount(1)], 'infernalexp:dimstone')
	event.recipes.createCrushing(['3x infernalexp:glownuggets', Item.of('infernalexp:glownuggets').withChance(0.50).withCount(1)], 'infernalexp:dullstone')

})