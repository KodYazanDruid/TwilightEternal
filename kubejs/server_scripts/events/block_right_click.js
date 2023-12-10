const IntArrayTag = java("net.minecraft.nbt.IntArrayTag")
const SerializableUUID = java("net.minecraft.core.SerializableUUID")
const $FTBChunksAPI = java('dev.ftb.mods.ftbchunks.data.FTBChunksAPI')
const $ChunkDimPos = java('dev.ftb.mods.ftblibrary.math.ChunkDimPos')

const $BlockPlaceContext = java('net.minecraft.world.item.context.BlockPlaceContext')

function getRandomUUID() { return new IntArrayTag(SerializableUUID.uuidToIntArray(UUID.fromString($UUID.randomUUID()))) }

let runes = new Map([
  ['quark:yellow_rune', ['generic.max_health', 5]],
  ['quark:light_blue_rune', ['generic.armor_toughness', 2]],
  ['quark:gray_rune', ['generic.armor', 2]],
  ['quark:light_gray_rune', ['generic.movement_speed', 0.01]],
  ['kubejs:lead_shielding', ['enlightened_end:radiationresistance', 5]],
  ['buzzier_bees:four_leaf_clover', ['generic.luck', 0.5]]
])

onEvent('block.right_click', event => {
  const { player, block, item, hand, server, level } = event
  if (item.id == 'miners_delight:copper_cup' && Ingredient.of('@tconstruct').getItemIds().contains(block.id)) {
    event.cancel()
  }

  if (item.hasTag('forge:shears') && block.hasTag('twilight:mossy_seared_blocks')) {
    server.runCommandSilent(`playsound minecraft:entity.sheep.shear ambient @a ${block.x} ${block.y} ${block.z}`)
    block.set(TCON + ':' + block.id.split(':mossy_')[1])
    player.damageHeldItem(hand, 1)
    player.swingArm(hand)
    let moss = block.createEntity('item')
    let pos = block.pos.relative(event.facing)
    moss.setPosition(pos.x + 0.5, pos.y, pos.z + 0.5)
    moss.item = getRandomItem(Ingredient.of('#twilight:moss_components').itemIds.toArray())
    moss.item.count = ~~(Math.random() * 3 + 1)
    moss.motionY = 0.1
    moss.spawn()
  }

  if (item == 'kubejs:independent_ore_prospector') {
    event.cancel()
    let pos = block.pos.relative(event.facing)
    let claimedChunk = $FTBChunksAPI.getManager().getChunk(new $ChunkDimPos(level.minecraftLevel, BlockPos(pos)))
    let blockF = level.getBlock(pos)
    let entitiesInTarget = level.getEntitiesWithin(AABB.ofBlock(pos))
    if (entitiesInTarget.filter(e => e.isLiving()).size() <= 0 && blockF.id == 'minecraft:air') {
      if (!player.fake && claimedChunk != null && !claimedChunk.teamData.isTeamMember(player.id)) return
      player.swingArm(hand)
      blockF.set(getRandomItem(Array.from(global.shuffledOreMap.keys())))
      server.runCommandSilent(`playsound ${placeSound(blockF)} ambient @a ${blockF.x} ${blockF.y} ${blockF.z}`)
      player.damageHeldItem(hand, 1)
    }
  }

  if (item.hasTag('twilight:forging_tool') && block.id == 'minecraft:anvil') {
    event.cancel()
    let firstSlot = block.inventory.get(0)
    let secondSlot = block.inventory.get(1)
    let soundOverride = false

    server.scheduleInTicks(10, event => {
      if (firstSlot.hasTag('twilight:wearable') && runes.has(`${secondSlot.id}`)) {
        let slotType
        if (firstSlot.hasTag('twilight:head_wearable')) slotType = 'head'
        else if (firstSlot.hasTag('twilight:chest_wearable')) slotType = 'chest'
        else if (firstSlot.hasTag('twilight:legs_wearable')) slotType = 'legs'
        else if (firstSlot.hasTag('twilight:feet_wearable')) slotType = 'feet'
        let defAtt = []
        firstSlot.item.getAttributeModifiers(slotType, firstSlot).forEach((att, mod) => {
          if (mod.amount <= 0) return
          let attrName = Utils.getRegistry('attribute').getKey(att).get().namespace + ':' + Utils.getRegistry('attribute').getKey(att).get().path
          defAtt.push({ AttributeName: attrName, Amount: mod.amount, Name: 'Default ' + mod.name, Slot: slotType, operation: `${mod.operation}`, UUID: getRandomUUID() })
        })
        if (!firstSlot.nbt) firstSlot.nbt = {}
        if (!firstSlot.nbt.AttributeModifiers) firstSlot.nbt.AttributeModifiers = []
        let attrName = runes.get(`${secondSlot.id}`)[0]
        let exist = false
        let defExist = false
        if (!attrName) return
        firstSlot.nbt.AttributeModifiers.forEach(att => {
          if (att.AttributeName == attrName) exist = true
          if (att.Name.includes('Default')) defExist = true
        })
        if (!exist) {
          firstSlot.nbt.AttributeModifiers.push({ AttributeName: attrName, Amount: runes.get(`${secondSlot.id}`)[1], Name: 'Rune: ' + attrName, Slot: slotType, operation: 'ADDITION', UUID: getRandomUUID() })
          secondSlot.count--
        }
        defAtt.forEach(att => {
          if (att.Name == attrName) defExist = true
        })
        if (!defExist) firstSlot.nbt.AttributeModifiers = firstSlot.nbt.AttributeModifiers.concat(defAtt)
        level.minecraftLevel.sendBlockUpdated(block.pos, block.blockState, block.blockState, 1)
      }

      if (!firstSlot.empty && !secondSlot.empty && secondSlot?.nbt?.DeterminationChallengeTool && !secondSlot.nbt.OngoingDetermination && !Boolean(firstSlot.nbt.DeterminationChallenge)) {
        let i = 1
        let hasTag = false
        secondSlot.nbt.DeterminationChallengeTool.forEach(value => {
          if (firstSlot.hasTag(value.toString().replace('"', ''))) {
            hasTag = true
            secondSlot.nbt.OngoingDetermination = value
            secondSlot.nbt.display.Lore[i] = `"${secondSlot.nbt.display.Lore[i].slice(1, -1)} §c=> Ongoing Determination..."`
          }
          i++
        })
        i = 0
        if (hasTag) firstSlot.nbt.DeterminationChallenge = true
        else {
          server.runCommandSilent(`playsound minecraft:block.anvil.place ambient @a ${block.x} ${block.y} ${block.z}`)
          return
        }
        ptcSnd('minecraft:totem_of_undying', 'minecraft:item.totem.use', server, block, 1, 250)
        level.minecraftLevel.sendBlockUpdated(block.pos, block.blockState, block.blockState, 1)
        soundOverride = true
      }

      if(firstSlot?.nbt?.DeterminationChallenge && firstSlot.nbt.DeterminationChallenge == true && secondSlot == 'supplementaries:soap_block') {
        firstSlot.nbt = Object.create(Object.entries(firstSlot.nbt).filter(([key]) =>  key != 'DeterminationChallenge'))
        ptcSnd('supplementaries:air_burst', 'supplementaries:item.bubble_blower', server, block, 1, 250)
        soundOverride = true
        secondSlot.count--
        level.minecraftLevel.sendBlockUpdated(block.pos, block.blockState, block.blockState, 1)
      }

      if (!soundOverride) (server.runCommandSilent(`playsound minecraft:block.anvil.place ambient @a ${block.x} ${block.y} ${block.z}`))
    })
    player.damageHeldItem(hand, 10)
    player.addItemCooldown(item, 24)
    animatePlayer(event, 'kubejs:two_handed_slam_heavy', 'rightArm', undefined)
  }
})

function getRandomItem(items) { return items[~~(Math.random() * items.length)] }

const placeSound = block => block.blockState.soundType.placeSound.registryName

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