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

})