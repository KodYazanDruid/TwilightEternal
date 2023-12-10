//priority: 10
const $DyenamicsDyeColor = java('cofh.dyenamics.core.util.DyenamicDyeColor')

const INF = 'industrialforegoing'
const TF = 'twilightforest'
const BR = 'biggerreactors'
const TCON = 'tconstruct'
const FD = 'farmersdelight'
const AP = 'architects_palette'
const TE = 'thermal_extra'
const DD = 'dustrial_decor'
const WS = 'waterstrainer'
const CS = 'create_sa'
const TCOMP = 'tools_complement'
const CA = 'createaddition'
const CC = 'colossalchests'
const TT = 'tinkers_things'
const TR = 'tinkers_reforged'
const CEI = 'create_enchantment_industry'
const CCR = 'computercraft'
const EE = 'enlightened_end'
const UE = 'unusualend'
const IE = 'infernalexp'
const KJS = 'kubejs'
const CDD = 'create_dd'
const DNF = 'dyenamicsandfriends'

const INFt = (id) => `${INF}:${id}`
const TFt = (id) => `${TF}:${id}`
const BRt = (id) => `${BR}:${id}`
const TCONt = (id) => `${TCON}:${id}`
const FDt = (id) => `${FD}:${id}`
const APt = (id) => `${AP}:${id}`
const TEt = (id) => `${TE}:${id}`
const DDt = (id) => `${DD}:${id}`
const WSt = (id) => `${WS}:${id}`
const CSt = (id) => `${CS}:${id}`
const TCOMPt = (id) => `${TCOMP}:${id}`
const CAt = (id) => `${CA}:${id}`
const CCt = (id) => `${CC}:${id}`
const TTt = (id) => `${TT}:${id}`
const TRt = (id) => `${TR}:${id}`
const CEIt = (id) => `${CET}:${id}`
const CCRt = (id) => `${CCR}:${id}`
const EEt = (id) => `${EE}:${id}`
const UEt = (id) => `${UE}:${id}`
const IEt = (id) => `${IE}:${id}`
const KJSt = (id) => `${KJS}:${id}`
const CDDt = (id) => `${CDD}:${id}`
const DNFt = (id) => `${DNF}:${id}`

const colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
const dyenamiColors = $DyenamicsDyeColor.dyenamicValues()
const toolsVanilla = ['helmet', 'chestplate', 'leggings', 'boots', 'sword', 'pickaxe', 'axe', 'shovel', 'hoe']
const tcompTools = ['excavator', 'hammer', 'sickle', 'knife']
const armorTypes = ['helmet', 'chestplate', 'leggings', 'boots']
const thermalIngots = ['tin', 'nickel', 'lead', 'silver', 'bronze', 'electrum', 'constantan', 'invar']

global.dyenamiColors = dyenamiColors

const filteredNuggets = Ingredient.of('#forge:nuggets').filter(Ingredient.of([
    '@tinkers_reforged', '@create_dd',
    '@createaddition', 'create:copper_nugget',
    'tconstruct:netherite_nugget', 'thermal:netherite_nugget',
    'thermal:copper_nugget'
]).not()).itemIds

const basicIngots = ['iron_ingot', 'copper_ingot', 'gold_ingot', 'create:zinc_ingot',
    'thermal:tin_ingot', 'thermal:nickel_ingot', 'thermal:lead_ingot', 'thermal:silver_ingot']
const basicNuggets = ['iron_nugget', 'create:copper_nugget', 'gold_nugget', 'create:zinc_nugget',
    'thermal:tin_nugget', 'thermal:nickel_nugget', 'thermal:lead_nugget', 'thermal:silver_nugget']

const tcomp_helmets = Ingredient.of('#twilight:head_wearable').filter('@tools_complement').itemIds
const tcomp_chestplates = Ingredient.of('#twilight:chest_wearable').filter('@tools_complement').itemIds
const tcomp_leggings = Ingredient.of('#twilight:legs_wearable').filter('@tools_complement').itemIds
const tcomp_boots = Ingredient.of('#twilight:feet_wearable').filter('@tools_complement').itemIds
const tcomp_swords = Ingredient.of('#forge:tools/swords').filter('@tools_complement').itemIds
const tcomp_pickaxes = Ingredient.of('#forge:tools/pickaxes').filter('@tools_complement').itemIds
const tcomp_axes = Ingredient.of('#forge:tools/axes').filter('@tools_complement').itemIds
const tcomp_shovels = Ingredient.of('#forge:tools/shovels').filter('@tools_complement').itemIds
const tcomp_hoes = Ingredient.of('#forge:tools/hoes').filter('@tools_complement').itemIds

const TF_BUNDLE = Item.of('bundle', { Prize: "TForest" })