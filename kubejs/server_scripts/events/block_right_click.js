onEvent('block.right_click', event => {
    const { player, block, item, hand, server, level } = event
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
        event.cancel()
        facingPlace(event, block.pos.relative(event.facing))
    }
})

function getRandomItem(items) { return items[~~(Math.random() * items.length)] }

const placeSound = block => block.blockState.soundType.placeSound.registryName

function facingPlace (event, pos) {
    const {player, hand, server, level} = event
    let blockF = level.getBlock(pos)
    let entitiesInTarget = level.getEntitiesWithin(AABB.ofBlock(pos))
    if(entitiesInTarget.filter(e => e.isLiving()).size() <= 0 && blockF.id == 'minecraft:air') {
        player.swingArm(hand)
        blockF.set(getRandomItem(Array.from(global.shuffledOreMap.keys())))
        server.runCommandSilent(`playsound ${placeSound(blockF)} ambient @a ${blockF.x} ${blockF.y} ${blockF.z}`)
        player.damageHeldItem(hand, 1)
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