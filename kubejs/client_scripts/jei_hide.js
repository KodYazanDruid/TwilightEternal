const INF = 'industrialforegoing'
const TCOMP = 'tools_complement'
const TCON = 'tconstruct'
const toolsVanilla = ['helmet', 'chestplate', 'leggings', 'boots', 'sword', 'pickaxe', 'axe', 'shovel', 'hoe']

onEvent('jei.hide.items', event => {
    const conveyorTypes = ['extraction', 'insertion', 'detection', 'bouncing', 'dropping', 'blinking', 'splitting']
    const blackHoleTypes = ['common', 'pity', 'simple', 'advanced', 'supreme']

    function conveyorHide(type){
        event.hide(INF+':conveyor_'+type+'_upgrade')
    }
    function blackHoleRemove(type){
        event.hide(INF+':'+type+'_black_hole_tank')
        event.hide(INF+':'+type+'_black_hole_unit')
    }
    
    for(let i of toolsVanilla) event.hide(CS+':copper_'+i)

    conveyorTypes.forEach(e =>{
        conveyorHide(e)
    })
    blackHoleTypes.forEach(e =>{
        blackHoleRemove(e)
    })
})

onEvent('jei.remove.categories', event => {
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
    event.hide(TCOMP+':gold_knife')
    event.hide(TCON+':honey_bucket')
    event.hide('tinkers_reforged:molten_redstone_bucket')
    event.hide('thermal:onion_seeds')
    event.hide('thermal:tomato_seeds')
    event.hide('thermal:rice_seeds')
})

onEvent('jei.hide.fluids', event => {
    event.hide(TCON+':honey')
    event.hide('cofh_core:honey')
    event.hide('tinkers_reforged:molten_redstone')
})