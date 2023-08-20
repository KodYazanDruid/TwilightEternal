//priority: 2
onEvent('generic.loot_tables', event => {
    event.addGeneric('twilight:prize/create', table => {
        table.addPool(pool => {
            pool.setUniformRolls(1, 3)
            pool.addItem('create:chocolate_glazed_berries', '1', [1, 2])
            pool.addItem('create:honeyed_apple', '1', [1, 2])
            pool.addItem('thermal:pbj_sandwich', '1', [1, 3])
        })
    })
})