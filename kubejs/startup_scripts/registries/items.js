onEvent('item.registry', event => {
	event.create('ironwood_nugget').displayName('Ironwood Nugget')
	event.create('crushed_ironwood').displayName('Crushed Ironwood')
	event.create('refined_fluix_mechanism').displayName('Refined Fluix Mechanism')
	event.create('incomplete_refined_fluix_mechanism',  'create:sequenced_assembly').displayName('Incomplete Refined Fluix Mechanism')
	event.create('tiny_coal').displayName('Tiny Coal')
		.burnTime(200)
	event.create('tiny_charcoal').displayName('Tiny Charcoal')
		.burnTime(200)
	event.create('range_addon_base').displayName('Range Addon Base')
	event.create('enzymatic_essence_catalyst').displayName('Enzymatic Essence Catalyst')
	event.create('create_manual').displayName('Create Manual').texture('create:item/crafting_blueprint')
	event.create('fiery_nugget').displayName('Fiery Nugget')
		.tag('forge:nuggets')
		.tag('forge:nuggets/fiery')
	event.create('knightmetal_nugget').displayName('Knightmetal Nugget')
		.tag('forge:nuggets')
		.tag('forge:nuggets/knightmetal')

})