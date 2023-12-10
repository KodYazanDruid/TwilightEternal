const $ItemDescription = java("com.simibubi.create.foundation.item.ItemDescription$Modifier")
const $TooltipModifier = java("com.simibubi.create.foundation.item.TooltipModifier")
const $Palette = java("com.simibubi.create.foundation.item.TooltipHelper$Palette")

let barterCurrency = [
    'gold_ingot',
    'create:golden_sheet',
    'thermal:gold_plate', // This got unified to golden sheet but anyway...
    'thermal:gold_coin'
]
let kubejs_chairs = []
$DyenamicsDyeColor.dyenamicValues().forEach(color => {
    kubejs_chairs.push('kubejs:' + color + '_chair')
    kubejs_chairs.push('kubejs:' + color + '_floor_chair')
})

let STANDARD_PALETTE = [
    'travel_anchors:travel_staff',
    'travel_anchors:travel_anchor'
].concat(mossySmelteryBlocks).concat(kubejs_chairs)
let BLUE_PALETTE = [
    'magicfeather:magicfeather'
]
let GREEN_PALETTE = [
    'kubejs:enzymatic_essence_catalyst'
]
let YELLOW_PALETTE = [
].concat(barterCurrency)
let RED_PALETTE = [
    'industrialforegoing:block_breaker',
    'industrialforegoing:block_placer',
    'create:deployer',
    'fire_charge'
]
let PURPLE_PALETTE = [
    'ae2:spatial_cell_component_2'
]
let GRAY_PALETTE = [
    'diamond'
]

onEvent('client.logged_in', _ => {
    console.log('Registering tooltips...')
    STANDARD_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.STANDARD_CREATE)))
    BLUE_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.BLUE)))
    GREEN_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.GREEN)))
    YELLOW_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.YELLOW)))
    RED_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.RED)))
    PURPLE_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.PURPLE)))
    GRAY_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.GRAY)))
    console.log('Tooltips registered!')
})

onEvent('client.generate_assets', event => {
    const addTooltip = (id, tooltip, desc) => {
        event.addLang(`${Item.of(id).item.getDescriptionId()}.tooltip`, desc)
        event.addLang(`${Item.of(id).item.getDescriptionId()}.tooltip.summary`, tooltip)
    }
    const addConBeh = (id, cond, beh, desc) => {
        event.addLang(`${Item.of(id).item.getDescriptionId()}.tooltip`, desc)
        event.addLang(`${Item.of(id).item.getDescriptionId()}.tooltip.condition1`, cond)
        event.addLang(`${Item.of(id).item.getDescriptionId()}.tooltip.behaviour1`, beh)
    }

    let chair_langs = {
        "block.interiors.chair.tooltip": "CHAIR",
        "block.interiors.chair.tooltip.summary": "Sit yourself down and enjoy the ride! Will anchor a player onto a _contraption_. An appealing option for _furniture_ too!",
        "block.interiors.chair.tooltip.condition1": "When R-Clicked",
        "block.interiors.chair.tooltip.behaviour1": "Sits the player on the _Chair_. Press L-shift to leave the _Chair_.",
        "block.interiors.chair.tooltip.condition2": "When R-Clicked with Wrench",
        "block.interiors.chair.tooltip.behaviour2": "Toggles individual _Chair_ armrests.",
        "block.interiors.chair.tooltip.condition3": "When Sneak R-Clicked with Wrench",
        "block.interiors.chair.tooltip.behaviour3": "Toggles _Chair_ back size."
    }

    kubejs_chairs.forEach(id => {
        let tooltips = ['', '.summary', '.condition1', '.behaviour1', '.condition2', '.behaviour2', '.condition3', '.behaviour3'].forEach(i => {
            event.addLang(`${Item.of(id).item.getDescriptionId()}.tooltip${i}`, chair_langs[`block.interiors.chair.tooltip${i}`])
        })
    })

    barterCurrency.forEach(id => addTooltip(id, 'Can be used to _barter_ with _Piglins_.', 'Bartering Currency'))
    mossySmelteryBlocks.forEach(id => addTooltip(id, 'Safe for _decoration_. You can use _shears_ to clear its _moss_ to convert its non-mossy alternative.', 'Smeltery Usage'))

    addTooltip('diamond', 'A _shiny_ and _rare_ gem.', 'Diamond')
    addTooltip('ae2:spatial_cell_component_2', 'Used as _key_ to open portal to a _dimension_ where it is twilight to eternity.', 'Spatial Storage Cell Component')
    addTooltip('fire_charge', 'A _flammable_ projectile that can be used to _ignite_ blocks.', 'Fire Charge')
    addConBeh('fire_charge', 'R-Click to air.', '_Shoots_ a fire charge.', 'Fire Charge')
})