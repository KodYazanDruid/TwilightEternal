onEvent('recipes', event =>{
    const colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
    function erOutput(item, type){
        event.remove({output: item, type: type})
    }
    function erInput(item, type){
        event.remove({input: item, type: type})
    }
    function erId(id){
        event.remove({id: id})
    }
    function erType(type){
        event.remove({type: type})
    }

    //Removed Recipes
    erType('ae2:inscriber')
    erOutput('ae2:inscriber')
    erOutput('ae2:controller')

    //Recipes
    for(let i of colors){
        event.shapeless('ae2:'+i+'_smart_dense_cable','4x ae2:'+i+'_smart_cable')
    }
    event.replaceInput({mod: 'ae2'}, 'minecraft:iron_ingot', TF+':ironwood_ingot')
})