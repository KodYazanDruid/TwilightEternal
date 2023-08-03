/* onEvent('block.right_click', event => {
    let block = event.block
    let item = event.item
    let player = event.player
    let server = event.server
    
    if(item == "kubejs:refined_fluix_mechanism"){
        server.runCommand(`say ${block}`)
    }
    if(block == 'minecraft:chipped_anvil' && item == Item.of('tconstruct:repair_kit', '{Material:"tconstruct:iron"}')){
        event.cancel()
        block.set('minecraft:anvil', block.getProperties())
        server.runCommandSilent(`playsound minecraft:block.anvil.use ambient @a ${block.getX()} ${block.getY()} ${block.getZ()}`)
        if(!player.isCreativeMode())
            item.count--
    }
    if(block == 'minecraft:damaged_anvil' && item == Item.of('tconstruct:repair_kit', '{Material:"tconstruct:iron"}')){
        event.cancel()
        block.set('minecraft:chipped_anvil', block.getProperties())
        server.runCommandSilent(`playsound minecraft:block.anvil.use ambient @a ${block.getX()} ${block.getY()} ${block.getZ()}`)
        if(!player.isCreativeMode())
            item.count--
    }
}) */