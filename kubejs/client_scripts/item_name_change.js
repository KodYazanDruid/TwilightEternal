onEvent('client.generate_assets', event => {   
    new Map([
        ['farmersdelight:barbecue_stick', 'Kebab Skewer'],
        ['create_dd:bronze_nugget', 'Strong Bronze Nugget'],
        ['create_dd:bronze_ingot', 'Strong Bronze Ingot'],
        ['create_dd:bronze_block', 'Block of Strong Bronze'],
        ['create_dd:bronze_sheet', 'Strong Bronze Sheet'],
        ['create_dd:refined_radiance_casing', 'Super Radiant Casing'],
        ['create_dd:shadow_steel_casing', 'Super Shadow Casing']
    ]).forEach((v, k) => event.addLang(Item.of(k).item.getDescriptionId(), v))

})