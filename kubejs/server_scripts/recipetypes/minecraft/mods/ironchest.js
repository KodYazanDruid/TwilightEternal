onEvent('recipes', event =>{
    function erOutput(item, type){
        event.remove({output: item, type: type})
    }
    function erInput(item, type){
        event.remove({input: item, type: type})
    }
    function erId(id){
        event.remove({id: id})
    }
    function erType(type){
        event.remove({type: type})
    }
    //Removed Recipes
    erOutput('ironchest:iron_chest')
    erOutput('ironchest:copper_chest')
    erOutput('ironchest:gold_chest')
    erOutput('ironchest:diamond_chest')
    erOutput('ironchest:wood_to_copper_chest_upgrade')
    erOutput('ironchest:wood_to_iron_chest_upgrade')
    erOutput('ironchest:copper_to_iron_chest_upgrade')
    erOutput('ironchest:iron_to_gold_chest_upgrade')
    erOutput('ironchest:gold_to_diamond_chest_upgrade')

    //Recipes
    event.shaped('ironchest:copper_chest', [
        'SPS',
        'PCP',
        'SHS'
    ], {
        S: 'createdeco:copper_sheet_metal',
        P: '#forge:plates/copper',
        C: '#balm:wooden_chests',
        H: Item.of(TCON+':sledge_hammer').ignoreNBT()
    }).damageIngredient(Item.of(TCON+':sledge_hammer').ignoreNBT(), 1)
    event.shaped('ironchest:iron_chest', [
        'SPS',
        'PCP',
        'SHS'
    ], {
        S: 'createdeco:iron_sheet_metal',
        P: '#forge:plates/iron',
        C: '#balm:wooden_chests',
        H: Item.of(TCON+':sledge_hammer').ignoreNBT()
    }).damageIngredient(Item.of(TCON+':sledge_hammer').ignoreNBT(), 1)
    event.shaped('ironchest:iron_chest', [
        'SGS',
        'GCG',
        'SHS'
    ], {
        S: 'createdeco:iron_sheet_metal',
        G: '#forge:glass',
        C: 'ironchest:copper_chest',
        H: Item.of(TCON+':sledge_hammer').ignoreNBT()
    }).damageIngredient(Item.of(TCON+':sledge_hammer').ignoreNBT(), 1)
    event.shaped('ironchest:gold_chest', [
        'SPS',
        'PCP',
        'SHS'
    ], {
        S: 'createdeco:gold_sheet_metal',
        P: '#forge:plates/gold',
        C: 'ironchest:iron_chest',
        H: Item.of(TCON+':sledge_hammer').ignoreNBT()
    }).damageIngredient(Item.of(TCON+':sledge_hammer').ignoreNBT(), 1)
    event.shaped('ironchest:diamond_chest', [
        'SPS',
        'PCP',
        'SHS'
    ], {
        S: 'thermal:obsidian_glass',
        P: '#forge:gems/diamond',
        C: 'ironchest:gold_chest',
        H: Item.of(TCON+':sledge_hammer').ignoreNBT()
    }).damageIngredient(Item.of(TCON+':sledge_hammer').ignoreNBT(), 1)
    event.shaped('ironchest:wood_to_copper_chest_upgrade', [
        'SPS',
        'PCP',
        'SHS'
    ], {
        S: 'createdeco:copper_sheet_metal',
        P: '#forge:plates/copper',
        C: '#minecraft:planks',
        H: Item.of(TCON+':sledge_hammer').ignoreNBT()
    }).damageIngredient(Item.of(TCON+':sledge_hammer').ignoreNBT(), 1)
    event.shaped('ironchest:wood_to_iron_chest_upgrade', [
        'SPS',
        'PCP',
        'SHS'
    ], {
        S: 'createdeco:iron_sheet_metal',
        P: '#forge:plates/iron',
        C: '#minecraft:planks',
        H: Item.of(TCON+':sledge_hammer').ignoreNBT()
    }).damageIngredient(Item.of(TCON+':sledge_hammer').ignoreNBT(), 1)
    event.shaped('ironchest:copper_to_iron_chest_upgrade', [
        'SGS',
        'GCG',
        'SHS'
    ], {
        S: 'createdeco:iron_sheet_metal',
        G: '#forge:glass',
        C: 'minecraft:copper_ingot',
        H: Item.of(TCON+':sledge_hammer').ignoreNBT()
    }).damageIngredient(Item.of(TCON+':sledge_hammer').ignoreNBT(), 1)
    event.shaped('ironchest:iron_to_gold_chest_upgrade', [
        'SPS',
        'PCP',
        'SHS'
    ], {
        S: 'createdeco:gold_sheet_metal',
        P: '#forge:plates/gold',
        C: 'minecraft:iron_ingot',
        H: Item.of(TCON+'tcnstruct:sledge_hammer').ignoreNBT()
    }).damageIngredient(Item.of(TCON+':sledge_hammer').ignoreNBT(), 1)
    event.shaped('ironchest:gold_to_diamond_chest_upgrade', [
        'SPS',
        'PCP',
        'SHS'
    ], {
        S: 'thermal:obsidian_glass',
        P: '#forge:gems/diamond',
        C: 'minecraft:gold_ingot',
        H: Item.of(TCON+':sledge_hammer').ignoreNBT()
    }).damageIngredient(Item.of(TCON+':sledge_hammer').ignoreNBT(), 1)
})