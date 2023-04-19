onEvent('block.registry', event => {
    event.create('crude_controller').material('metal').hardness(2).displayName('Crude Controller').tagBlock('minecraft:mineable/pickaxe')
    event.create('budding_uranium').material('metal').hardness(2).displayName('Budding Uranium').tagBlock('minecraft:mineable/pickaxe')
    event.create('lutfi').material('metal').hardness(2).displayName('Lütfi Block').tagBlock('minecraft:mineable/pickaxe')
    event.create('impure_uranium').material('stone').hardness(2).displayName('Impure Uranium').tagBlock('minecraft:mineable/pickaxe')
    
    event.create('mossy_seared_bricks').material('stone').hardness(3).resistance(9).displayName('Mossy Seared Bricks')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBoth("tconstruct:seared_blocks")
        .tagBoth("tconstruct:seared_bricks")
        .tagBlock("forge:needs_gold_tool")
        .tagItem("tconstruct:smeltery")

    event.create('mossy_seared_cobble').material('stone').hardness(3).resistance(9).displayName('Mossy Seared Cobblestone')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBoth("tconstruct:seared_blocks")
        .tagBlock("tconstruct:seared_cobblestone")
        .tagBlock("forge:needs_gold_tool")
        .tagItem("tconstruct:smeltery")

    event.create('mossy_seared_cracked_bricks').material('stone').hardness(3).resistance(9).displayName('Mossy Seared Cracked Bricks')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBoth("tconstruct:seared_blocks")
        .tagBoth("tconstruct:seared_bricks")
        .tagBlock("forge:needs_gold_tool")
        .tagItem("tconstruct:smeltery")

    event.create('mossy_seared_fancy_bricks').material('stone').hardness(3).resistance(9).displayName('Mossy Fancy Seared Bricks')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBoth("tconstruct:seared_blocks")
        .tagBoth("tconstruct:seared_bricks")
        .tagBlock("forge:needs_gold_tool")
        .tagItem("tconstruct:smeltery")

    event.create('mossy_seared_stone').material('stone').hardness(3).resistance(9).displayName('Mossy Seared Stone')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBoth("tconstruct:seared_blocks")
        .tagBlock("tconstruct:seared_stone")
        .tagBlock("forge:needs_gold_tool")
        .tagItem("tconstruct:smeltery")
    
    event.create('mossy_seared_paver').material('stone').hardness(3).resistance(9).displayName('Mossy Seared Paver')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBoth("tconstruct:seared_blocks")
        .tagBlock("tconstruct:seared_stone")
        .tagBlock("forge:needs_gold_tool")
        .tagItem("tconstruct:smeltery")

    event.create('mossy_seared_triangle_bricks').material('stone').hardness(3).resistance(9).displayName('Mossy Seared Triangle Bricks')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBoth("tconstruct:seared_blocks")
        .tagBlock("tconstruct:seared_stone")
        .tagBlock("forge:needs_gold_tool")
        .tagItem("tconstruct:smeltery")

})