onEvent('recipes', event => {
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
    const knifeDup = ['iron', 'golden', 'diamond']

    //Removed Recipes
    erOutput(FD+':carrot_crate')
    erOutput(FD+':potato_crate')
    erOutput(FD+':beetroot_crate')

    //Recipes
    for(let i of knifeDup){
        if(i == 'golden'){
            event.shapeless(FD+':'+i+'_knife', TCOMP+':gold_knife').id(FD+':'+i+'_knife')
            event.shapeless(TCOMP+':gold_knife', FD+':'+i+'_knife').id('twilight:'+i+'_knife')
        } else {
            event.shapeless(FD+':'+i+'_knife', TCOMP+':'+i+'_knife').id(FD+':'+i+'_knife')
            event.shapeless(TCOMP+':'+i+'_knife', FD+':'+i+'_knife').id('twilight:'+i+'_knife')
        }
    }

})