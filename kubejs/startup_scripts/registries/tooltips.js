const $ItemDescription = java("com.simibubi.create.foundation.item.ItemDescription$Modifier")
const $TooltipModifier = java("com.simibubi.create.foundation.item.TooltipModifier")
const $Palette = java("com.simibubi.create.foundation.item.TooltipHelper$Palette")

let STANDARD_PALETTE = [
    'travel_anchors:travel_staff',
    'travel_anchors:travel_anchor'
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
    'ae2:spatial_cell_component_2'
]
let GRAY_PALETTE = [
    'diamond'
]

let smelteryTooltipItems = [
    'kubejs:mossy_seared_stone', 
    'kubejs:mossy_seared_cobble', 
    'kubejs:mossy_seared_bricks', 
    'kubejs:mossy_seared_fancy_bricks', 
    'kubejs:mossy_seared_cracked_bricks', 
    'kubejs:mossy_seared_paver', 
    'kubejs:mossy_seared_triangle_bricks'
]
let barterCurrency = [
    'gold_ingot',
    'create:golden_sheet',
    'thermal:gold_plate', // This got unified to golden sheet but anyway...
    'thermal:gold_coin'
]

STANDARD_PALETTE = STANDARD_PALETTE.concat(smelteryTooltipItems)
YELLOW_PALETTE = YELLOW_PALETTE.concat(barterCurrency)

onEvent('client.logged_in', _ => {
    STANDARD_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.STANDARD_CREATE)))
    BLUE_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.BLUE)))
    GREEN_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.GREEN)))
    YELLOW_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.YELLOW)))
    RED_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.RED)))
    PURPLE_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.PURPLE)))
    GRAY_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.GRAY)))
})

onEvent('client.generate_assets', event => {
    const addTooltip = (id, tooltip, desc) => {
        event.addLang(`${Item.of(id).item.getDescriptionId()}.tooltip`, desc)
        event.addLang(`${Item.of(id).item.getDescriptionId()}.tooltip.summary`, tooltip)
    }

    barterCurrency.forEach(id => addTooltip(id, 'Can be used to _barter_ with _Piglins_.', 'Bartering Currency'))
    smelteryTooltipItems.forEach(id => addTooltip(id, 'This block is too _worn out_ and _mossy_ for the smeltery usage. Use _shears_ to clear its moss and use it in _smeltery_.', 'Smeltery Usage'))

    addTooltip('diamond', 'A _shiny_ and _rare_ gem.', 'Diamond')
    addTooltip('ae2:spatial_cell_component_2', 'Used as _key_ to open portal to a _dimension_ where it is twilight to eternity.', 'Spatial Storage Cell Component')
    addTooltip('travel_anchors:travel_anchor', 'A _mysterious_ block that can _teleport_ you to other _travel anchors_.', 'Travel Anchor')

})