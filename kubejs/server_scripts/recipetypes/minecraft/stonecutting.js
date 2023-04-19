onEvent('recipes', event =>{
    function scDup(itemArray){
        for(let i of itemArray){
            for(let j of itemArray){
                if(i!=j)
                    event.stonecutting(i, j)
            }
        }
    }
    scDup(['quark:potato_crate', FD+':potato_crate', 'thermal:potato_block'])
    scDup(['quark:carrot_crate', FD+':carrot_crate', 'thermal:carrot_block'])
    scDup(['quark:beetroot_crate', FD+':beetroot_crate', 'thermal:beetroot_block'])
    scDup([FD+':tomato_crate', 'thermal:tomato_block'])
    scDup([FD+':onion_crate', 'thermal:onion_block'])
    scDup(['quark:apple_crate', 'thermal:apple_block'])
    scDup(['quark:sugar_cane_block', 'thermal:sugar_cane_block'])
    scDup(['quark:bamboo_block', 'thermal:bamboo_block'])
    scDup(['quark:charcoal_block', 'thermal:charcoal_block'])
    scDup(['quark:gunpowder_sack', 'thermal:gunpowder_block'])
    scDup(['thermal:flax_block', 'supplementaries:flax_block'])
    scDup(['thermal:rice_block', FD+':rice_bag'])
    scDup(['quark:gold_bars', TCON+':gold_bars', 'createdeco:gold_bars'])
})