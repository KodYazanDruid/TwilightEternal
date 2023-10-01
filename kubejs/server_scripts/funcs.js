//Priority: 9
const $Random = java('java.util.Random')
const $UUID = java('java.util.UUID')

function shuffleArray(array) {
    var m = array.length, t, i
    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = $Random().nextInt(m--)
        // And swap it with the current element.
        t = array[m]
        array[m] = array[i]
        array[i] = t
    }
    return array
}

function selectRandomElements(array, count) { return shuffleArray(array).slice(0, count) }

function selectRandomElement(array) { return array[~~($Random().nextInt(array.length))] }

function randomUqInt(qty, min, max) {
    let set = new Set()
    while(set.size < qty) set.add($Random().nextInt(max-min)+min)
    return Array.from(set)
}

function itemWithLore(item, text) {
    if(!Array.isArray(text)) return Item.of(item, `{display:{Lore:['"${text}"']}}`)
    else return Item.of(item, `{display:{Lore:[${text.map(i => `'"${i}"'`)}]}}`)
}

function canEquip(item, slot, player) { return Item.getEmpty().item.canEquip(item, slot, player) }

function animatePlayer(event, animation, type) {
    event.level.getEntities('@a').forEach(player => {
        let entity = event.player.id
        player.sendData('animation', { animation: animation, player: entity.toString(), type: type })
    })
}

function randomUUID(player) {return player.uuid.class.getMethod("randomUUID").invoke(null)}

function getEnchantLevel(item, enchant) {return item.getEnchantments().get(enchant) != null ? item.getEnchantments().get(enchant) : 0}


global.shuffleArray = (array) => shuffleArray(array)
global.selectRandomElements = (array, count) => selectRandomElements(array, count)
global.selectRandomElement = (array) => selectRandomElement(array)
global.randomUqInt = (qty, min, max) => randomUqInt(qty, min, max)
global.itemWithLore = (item, text) => itemWithLore(item, text)
global.canEquip = (item, slot, player) => canEquip(item, slot, player)
global.animatePlayer = (event, animation, type) => animatePlayer(event, animation, type)
global.randomUUID = (player) => randomUUID(player)
global.getEnchantLevel = (item, enchant) => getEnchantLevel(item, enchant)

