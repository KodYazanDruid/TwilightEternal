onEvent('tags.blocks', event =>{
    //Blocks that don't have 'minecraft:mineable/pickaxe' tag.
    const blocksP = [
        TF+":aurora_block", "travel_anchors:travel_anchor"
    ]
    const blocksS = [
        'snad:snad', 'snad:red_snad', 'snad:suol_snad'
    ]
    const chestTypes = ['copper', 'iron', 'gold', 'diamond', 'crystal', 'obsidian', 'dirt']
    function mineWithPickaxe(block){
        event.add('minecraft:mineable/pickaxe', block)
    }
    function mineWithAxe(block){
        event.add('minecraft:mineable/axe', block)
    }
    function mineWithShovel(block){
        event.add('minecraft:mineable/shovel', block)
    }
    chestTypes.forEach(e=> {
        mineWithPickaxe('ironchest:'+e+'_chest')
        mineWithPickaxe('ironchest:trapped_'+e+'_chest')
        if(e.includes('copper')||e.includes('iron')||e.includes('gold')||e.includes('diamond')){
            mineWithAxe('ironchest:'+e+'_chest')
            mineWithAxe('ironchest:trapped_'+e+'_chest')
        }
    })
    for(let i of blocksP){
        mineWithPickaxe(i)
    }
    for(let i of blocksS){
        mineWithShovel(i)
    }
})