onEvent('item.tooltip', event => {
  const smelteryTooltipItems = ['kubejs:mossy_seared_stone', 'kubejs:mossy_seared_cobble', 'kubejs:mossy_seared_bricks', 'kubejs:mossy_seared_fancy_bricks', 'kubejs:mossy_seared_cracked_bricks', 'kubejs:mossy_seared_paver', 'kubejs:mossy_seared_triangle_bricks']
  let addSmelteryTooltipItems = (item) => event.add(item, 'Part of the Smeltery.')
  for (let item of smelteryTooltipItems) { addSmelteryTooltipItems(item) }

  event.add('create:chromatic_compound', 'This item is a mystery!')

})

onEvent('item.tooltip', event => {
  event.addAdvanced(Ingredient.getAll(), (item, a, text) => {
    if(item === 'magicfeather:magicfeather') {
      var name = text.get(0)
      text.clear()
      text.add(0, name)
    }
  })
})
//use client.init
const ItemDescription = java('com.simibubi.create.foundation.item.ItemDescription$Modifier')
const TooltipModifier = java('com.simibubi.create.foundation.item.TooltipModifier')
const Palette = java('com.simibubi.create.foundation.item.TooltipHelper$Palette')

/* onEvent('item.tooltip', event => {
  event.addAdvanced('kubejs:enzymatic_essence_catalyst', (item, advanced, tooltip) => {
    TooltipModifier.REGISTRY.register(
      item.item, new ItemDescription(item.item, Palette.GREEN)
    )
  })

  event.addAdvanced('industrialforegoing:block_breaker', (item, advanced, tooltip) => {
      TooltipModifier.REGISTRY.register(
        item.item.asItem(), new ItemDescription(item.item.asItem(), Palette.RED)
      )
  })

  event.addAdvanced('industrialforegoing:block_placer', (item, advanced, tooltip) => {
      TooltipModifier.REGISTRY.register(
        item.item, new ItemDescription(item.item, Palette.RED)
      )
  })

  event.addAdvanced('create:deployer', (item, advanced, tooltip) => {
      TooltipModifier.REGISTRY.register(
        item.item, new ItemDescription(item.item, Palette.RED)
      )
  })

  event.addAdvanced('magicfeather:magicfeather', (item, advanced, tooltip) => {
      TooltipModifier.REGISTRY.register(
        item.item, new ItemDescription(item.item, Palette.PURPLE)
      )
  })
}) */

onEvent('item.tooltip', tooltip => {
  tooltip.addAdvanced(Ingredient.all, (item, _, text) => {
    if (tooltip.alt && item.nbt) {
      text.add(Text.of('NBT: ').append(Text.prettyPrintNbt(item.nbt)))
    }
  })
})