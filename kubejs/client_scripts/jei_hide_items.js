const INF = 'industrialforegoing'
const TCOMP = 'tools_complement'
const toolsVanilla = ['helmet', 'chestplate', 'leggings', 'boots', 'sword', 'pickaxe', 'axe', 'shovel', 'hoe']


onEvent('jei.hide.items', event => {
    //Refined pipe hiding
    // MAKE THIS MORE PROFESSIONAL
    const pipeTiers = ['basic', 'improved', 'advanced', 'elite', 'ultimate']
    const pipeTypes = ['item', 'fluid']

    const conveyorTypes = ['extraction', 'insertion', 'detection', 'bouncing', 'dropping', 'blinking', 'splitting']
    const blackHoleTypes = ['common', 'pity', 'simple', 'advanced', 'supreme']

    function pipeHide(tier, type){
        event.hide('refinedpipes:'+tier+'_'+type+'_pipe')
    }
    function extractorAttachmentHide(tier){
        event.hide('refinedpipes:'+tier+'_extractor_attachment')
    }

    function conveyorHide(type){
        event.hide(INF+':conveyor_'+type+'_upgrade')
    }
    function blackHoleRemove(type){
        event.hide(INF+':'+type+'_black_hole_tank')
        event.hide(INF+':'+type+'_black_hole_unit')
    }
    
    for(let i of toolsVanilla){
        event.hide(TCOMP+':copper_'+i)
    }

    pipeTypes.forEach(e =>{
        pipeHide('basic', e)
        pipeHide('improved', e)
        pipeHide('advanced', e)
        if(e!='item'){
            pipeHide('elite', e)
            pipeHide('ultimate', e)
        }
    })
    pipeTiers.forEach(e =>{
        extractorAttachmentHide(e)
    })

    conveyorTypes.forEach(e =>{
        conveyorHide(e)
    })
    blackHoleTypes.forEach(e =>{
        blackHoleRemove(e)
    })

})

onEvent('jei.remove.categories', event => {
    console.log(event.getCategoryIds())
    event.remove('ae2:facade')
})

onEvent('jei.hide.items', event => {
    event.hide('kubejs:incomplete_refined_fluix_mechanism')
    event.hide('chunkloaders:single_chunk_loader')
    event.hide('ae2:inscriber')
    event.hide(INF+':conveyor')
    event.hide(INF+':item_transporter_type')
    event.hide(INF+':fluid_transporter_type')
    event.hide(INF+':world_transporter_type')
    event.hide(INF+':black_hole_controller')
    event.hide(INF+':iron_gear')
    event.hide(INF+':gold_gear')
    event.hide(INF+':diamond_gear')
    event.hide(TCOMP+'gold_knife')
})