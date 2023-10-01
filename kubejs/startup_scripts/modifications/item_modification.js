onEvent('item.modification', event => {
    event.modify('minecraft:ender_pearl', item => {
        item.maxStackSize = 64
    })
    event.modify("minecraft:bucket", item => {
        item.maxStackSize = 64
    })
    event.modify('tconstruct:pig_iron_block', item => {
        item.foodProperties = food => {
            food.hunger(8).saturation(1.5).meat(true)
        }
    })
    event.modify('tconstruct:pig_iron_ingot', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(1.25).meat(true)
        }
    })
    event.modify('tconstruct:pig_iron_nugget', item => {
        item.foodProperties = food => {
            food.hunger(0.5).saturation(.5).meat(true)
        }
    })
    /* event.modify('industrialforegoing:infinity_hammer', item => {
        item.attackSpeed = -3.25
    }) */
})