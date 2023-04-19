onEvent('recipes', event => {
    event.remove({output: 'ae2:printed_calculation_processor'})
    event.remove({output: 'ae2:printed_logic_processor'})
    event.remove({output: 'ae2:printed_engineering_processor'})
    event.remove({output: 'ae2:printed_silicon'})

    function keepHeldItem(input, output){
        event.custom({
            'type': 'create:deploying',
            "ingredients": [
                {
                    "item": input[0]
                },
                {
                    "item": input[1]
                }
            ],
                "results": [
                {
                    "item": output
                }
                ],
                "keepHeldItem": true
                })
       }

    keepHeldItem(['ae2:certus_quartz_crystal', 'ae2:calculation_processor_press'], 'ae2:printed_calculation_processor')
    keepHeldItem(['minecraft:gold_ingot', 'ae2:logic_processor_press'], 'ae2:printed_logic_processor')
    keepHeldItem(['minecraft:diamond', 'ae2:engineering_processor_press'], 'ae2:printed_engineering_processor')
    keepHeldItem(['ae2:silicon', 'ae2:silicon_press'], 'ae2:printed_silicon')
    keepHeldItem(['minecraft:iron_block', 'ae2:calculation_processor_press'], 'ae2:calculation_processor_press')
    keepHeldItem(['minecraft:iron_block', 'ae2:logic_processor_press'], 'ae2:logic_processor_press')
    keepHeldItem(['minecraft:iron_block', 'ae2:engineering_processor_press'], 'ae2:engineering_processor_press')
    keepHeldItem(['minecraft:iron_block', 'ae2:silicon_press'], 'ae2:silicon_press')
})

