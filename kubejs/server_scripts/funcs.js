//Priority: 9
const $Random = java('java.util.Random')

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

function randomUqInt(qty, min, max) {
    let set = new Set()
    while(set.size < qty) set.add($Random().nextInt(max-min)+min)
    return Array.from(set)
}

function addNbtLore(item, text) {
    if(!Array.isArray(text)) return Item.of(item, `{display:{Lore:['"${text}"']}}`)
    else return Item.of(item, `{display:{Lore:[${text.map(i => `'"${i}"'`)}]}}`)
}

global.shuffleArray = (array) => shuffleArray(array)
global.selectRandomElements = (array, count) => selectRandomElements(array, count)
global.randomUqInt = (qty, min, max) => randomUqInt(qty, min, max)
global.addNbtLore = (item, text) => addNbtLore(item, text)

