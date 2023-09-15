const $ItemDescription = java("com.simibubi.create.foundation.item.ItemDescription$Modifier")
const $TooltipModifier = java("com.simibubi.create.foundation.item.TooltipModifier")
const $Palette = java("com.simibubi.create.foundation.item.TooltipHelper$Palette")

onEvent('item.tooltip', tooltip => {
  tooltip.addAdvanced(Ingredient.all, (item, _, text) => {
    if (tooltip.alt && item.nbt) {
      text.add(Text.of('NBT: ').append(Text.prettyPrintNbt(item.nbt)))
    }
  })
})

const smelteryTooltipItems = ['kubejs:mossy_seared_stone', 'kubejs:mossy_seared_cobble', 'kubejs:mossy_seared_bricks', 'kubejs:mossy_seared_fancy_bricks', 'kubejs:mossy_seared_cracked_bricks', 'kubejs:mossy_seared_paver', 'kubejs:mossy_seared_triangle_bricks']

onEvent('item.tooltip', event => {
  event.addAdvanced(Ingredient.getAll(), (item, a, text) => {
    let addSmelteryTooltipItems = (item) => event.add(item, 'This block is too worn out and mossy for the smeltery usage.')
    for (let item of smelteryTooltipItems) { addSmelteryTooltipItems(item) }
  
    event.add('create:chromatic_compound', 'This item is a mystery!')
  
    if (item === 'magicfeather:magicfeather') {
      let name = text.get(0)
      let createTooltip = text.get(1)
      text.clear()
      text.add(0, name)
      text.add(1, createTooltip)
    }
  })
  event.add('#sapience:piglins_barter', 'This item can be bartered with Piglins.')
})

/* onEvent('client.init', _ => {
  console.log('client.init loading on client_scripts/item_tooltip_event.js')
  //STANDARD_PALETTE.forEach(itemID => TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.STANDARD_CREATE)))
  BLUE_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.BLUE)))
  GREEN_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.GREEN)))
  //YELLOW_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.YELLOW)))
  RED_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.RED)))
  //PURPLE_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.PURPLE)))
  GRAY_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.GRAY)))
  $TooltipModifier.REGISTRY.register('minecraft:diamond', new $ItemDescription('minecraft:diamond', $Palette.GRAY_AND_BLUE))
}) */

let STANDARD_PALETTE = [

]
let BLUE_PALETTE = [
  'magicfeather:magicfeather'
]
let GREEN_PALETTE = [
  'kubejs:enzymatic_essence_catalyst'
]
let YELLOW_PALETTE = [

]
let RED_PALETTE = [
  'industrialforegoing:block_breaker',
  'industrialforegoing:block_placer',
  'create:deployer'
]
let PURPLE_PALETTE = [

]
let GRAY_PALETTE = [
  'minecraft:stone',
  'abnormals_delight:adzuki_cake_slice'
]