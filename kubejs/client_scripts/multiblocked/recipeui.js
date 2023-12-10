const $Size = java('com.lowdragmc.lowdraglib.utils.Size')

onEvent('mbd.recipe_ui.generation', event => {
    const widged = event.recipeWidget
    const energyCap = MbdRegistry.getCapability('forge_energy')
    let recipe = widged.recipe

    widged.clearAllWidgets()
    
    widged.setBackground(new ResourceTexture('minecraft:textures/block/sand.png'))
    console.log(widged.getSize())
    let energyOut = energyCap.createContentWidget()
    energyOut.clearAllWidgets()
    energyOut.setContent('out', recipe.getOutputContents(energyCap)[0], false)
    energyOut.setSelfPosition(0, 15)
    energyOut.setBackground(new ResourceTexture('cofh_core:textures/mob_effect/charge.png'))
    widged.addWidget(energyOut)
    widged.addWidget(new TextBoxWidget(0, 40, 140, [String('Generates ' + recipe.getOutputContents(energyCap)[0].getContent().toString() + ' RF/tick')]))

})

onEvent('mbd.recipe_ui.voline', event => {
    const widged = event.recipeWidget
    const itemCap = MbdRegistry.getCapability('item')
    let recipe = widged.recipe

    widged.clearAllWidgets()
    widged.setSize(new $Size(178, 80))

    let width = widged.getSize().width
    let height = widged.getSize().height

    let itemIn = itemCap.createContentWidget()
    itemIn.setContent('in', recipe.getInputContents(itemCap)[0], false)
    itemIn.setSelfPosition(width / 6 - 10, height / 2 - 10)
    widged.addWidget(itemIn)

    widged.addWidget(new ImageWidget(width / 2 - 15, height / 2 - 40, 30, 30, new ResourceTexture('infernalexp:textures/item/voline_bucket.png')))
    widged.addWidget(new ImageWidget(width / 2 - 35, height / 2 - 5, 70, 10, new ResourceTexture('minecraft:textures/block/red_mushroom_block.png')))
    widged.addWidget(new ImageWidget(width / 2 - 5, height / 2 + 15, 10, 10, new ResourceTexture('minecraft:textures/mob_effect/hunger.png')))
    widged.addWidget(new ImageWidget(width / 2 - 15, height / 2 + 15, 10, 10, new ResourceTexture('minecraft:textures/mob_effect/hunger.png')))
    widged.addWidget(new ImageWidget(width / 2 + 5, height / 2 + 15, 10, 10, new ResourceTexture('minecraft:textures/mob_effect/hunger.png')))

    let itemOut = itemCap.createContentWidget()
    itemOut.setContent('out', recipe.getOutputContents(itemCap)[0], false)
    itemOut.setSelfPosition(5 * width / 6 - 10, height / 2 - 10)
    widged.addWidget(itemOut)
})