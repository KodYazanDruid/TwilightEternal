onEvent('recipes', event => {

    erId(event, CCR+':computer_advanced_upgrade')
    erId(event, CCR+':pocket_computer_advanced_upgrade')
    erId(event, CCR+':turtle_advanced_upgrade')

    event.shaped(CCR+':computer_normal', [
        'SPS',
        'EMT',
        'IRI'
    ], {
        S: '#forge:ingots/steel',
        P: 'ae2:calculation_processor',
        E: 'create:electron_tube',
        M: 'ae2:controller',
        T: 'ae2:terminal',
        I: '#forge:ingots/invar',
        R: 'thermal:redstone_servo'
    }).id(CCR+':computer_normal')

    event.shaped(CCR+':computer_advanced', [
        'EBE',
        'RCR',
        'BDB'
    ], {
        E: '#forge:plates/electrum',
        B: BR+':blutonium_ingot',
        R: 'thermal:upgrade_augment_3',
        C: CCR+':computer_normal',
        D: '#forge:gears/dragonsteel'
    }).id(CCR+':computer_advanced')

    event.shaped(CCR+':pocket_computer_normal', [
        ' S ',
        'ACF',
        ' P '
    ], {
        S: CA+':copper_spool',
        A: 'ae2:annihilation_core',
        C: CCR+':computer_normal',
        F: 'ae2:formation_core',
        P: CA+':capacitor'
    }).id(CCR+':pocket_computer_normal')

    event.shaped(CCR+':pocket_computer_advanced', [
        ' S ',
        'ACF',
        ' P '
    ], {
        S: CA+':copper_spool',
        A: 'ae2:annihilation_core',
        C: CCR+':computer_advanced',
        F: 'ae2:formation_core',
        P: CA+':capacitor'
    }).id(CCR+':pocket_computer_advanced')

    event.shaped('2x '+CCR+':monitor_normal', [
        'SPS',
        'PIP',
        'SPS'
    ], {
        S: '#forge:ingots/steel',
        P: '#forge:plates/invar',
        I: 'ae2:monitor'
    }).id(CCR+':monitor_normal')

    event.shaped(CCR+':monitor_advanced', [
        'ZEZ',
        'EME',
        'ZEZ'
    ], {
        Z: '#forge:plates/zinc',
        E: '#forge:plates/electrum',
        M: CCR+':monitor_normal'
    }).id(CCR+':monitor_advanced')

    event.shaped(CCR+':speaker', [
        'SPS',
        'PMP',
        'INI'
    ], {
        S: '#forge:ingots/steel',
        P: '#forge:plates/tin',
        I: '#forge:ingots/invar',
        N: 'minecraft:note_block',
        M: 'thermal:machine_frame'
    }).id(CCR+':speaker')

    event.shaped(CCR+':printer', [
        'SPS',
        'PMP',
        'INI'
    ], {
        S: '#forge:ingots/steel',
        P: '#forge:plates/tin',
        I: '#forge:ingots/invar',
        N: CEI+':printer',
        M: 'thermal:machine_frame'
    }).id(CCR+':printer')

    event.shaped(CCR+':disk_drive', [
        'SPS',
        'PMP',
        'INI'
    ], {
        S: '#forge:ingots/steel',
        P: '#forge:plates/tin',
        I: '#forge:ingots/invar',
        N: 'ae2:drive',
        M: 'thermal:machine_frame'
    }).id(CCR+':disk_drive')

    event.shaped(CCR+':wired_modem', [
        'PCP',
        'IRI'
    ], {
        P: INF+':plastic',
        C: CA+':connector',
        I: '#forge:ingots/invar',
        R: '#forge:dusts/redstone'
    }).id(CCR+':wired_modem')

    event.shaped('4x '+CCR+':cable', [
        'RRR',
        'EEE',
        'RRR'
    ], {
        R: 'thermal:cured_rubber',
        E: '#forge:ingots/electrum'
    }).id(CCR+':cable')

    event.shaped(CCR+':wireless_modem_normal', [
        'PWP',
        'QMQ',
        'PEP'
    ], {
        P: INF+':plastic',
        W: 'ae2:wireless_access_point',
        Q: 'ae2:quantum_ring',
        E: '#forge:ingots/enderium',
        M: CCR+':wired_modem'
    }).id(CCR+':wireless_modem_normal')

    event.shaped(CCR+':wireless_modem_advanced', [
        ' S ',
        'PMP',
        ' S '
    ], {
        S: '#forge:ingots/signalum',
        P: '#forge:plates/lead',
        M: CCR+':wireless_modem_normal'
    }).id(CCR+':wireless_modem_advanced')

    event.shaped(CCR+':turtle_normal', [
        ' E ',
        'TCT',
        ' O '
    ], {
        E: 'create:electron_tube',
        T: '#forge:gears/twinite',
        C: CCR+':computer_normal',
        O: 'ironchest:obsidian_chest'
    }).id(CCR+':turtle_normal')

    event.shaped(CCR+':turtle_advanced', [
        ' E ',
        'TCT',
        ' O '
    ], {
        E: 'create:electron_tube',
        T: '#forge:gears/twinite',
        C: CCR+':computer_advanced',
        O: 'ironchest:obsidian_chest'
    }).id(CCR+':turtle_advanced')

})