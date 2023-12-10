//priority: 31
const $BlockProperties = java('net.minecraft.world.level.block.state.BlockBehaviour$Properties')
const $ItemProperties = java('net.minecraft.world.item.Item$Properties')

const $Material = java('net.minecraft.world.level.material.Material')
const $SoundType = java('net.minecraft.world.level.block.SoundType')
const $DyeColor = java('net.minecraft.world.item.DyeColor')
const $DyenamicsDyeColor = java('cofh.dyenamics.core.util.DyenamicDyeColor')
const $ColoredPartItem = java('appeng.items.parts.ColoredPartItem')

const $BlockItem = java('net.minecraft.world.item.BlockItem')
const $SearedBlock = java('slimeknights.tconstruct.smeltery.block.component.SearedBlock')
const $FloorChairBlock = java('com.sudolev.interiors.content.block.seat.FloorChairBlock')
const $ChairBlock = java('com.sudolev.interiors.content.block.seat.BigChairBlock')
const $SmartCablePart = java('appeng.parts.networking.SmartCablePart')

const $TinkerSmeltery = java('slimeknights.tconstruct.smeltery.TinkerSmeltery')
const TAB_SMELTERY = $TinkerSmeltery.TAB_SMELTERY
const $KubeJS = java('dev.latvian.mods.kubejs.KubeJS')
const TAB_KUBEJS = $KubeJS.tab

const $Blocks = java('net.minecraft.world.level.block.Blocks')

let mossySmelteryBlocks = [
    'kubejs:mossy_seared_stone',
    'kubejs:mossy_seared_cobble',
    'kubejs:mossy_seared_bricks',
    'kubejs:mossy_seared_fancy_bricks',
    'kubejs:mossy_seared_cracked_bricks',
    'kubejs:mossy_seared_paver',
    'kubejs:mossy_seared_triangle_bricks'
]
global.mossySmelteryBlocks = mossySmelteryBlocks

let dyenamicsChairBlocks = []
$DyenamicsDyeColor.dyenamicValues().forEach(color => {
    dyenamicsChairBlocks.push('kubejs:' + color + '_chair')
    dyenamicsChairBlocks.push('kubejs:' + color + '_floor_chair')
})

onEvent('init', _ => {
    mossySmelteryBlocks.forEach(id => {
        let SEARED_PROB = new $SearedBlock($BlockProperties.of($Material.STONE, $DyeColor.GRAY).sound($SoundType.METAL).requiresCorrectToolForDrops().strength(3, 9).isValidSpawn((s, r, p, e) => !s.hasProperty($SearedBlock.IN_STRUCTURE) || !s.getValue($SearedBlock.IN_STRUCTURE)))
        let SEARED_ITEM_PROB = new $ItemProperties().tab(TAB_SMELTERY).stacksTo(64)

        let block = Utils.getRegistry('minecraft:block').register(id, () => SEARED_PROB)
        Utils.getRegistry('minecraft:item').register(id, () => new $BlockItem(block.get(), SEARED_ITEM_PROB))
    })

    $DyenamicsDyeColor.dyenamicValues().forEach(color => {
        let chair_id = 'kubejs:' + color + '_chair'
        let floor_chair_id = 'kubejs:' + color + '_floor_chair'
        let analog = $DyenamicsDyeColor.byTranslationKey(color, $DyenamicsDyeColor.PEACH).getAnalogue()

        let probs = $BlockProperties.copy($Blocks.STRIPPED_SPRUCE_WOOD)
        let chair_item_prob = new $ItemProperties().tab(TAB_KUBEJS).stacksTo(64)
        let floor_chair_item_prob = new $ItemProperties().tab(TAB_KUBEJS).stacksTo(64)

        let chair = Utils.getRegistry('minecraft:block').register(chair_id, () => new $ChairBlock(probs, analog))
        Utils.getRegistry('minecraft:item').register(chair_id, () => new $BlockItem(chair.get(), chair_item_prob))

        let floor_chair = Utils.getRegistry('minecraft:block').register(floor_chair_id, () => new $FloorChairBlock(probs, analog))
        Utils.getRegistry('minecraft:item').register(floor_chair_id, () => new $BlockItem(floor_chair.get(), floor_chair_item_prob))
    
    })

})

onEvent('client.generate_assets', event => {
    mossySmelteryBlocks.forEach(id => {
        let key = new ResourceLocation(id)
        event.addModel('item', id, model => {
            model.parent(key.namespace + ':block/' + key.path)
        })
        event.addModel('block', id, model => {
            model.parent('block/cube_all')
            model.textures({ "all": key.namespace + ':block/' + key.path })
        })
        event.add(key.namespace + ':blockstates/' + key.path, {
            "variants": {
                "": {
                    "model": key.namespace + ':block/' + key.path
                }
            }
        })
        event.addLang('block.' + key.namespace + '.' + key.path, id.split(':')[1].split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))
    })

    dyenamicsChairBlocks.forEach(id => {
        let key = new ResourceLocation(id)
        let type = id.includes('floor') ? ":block/floor_chair/" : ":block/chair/"
        let rl_type = id.includes('floor') ? "floor_chair" : "chair"
        let color = id.split(':')[1].split('_')[0]
        let daf_id = 'dyenamicsandfriends'
        let chair_textures = {
            "side": daf_id + ":block/create/seat/side_" + color,
            "side_front": daf_id + ":block/create/seat/side_" + color,
            "side_top": "kubejs:block/chair/side_top_" + color,
            "top": daf_id + ":block/create/seat/top_" + color
        }
        event.addModel('item', id, model => model.parent(key.namespace + type + key.path + '_both'))
        let model_types = ['none', 'both', 'left', 'right'].forEach(i => {
            event.addModel('block', key.namespace + ':' + rl_type + '/' + key.path + '_' + i, model => {
                model.parent('interiors' + type + i)
                model.textures(chair_textures)
            })
            event.addModel('block', key.namespace + ':' + rl_type + '/' + key.path + '_' + i + '_cropped', model => {
                model.parent('interiors' + type + i + '_cropped')
                model.textures(chair_textures)
            })
        })
        
        event.add(key.namespace + ':blockstates/' + key.path, {
            "variants": {
                "armrests=both,cropped_back=false,facing=east": {
                    "model": key.namespace + type + key.path + "_both",
                    "y": 90
                },
                "armrests=both,cropped_back=false,facing=north": {
                    "model": key.namespace + type + key.path + "_both"
                },
                "armrests=both,cropped_back=false,facing=south": {
                    "model": key.namespace + type + key.path + "_both",
                    "y": 180
                },
                "armrests=both,cropped_back=false,facing=west": {
                    "model": key.namespace + type + key.path + "_both",
                    "y": 270
                },
                "armrests=both,cropped_back=true,facing=east": {
                    "model": key.namespace + type + key.path + "_both_cropped",
                    "y": 90
                },
                "armrests=both,cropped_back=true,facing=north": {
                    "model": key.namespace + type + key.path + "_both_cropped"
                },
                "armrests=both,cropped_back=true,facing=south": {
                    "model": key.namespace + type + key.path + "_both_cropped",
                    "y": 180
                },
                "armrests=both,cropped_back=true,facing=west": {
                    "model": key.namespace + type + key.path + "_both_cropped",
                    "y": 270
                },
                "armrests=left,cropped_back=false,facing=east": {
                    "model": key.namespace + type + key.path + "_left",
                    "y": 90
                },
                "armrests=left,cropped_back=false,facing=north": {
                    "model": key.namespace + type + key.path + "_left"
                },
                "armrests=left,cropped_back=false,facing=south": {
                    "model": key.namespace + type + key.path + "_left",
                    "y": 180
                },
                "armrests=left,cropped_back=false,facing=west": {
                    "model": key.namespace + type + key.path + "_left",
                    "y": 270
                },
                "armrests=left,cropped_back=true,facing=east": {
                    "model": key.namespace + type + key.path + "_left_cropped",
                    "y": 90
                },
                "armrests=left,cropped_back=true,facing=north": {
                    "model": key.namespace + type + key.path + "_left_cropped"
                },
                "armrests=left,cropped_back=true,facing=south": {
                    "model": key.namespace + type + key.path + "_left_cropped",
                    "y": 180
                },
                "armrests=left,cropped_back=true,facing=west": {
                    "model": key.namespace + type + key.path + "_left_cropped",
                    "y": 270
                },
                "armrests=none,cropped_back=false,facing=east": {
                    "model": key.namespace + type + key.path + "_none",
                    "y": 90
                },
                "armrests=none,cropped_back=false,facing=north": {
                    "model": key.namespace + type + key.path + "_none"
                },
                "armrests=none,cropped_back=false,facing=south": {
                    "model": key.namespace + type + key.path + "_none",
                    "y": 180
                },
                "armrests=none,cropped_back=false,facing=west": {
                    "model": key.namespace + type + key.path + "_none",
                    "y": 270
                },
                "armrests=none,cropped_back=true,facing=east": {
                    "model": key.namespace + type + key.path + "_none_cropped",
                    "y": 90
                },
                "armrests=none,cropped_back=true,facing=north": {
                    "model": key.namespace + type + key.path + "_none_cropped"
                },
                "armrests=none,cropped_back=true,facing=south": {
                    "model": key.namespace + type + key.path + "_none_cropped",
                    "y": 180
                },
                "armrests=none,cropped_back=true,facing=west": {
                    "model": key.namespace + type + key.path + "_none_cropped",
                    "y": 270
                },
                "armrests=right,cropped_back=false,facing=east": {
                    "model": key.namespace + type + key.path + "_right",
                    "y": 90
                },
                "armrests=right,cropped_back=false,facing=north": {
                    "model": key.namespace + type + key.path + "_right"
                },
                "armrests=right,cropped_back=false,facing=south": {
                    "model": key.namespace + type + key.path + "_right",
                    "y": 180
                },
                "armrests=right,cropped_back=false,facing=west": {
                    "model": key.namespace + type + key.path + "_right",
                    "y": 270
                },
                "armrests=right,cropped_back=true,facing=east": {
                    "model": key.namespace + type + key.path + "_right_cropped",
                    "y": 90
                },
                "armrests=right,cropped_back=true,facing=north": {
                    "model": key.namespace + type + key.path + "_right_cropped"
                },
                "armrests=right,cropped_back=true,facing=south": {
                    "model": key.namespace + type + key.path + "_right_cropped",
                    "y": 180
                },
                "armrests=right,cropped_back=true,facing=west": {
                    "model": key.namespace + type + key.path + "_right_cropped",
                    "y": 270
                }
            }
        })
        
        event.addLang('block.' + key.namespace + '.' + key.path, id.split(':')[1].split('_').map(word => {
            if (word == 'floor') word = 'low'
            return word.charAt(0).toUpperCase() + word.slice(1)
        }).join(' '))
    })
})

onEvent('server.datapack.low_priority', event => {
    function addSimpleLootTable(id) {
        event.addJson(id.namespace + ':loot_tables/blocks/' + id.path + '.json', {
            "type": "minecraft:block",
            "pools": [
                {
                    "rolls": 1.0,
                    "bonus_rolls": 0.0,
                    "entries": [
                        {
                            "type": "minecraft:item",
                            "name": id
                        }
                    ],
                    "conditions": [
                        {
                            "condition": "minecraft:survives_explosion"
                        }
                    ]
                }
            ]
        })
    }

    mossySmelteryBlocks.forEach(id => addSimpleLootTable(id))
    dyenamicsChairBlocks.forEach(id => addSimpleLootTable(id))
})

onEvent('block.registry', event => {
    event.create('crude_controller').material('metal').hardness(2).displayName('Crude Controller').tagBlock('minecraft:mineable/pickaxe')
    event.create('impure_uranium').material('stone').hardness(2).displayName('Impure Uranium').tagBlock('minecraft:mineable/pickaxe')
})

//Comment of shame. I spend hours on this and it didn't work. :'(
/*
//const $BlockTooltipItem = java('slimeknights.mantle.item.BlockTooltipItem')
//const $TinkerSmeltery = java('slimeknights.tconstruct.smeltery.TinkerSmeltery')
//const $SmelteryComponentBlockEntity = java('slimeknights.tconstruct.smeltery.block.entity.component.SmelteryComponentBlockEntity')
  
//const $BlockDeferredRegisterExtension = java('slimeknights.tconstruct.common.registration.BlockDeferredRegisterExtension')
//const $BlockEntityTypeDeferredRegister = java('slimeknights.mantle.registration.deferred.BlockEntityTypeDeferredRegister')
 
//const BLOCKS = new $BlockDeferredRegisterExtension('kubejs')
//const BLOCK_ENTITIES = new $BlockEntityTypeDeferredRegister('kubejs')
//let props = $BlockProperties.of($Material.STONE, $DyeColor.GRAY).sound($SoundType.METAL).requiresCorrectToolForDrops().strength(3, 9).isValidSpawn((s, r, p, e) => !s.hasProperty($SearedBlock.IN_STRUCTURE) || !s.getValue($SearedBlock.IN_STRUCTURE))
//let props = $BlockProperties["of(net.minecraft.world.level.material.Material,net.minecraft.world.level.material.MaterialColor)"]($Material.STONE, $MaterialColor.COLOR_GRAY).soundType($SoundType.METAL)
//let smeltery_probs = new $ItemProperties().tab($TinkerSmeltery.TAB_SMELTERY)
 
let mossy_seared_bricks = BLOCKS.registerWallBuilding('mossy_seared_bricks', () => new $SearedBlock(props), (b) => new $BlockTooltipItem(b, smeltery_probs))
BLOCK_ENTITIES.register("smeltery_component", () => new $SmelteryComponentBlockEntity , set => {
    set.addAll(mossy_seared_bricks.values())
})
*/