onEvent('recipes', event => {
    event.custom({
        "type": "tconstruct:alloy",
        "inputs": [
            {
                "name": "thermal:glowstone",
                "amount": 10
            },
            {
                "name": "thermal:redstone",
                "amount": 10
            },
            {
                "name": "kubejs:unprepared_uranium",
                "amount": 90
            }
        ],
        "result": {
            "fluid": "tconstruct:molten_uranium",
            "amount": 180
        },
        "temperature": 1132
      })

})