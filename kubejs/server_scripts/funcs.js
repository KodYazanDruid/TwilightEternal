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

global.shuffleArray = (array) => shuffleArray(array)
global.selectRandomElements = (array, count) => selectRandomElements(array, count)

