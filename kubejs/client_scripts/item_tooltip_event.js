onEvent('item.tooltip', event => {
    const smelteryTooltipItems = ['kubejs:mossy_seared_stone', 'kubejs:mossy_seared_cobble', 'kubejs:mossy_seared_bricks', 'kubejs:mossy_seared_fancy_bricks', 'kubejs:mossy_seared_cracked_bricks', 'kubejs:mossy_seared_paver', 'kubejs:mossy_seared_triangle_bricks']
    let addSmelteryTooltipItems = (item) => event.add(item, 'Part of the Smeltery.')
    for (let item of smelteryTooltipItems) {addSmelteryTooltipItems(item)}

    event.add('create:chromatic_compound', 'This item is a mystery!')
})