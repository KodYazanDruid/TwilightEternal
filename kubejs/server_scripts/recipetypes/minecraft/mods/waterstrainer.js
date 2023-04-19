onEvent('recipes', event=>{
    const meshTypes = new Map([
        ['string', 'fisherman'], 
        ['iron', 'fisherman_solid'], 
        ['obsidian', 'fisherman_reinforced']
    ])
    function genericFour(output, itemArray){
        event.shaped(output, [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: itemArray[0],
            B: itemArray[1],
            C: itemArray[2]
        })
    }
    function plusShape(output, itemArray){
        genericFour(output, [itemArray[0], itemArray[1], itemArray[1]])
    }

    //Removed Recieps
    event.remove({mod: WS})

    //Recipes
    event.shaped(WS+':strainer_base', [
        'BCB',
        'GAG',
        'IEI'
    ], {
        B: 'createdeco:andesite_bars',
        C: 'create:chute',
        G: 'thermal:copper_gear',
        A: 'create:andesite_casing',
        I: 'thermal:bronze_ingot',
        E: 'thermal:device_fisher'
    })
    event.shaped(WS+':worm_bin', [
        'FDF',
        'BCB',
        'LLL'
    ], {
        F: '#forge:fences/wooden',
        D: '#chipped:dirt',
        B: INF+':fertilizer',
        C: 'minecraft:composter',
        L: '#minecraft:logs'
    })
    plusShape(WS+':string_mesh', ['#forge:slimeballs', Item.of('tconstruct:bowstring', '{Material:"tconstruct:string"}')])
    plusShape(WS+':iron_mesh', ['minecraft:magma_cream', Item.of('tconstruct:bowstring', '{Material:"tconstruct:chain"}')])
    event.shaped(WS+':obsidian_mesh', [
        'WSL',
        'SSS',
        'LSW'
    ], {
        W: Item.of('tconstruct:scorched_lantern', '{tank:{Amount:50,FluidName:"minecraft:water"}}'),
        L: Item.of('tconstruct:scorched_lantern', '{tank:{Amount:50,FluidName:"minecraft:lava"}}'),
        S: Item.of('tconstruct:bowstring', '{Material:"tconstruct:darkthread"}')
    })
    genericFour(WS+':strainer_survivalist', ['minecraft:stick' ,'#minecraft:planks' ,WS+':string_mesh'])
    genericFour(WS+':strainer_survivalist_solid', ['thermal:iron_gear' , 'thermal:invar_ingot', WS+':iron_mesh'])
    genericFour(WS+':strainer_survivalist_reinforced', ['thermal:bronze_gear' ,'minecraft:diamond' , WS+':obsidian_mesh'])
    for(let i of meshTypes.keys()){
        genericFour(WS+':strainer_'+meshTypes.get(i), [FD+':canvas', 'minecraft:bamboo', WS+':'+i+'_mesh'])
    }
    event.shaped(WS+':garden_trowel', [
        'P',
        'H'
    ], {
        P: Item.of('tconstruct:round_plate', '{Material:"tconstruct:flint"}'),
        H: Item.of('tconstruct:tool_handle', '{Material:"tconstruct:wood"}')
    })
    event.shaped(WS+':efficiency_meter', [
        ' T ',
        'GCG',
        ' A '
    ], {
        T: 'minecraft:redstone_torch',
        G: 'thermal:copper_gear',
        C: 'minecraft:clock',
        A: 'create:andesite_alloy'
    })
    event.shaped(WS+':bait_pot', [
        'C',
        'P'
    ], {
        C: FD+':organic_compost',
        P: 'minecraft:flower_pot'
    })

})