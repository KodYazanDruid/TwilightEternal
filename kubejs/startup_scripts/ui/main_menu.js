onEvent('ui.main_menu', event => {
    event.replace(ui => {
        ui.tilingBackground('kubejs:textures/ui/goofy_ahh_cat.jpg', 256)
        ui.image(i => {
            i.setTexture('kubejs:textures/ui/twilight_logo.png')
            i.x = ui.actualW / 3
            i.y = ui.actualH / 5
            i.height = 45.5
            i.width  = 202
        })

        ui.button(b => {
            b.name = 'Singleplayer'
            b.x = 50
            b.y = 110
            b.action = 'minecraft:singleplayer'
        })
        ui.button(b => {
            b.name = 'Multiplayer'
            b.x = 50
            b.y = 140
            b.action = 'minecraft:multiplayer'
        })
        ui.button(b => {
            b.name = 'Options'
            b.x = 50
            b.y = 170
            b.action = 'minecraft:options'
        })
        ui.button(b => {
            b.name = 'Quit'
            b.x = 50
            b.y = 200
            b.action = 'minecraft:quit'
        })
        ui.button(b => {
            b.name = 'Language'
            b.x = 50
            b.y = 230
            b.action = 'minecraft:language'
        })
    })
})