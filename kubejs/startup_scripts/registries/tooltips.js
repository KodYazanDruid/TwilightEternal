const $ItemDescription = java("com.simibubi.create.foundation.item.ItemDescription$Modifier")
const $TooltipModifier = java("com.simibubi.create.foundation.item.TooltipModifier")
const $Palette = java("com.simibubi.create.foundation.item.TooltipHelper$Palette")

/* onEvent('client.init', _ => {
    console.log('client.init loading on startup_scripts/registries/tooltips.js')
    //STANDARD_PALETTE.forEach(itemID => TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.STANDARD_CREATE)))
    BLUE_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.BLUE)))
    GREEN_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.GREEN)))
    //YELLOW_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.YELLOW)))
    RED_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.RED)))
    //PURPLE_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.PURPLE)))
    GRAY_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.GRAY)))
}) */

onEvent('client.logged_in', _ => {
    //STANDARD_PALETTE.forEach(itemID => TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.STANDARD_CREATE)))
    BLUE_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.BLUE)))
    GREEN_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.GREEN)))
    //YELLOW_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.YELLOW)))
    RED_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.RED)))
    //PURPLE_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.PURPLE)))
    GRAY_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.GRAY)))
})

/* onEvent('postinit', _ => {
    if (!Platform.isClientEnvironment()) return
    //STANDARD_PALETTE.forEach(itemID => TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.STANDARD_CREATE)))
    BLUE_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.BLUE)))
    GREEN_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.GREEN)))
    //YELLOW_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.YELLOW)))
    RED_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.RED)))
    //PURPLE_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.PURPLE)))
    GRAY_PALETTE.forEach(itemID => $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(Item.of(itemID).item, $Palette.GRAY)))
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
    'minecraft:stone'
]