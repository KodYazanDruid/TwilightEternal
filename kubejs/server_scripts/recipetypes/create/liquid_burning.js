onEvent('recipes', event => {
    event.custom({
        "type":"createaddition:liquid_burning",
        "input": {
              "fluid": "thermal_extra:refined_sunflower_oil",
              "amount": 1000
        },
        "burnTime": 14400
    })
})