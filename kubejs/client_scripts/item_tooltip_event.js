onEvent('item.tooltip', event => {
  const smelteryTooltipItems = ['kubejs:mossy_seared_stone', 'kubejs:mossy_seared_cobble', 'kubejs:mossy_seared_bricks', 'kubejs:mossy_seared_fancy_bricks', 'kubejs:mossy_seared_cracked_bricks', 'kubejs:mossy_seared_paver', 'kubejs:mossy_seared_triangle_bricks']
  let addSmelteryTooltipItems = (item) => event.add(item, 'Part of the Smeltery.')
  for (let item of smelteryTooltipItems) { addSmelteryTooltipItems(item) }

  event.add('create:chromatic_compound', 'This item is a mystery!')


})

onEvent('item.tooltip', event => {
  event.addAdvanced(Ingredient.getAll(), (item, a, text) => {
    if(item === 'magicfeather:magicfeather') {
      text.remove(0)
      text.remove(1)
    }
  })
})

const ItemDescription = java('com.simibubi.create.foundation.item.ItemDescription')
const Palette = java('com.simibubi.create.foundation.item.ItemDescription$Palette')

onEvent('item.tooltip', event => {
  event.addAdvanced('kubejs:enzymatic_essence_catalyst', (item, advanced, tooltip) => {
    new ItemDescription(Palette.Green)
      .withSummary(Component.translate('item.kubejs.enzymatic_essence_catalyst.tooltip.summary'))
      .createTabs()
      .addInformation(tooltip)
  })

  event.addAdvanced('industrialforegoing:block_breaker', (item, advanced, tooltip) => {
    new ItemDescription(Palette.Red)
      .withSummary(Component.translate('item.industrialforegoing.block_breaker.tooltip.summary'))
      .createTabs()
      .addInformation(tooltip)
  })

  event.addAdvanced('industrialforegoing:block_placer', (item, advanced, tooltip) => {
    new ItemDescription(Palette.Red)
      .withSummary(Component.translate('item.industrialforegoing.block_placer.tooltip.summary'))
      .createTabs()
      .addInformation(tooltip)
  })

  event.addAdvanced('create:deployer', (item, advanced, tooltip) => {
    new ItemDescription(Palette.Red)
      .withSummary(Component.translate('item.create.deployer.tooltip.summary'))
      .createTabs()
      .addInformation(tooltip)
  })

  event.addAdvanced('magicfeather:magicfeather', (item, advanced, tooltip) => {
    new ItemDescription(Palette.Purple)
      .withSummary(Component.translate('item.magicfeather.magicfeather.tooltip.summary'))
      .createTabs()
      .addInformation(tooltip)
  })
})