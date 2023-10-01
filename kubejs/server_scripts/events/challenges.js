const $Long = java('java.lang.Long')

onEvent('block.right_click', event => {
    const { player, block, item, hand, server, level } = event
    if (player.isFake() || item.isEmpty() || item.id != 'supplementaries:key') return
    if (item?.nbt?.Challenge) {
        switch (item.nbt.Challenge) {
            case 'Patience':
                event.cancel()
                if (!block.hasTag('twilight:patience_challenge_suitable')) return
                if (block.hasTag('forge:chests/trapped')) {
                    error(player, server, block, "Chest must be normal!")
                    return
                } else if (!block.inventory.empty) {
                    error(player, server, block, "Chest must be empty!")
                    return
                }
                player.swingArm(hand)
                ptcSnd('dragon_breath', 'thermal:entity.blitz.shoot', server, block, 1, 250)
                item.count--
                let prize = patienceLoot(block.id)
                if (typeof prize == 'string') server.runCommandSilent(`loot insert ${block.x} ${block.y} ${block.z} loot ${prize}`)
                else {
                    failedLoot(block, prize)
                }
                break
            case 'Kindness':
                break
            case 'Integrity':
                break
            case 'Determination':
                event.cancel()
                break
        }
    }
})

let toolTypes = [
    'Sword',
    'Pickaxe',
    'Axe',
    'Shovel',
    'Hoe',
    'Knife',
    'Hammer',
    'Excavator',
    'Sickle'
]
onEvent('item.right_click', event => {
    const { player, block, item, hand, server, level } = event
    if (player.isFake() || item.isEmpty() || item.id != 'supplementaries:key') return
    if (item?.nbt?.Challenge) {
        switch (item.nbt.Challenge) {
            case 'Determination':
                event.cancel()
                let seed = $Long(level.serverLevel.seed)
                let lsb = $Long(player.id.leastSignificantBits)
                let random = $Random($Long(seed + lsb + ''))
                let codeBySeed = (c) => {
                    let uset = new Set()
                    while(uset.size < 6) uset.add(random.nextInt(c))
                    return Array.from(uset)
                }
                let tag = item.nbt
                if (!tag.display) tag.display = {}
                if (!tag.display.Lore) tag.display.Lore = []
                if (tag.display.Lore.length > 0) return
                tag.DeterminationChallengeTool = []
                tag.Enchantments = [{}]
                ptcSnd('twilightforest:protection', 'minecraft:block.note_block.bell', server, { x: player.x, y: player.y, z: player.z }, 1, 250)
                tag.display.Lore.push('"§2Tools List: "')
                codeBySeed(toolTypes.length).forEach(i => {
                    tag.display.Lore.push(`"§a${toolTypes[i]}"`)
                    toolTypes[i] == 'Knife' ? tag.DeterminationChallengeTool.push('forge:tools/knives') :tag.DeterminationChallengeTool.push(`forge:tools/${toolTypes[i].toLowerCase()}s`)
                })

                item.setNbt(tag)
                break
        }
    }
})

onEvent('block.place', event => {
    const { entity, block, server, level } = event
    if (!entity.isPlayer()) return
    let player = entity.player
    let item = player.mainHandItem.id == block.item.id ? player.mainHandItem : player.offHandItem
    let prize = patienceLoot(block.id)
    if (item?.nbt?.Challenge) {
        if (typeof prize == 'string') server.runCommandSilent(`loot insert ${block.x} ${block.y} ${block.z} loot ${prize}`)
        else {
            failedLoot(block, prize)
        }
    }
})

/* onEvent('player.data_from_client.item_left_click', event => {
    let tag = event.data.Nbt
    let id = event.data.Id
    if(!tag) tag = {}
    if(!tag.display) tag.display = {}
    if(!tag.display.Lore) tag.display.Lore = []
    tag.display.Lore.push('"§aRight click on a suitable container to start the challenge."')
    tag.display.Lore.push('" "')
    tag.display.Lore.push('"§aYou can look into JEI to see the suitable containers by searching for §2$patience_challenge_suitable§a."')
    event.player.mainHandItem = Item.of(id, tag)
}) */

function ptcSnd(particle, sound, server, block, speed, count) {
    server.runCommandSilent(`particle ${particle} ${block.x} ${block.y + 0.5} ${block.z} .5 .75 .5 ${speed} ${count} normal`)
    server.runCommandSilent(`playsound ${sound} ambient @a ${block.x + 0.5} ${block.y} ${block.z + 0.5}`)
}

function error(player, server, block, text) {
    ptcSnd('twilightforest:ghast_trap', 'create:deny', server, block, .5, 25)
    server.runCommandSilent(`title ${player} actionbar {"text":"${text}", "bold":true, "color":"red"}`)
}

function failedLoot(block, prize) {
    let prizes = [prize].concat(createPrize())
    let randomizedSlot = randomUqInt(prizes.length, 0, block.inventory.size)
    let prizeMap = new Map()
    for (let i = 0; i < prizes.length; i++) prizeMap.set(prizes[i], randomizedSlot[i])
    for (let [k, v] of prizeMap) block.inventory.set(v, k)
}

function patienceLoot(id) { return ~~(Math.random() * 9999999) + 1 <= 5 ? 'twilight:challenges/patience' : Item.of(id, '{Challenge:"Patience"}') }

function createPrize() {
    return selectRandomElements([
        'thermal:gold_coin',
        'thermal:silver_coin',
        'thermal:copper_coin',
        'thermal:copper_coin',
        'thermal:copper_coin',
        itemWithLore('paper', pickText()),
    ].concat(Ingredient.of('#twilight:cookies').stacks.toArray()), pickInRange(0, 2))
}

const texts = [
    '§6A voucher for a prize!',
    ['§6Can you please §lfind again the fearless & loving spirit you once were, §6before the world introduced you to fear & hate?', '§c-Yourself'],
    '§6You are §lloved §6and §lvalued §6more than you know.',
    "§6A §lkind §6word can change someone\\'s entire day.",
    "§6Şu anda okuduğunuz bu cümle Türkçe\\'dir.",
    "§6Time does not make people mature, it ripens pears.",
]
function pickText() { return texts[~~(Math.random() * texts.length)] }

