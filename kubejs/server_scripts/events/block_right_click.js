onEvent('block.right_click', event => {
    const { player, block, item, hand, server } = event
//block.level.sendBlockUpdated(block.pos, block.blockState, block.blockState, 11)
    if(item.id == 'miners_delight:copper_cup' && Ingredient.of('@tconstruct').getItemIds().contains(block.id)) {
        event.cancel()
    }

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

// add tis
/**
 * // at top of script
const $FTBChunksAPI = Java.loadClass('dev.ftb.mods.ftbchunks.data.FTBChunksAPI')
const $ChunkDimPos = Java.loadClass('dev.ftb.mods.ftblibrary.math.ChunkDimPos')

//inside event
const claimedChunksManager = $FTBChunksAPI.manager
const claimedChunk = claimedChunksManager.getChunk(new $ChunkDimPos(event.player))
if (claimedChunk != null) { // if its null the chunk isnt claimed
  if (claimedChunk.teamData.isTeamMember(event.player.id)) {
    event.player.tell('Welcome home') // they are the person who claimed that chunk, or they are part of that team
  } else if (claimedChunk.teamData.isAlly(event.player.id)) {
    event.player.tell('Hello friend') // they are allied to the person/team who clamied that hunk
  else {
    event.player.tell('GET OUTTA MY CLAIMED SWAMP') // its not their chunk, and they are not allied to the person whos chunk it is
  }
}
 */