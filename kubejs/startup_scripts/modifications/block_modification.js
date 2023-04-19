const TE = 'thermal_extra'
onEvent('block.modification', event => {
    const teBlocks = [TE+':soul_infused_block', TE+':shellite_block', TE+':twinite_block', TE+':dragonsteel_block']
    function modifyTE (block) {
        event.modify(block, b => {
            b.destroySpeed = 5
            b.explosionResistance = 5
        })
    }
    for (let i of teBlocks){
        modifyTE(i)
    }
})