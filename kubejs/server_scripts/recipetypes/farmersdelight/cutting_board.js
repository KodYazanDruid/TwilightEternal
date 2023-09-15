onEvent('recipes', event => {
    function cuttingBoard(output, item, tool) {
        event.custom({
            "ingredients": [
                {
                    "item": item
                }
            ],
            "result": [
                {
                    "count": output.count,
                    "item": output.id
                }
            ],
            "tool": {
                "item": tool
            },
            "type": "farmersdelight:cutting"
        })
    }

    cuttingBoard({id:'alexsdelight:bison_mince', count:2}, 'alexsdelight:raw_bison', 'twilightdelight:fiery_knife')
    cuttingBoard({id:'alexsdelight:cooked_catfish_slice', count:2}, 'alexsmobs:raw_catfish', 'twilightdelight:fiery_knife')
    cuttingBoard({id:'alexsdelight:cooked_bunfungus_drumstick', count:2}, 'alexsdelight:raw_bunfungus', 'twilightdelight:fiery_knife')
    cuttingBoard({id:'alexsdelight:cooked_loose_moose_rib', count:2}, 'alexsmobs:moose_ribs', 'twilightdelight:fiery_knife')
    cuttingBoard({id:'alexsdelight:cooked_kangaroo_shank', count:2}, 'alexsmobs:kangaroo_meat', 'twilightdelight:fiery_knife')
})