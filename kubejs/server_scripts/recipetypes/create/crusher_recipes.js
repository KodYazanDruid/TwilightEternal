onEvent('recipes', event => {
	event.recipes.createCrushing('#forge:dusts/ender_pearl', 'minecraft:ender_pearl')
	event.recipes.createCrushing('ae2:sky_dust', 'ae2:sky_stone_block')
	event.recipes.createCrushing('ae2:fluix_dust', 'ae2:fluix_crystal')
	event.recipes.createCrushing('ae2:certus_quartz_dust', '#ae2:all_certus_quartz')
	event.recipes.createCrushing(['kubejs:crushed_ironwood', Item.of('create:experience_nugget').withChance(0.75)], 'twilightforest:raw_ironwood')
	event.recipes.createCrushing([Item.of('twilightforest:armor_shard').withChance(0.65).withCount(7)], '#forge:mazestone')
	event.recipes.createCrushing(['infernalexp:glownuggets', Item.of('infernalexp:glownuggets').withChance(0.50).withCount(1), 'minecraft:glowstone_dust', Item.of('minecraft:glowstone_dust').withChance(0.50).withCount(1)], 'infernalexp:dimstone')
	event.recipes.createCrushing(['3x infernalexp:glownuggets', Item.of('infernalexp:glownuggets').withChance(0.50).withCount(1)], 'infernalexp:dullstone')
	event.recipes.createCrushing([Item.of('thermal:electrum_dust').withChance(0.4), Item.of('gold_nugget').withChance(0.6).withCount(2), Item.of(INF + ':plastic').withChance(0.2)], 'thermaloot:variable_capacitor')
	event.recipes.createCrushing([Item.of('18x iron_nugget'), Item.of('create:experience_nugget').withChance(0.75), Item.of('basalt').withChance(0.12)], 'infernalexp:basalt_iron_ore')

	Ingredient.of('#quark:runes_lootable').itemIds.forEach(rune => {
		let color = rune.replace(/quark:|_rune/gi, '')
		event.recipes.createCrushing([Item.of('quark:blank_rune').withChance(0.50), Item.of(`minecraft:${color}_dye`).withChance(0.25)], rune)
	})

	event.forEachRecipe({ id: "quark:tools/crafting/runes/rainbow_rune2" }, recipe => {
		let ing = recipe.getOriginalRecipeIngredients().toArray().map(x => Item.of(x).withChance(0.125))
		event.recipes.createCrushing(ing, 'quark:rainbow_rune')
	})

	//Aboo
	event.forEachRecipe({ type: 'create:crushing' , output: 'create_dd:coal_piece' }, recipe => {
		let output = recipe.outputItems.toArray().map(x => x == 'create_dd:coal_piece' ? Item.of('kubejs:tiny_coal').withChance(Item.of(x).chance) : x)
		event.recipes.createCrushing(output, recipe.originalRecipeIngredients).id(recipe.getOrCreateId())
	})
})