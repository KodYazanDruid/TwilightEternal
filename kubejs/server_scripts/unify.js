onEvent('recipes', event => {
    //let honeyTypes = ['cofh_core:honey', TCON + ':honey', 'create:honey']
    //let redstoneTypes = ['thermal:redstone', TR + ':molten_redstone']
    
    // Honey unify
    event.custom({
        "type": "tconstruct:entity_melting",
        "entity": {
            "type": "minecraft:bee"
        },
        "result": {
            "fluid": "create:honey",
            "amount": 25
        },
        "damage": 2
    }).id(TCON + ':smeltery/entity_melting/bee')
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "item": "minecraft:honey_block"
        },
        "result": {
            "fluid": "create:honey",
            "amount": 1000
        },
        "temperature": 1,
        "time": 94
    }).id(TCON + ':smeltery/melting/slime/honey_block')
    event.custom({
        "type": "thermal:centrifuge",
        "ingredient": {
          "item": "minecraft:honey_bottle"
        },
        "result": [
          {
            "item": "minecraft:glass_bottle"
          },
          {
            "fluid": "create:honey",
            "amount": 250
          }
        ],
        "energy": 400
      }).id('thermal:machines/centrifuge/centrifuge_honey_bottle')
    event.custom({
        "type": "thermal:centrifuge",
        "ingredient": {
          "item": "minecraft:honeycomb"
        },
        "result": [
          {
            "fluid": "create:honey",
            "amount": 100
          }
        ]
      }).id('thermal:machines/centrifuge/centrifuge_honeycomb')
      event.custom({
        "type": "thermal:crucible",
        "ingredient": {
          "item": "minecraft:honey_block"
        },
        "result": [
          {
            "fluid": "create:honey",
            "amount": 1000
          }
        ],
        "energy": 2000
      }).id('thermal:machines/crucible/crucible_honey_block_to_honey')

      // Redstone unify
      event.custom({
        "type": "tconstruct:alloy",
        "inputs": [
          {
            "name": "tinkers_reforged:molten_blazing_copper",
            "amount": 180
          },
          {
            "name": "thermal:redstone",
            "amount": 1000
          }
        ],
        "result": {
          "fluid": "tinkers_reforged:molten_electrical_copper",
          "amount": 180
        },
        "temperature": 800
      }).id('tinkers_reforged:smeltery/alloy/electrical_copper')
      event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
          "item": "tinkers_reforged:blazing_copper_ingot"
        },
        "cast_consumed": true,
        "switch_slots": true,
        "fluid": {
          "tag": "forge:redstone",
          "amount": 90
        },
        "result": "tinkers_reforged:electrical_copper_dust",
        "cooling_time": 50
      }).id('tinkers_reforged:materials/metal/electrical_copper')


})