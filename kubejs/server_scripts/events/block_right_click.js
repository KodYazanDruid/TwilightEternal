
//for(let entry of shuffledOreMap.entries()) console.log(entry)

onEvent('block.right_click', event => {
    const { player, block, item, hand, server } = event

    if(item.id == 'miners_delight:copper_cup' && Ingredient.of('@tconstruct').getItemIds().contains(block.id)) event.cancel()

    if(Ingredient.of('#forge:shears').getItemIds().contains(item.id) 
            && Ingredient.of('#twilight:mossy_seared_blocks').getItemIds().contains(block.id)){
        server.runCommandSilent(`playsound minecraft:entity.sheep.shear ambient @a ${block.x} ${block.y} ${block.z}`)
        block.set(TCON+':'+block.id.split(':mossy_')[1])
        player.damageHeldItem(hand, 1)
        player.swingArm(hand)
        let moss = block.createEntity('item')
        moss.x = block.x + 0.5
        moss.y = block.y + 0.9
        moss.z = block.z + 0.5
        moss.item = getRandomItem(['moss_block', 'quark:moss_paste', TF+':moss_patch'])
        moss.item.count = ~~(Math.random() * 3 + 1)
        moss.motionY = 0.1
        moss.spawn()        
    }
    if(item.id == 'kubejs:independent_ore_prospector') {
        switch(event.getFacing()) {
            case 'up':
                facingPlace(event, block.x, block.y+1, block.z)
                break
            case 'down':
                facingPlace(event, block.x, block.y-1, block.z)
                break
            case 'north':
                facingPlace(event, block.x, block.y, block.z-1)
                break
            case 'south':
                facingPlace(event, block.x, block.y, block.z+1)
                break
            case 'east':
                facingPlace(event, block.x+1, block.y, block.z)
                break
            case 'west':
                facingPlace(event, block.x-1, block.y, block.z)
                break
        }
    }
})

/**
 * @param {Array} items 
 * @returns {Internal.ItemStackJS}
 */
function getRandomItem(items) { return items[~~(Math.random() * items.length)] }

const placeSound = block => block.blockState.soundType.placeSound.registryName
/**
 * @param {Internal.BlockRightClickEventJS} event 
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 */
function facingPlace (event, x, y, z) {
    const {player, hand, server, level} = event
    let blockF = level.getBlock(x, y ,z)
    let entitiesInTarget = level.getEntitiesWithin(AABB.ofBlock(new BlockPos(new Vec3(x, y, z))))
    if(entitiesInTarget.filter(e => e.isLiving()).size() <= 0) {
        player.swingArm(hand)
        if(blockF.id === 'minecraft:air') {
            blockF.set(getRandomItem(Array.from(global.shuffledOreMap.keys())))
            server.runCommandSilent(`playsound ${placeSound(blockF)} ambient @a ${blockF.x} ${blockF.y} ${blockF.z}`)
            player.damageHeldItem(hand, 1)
        } 
    }
}