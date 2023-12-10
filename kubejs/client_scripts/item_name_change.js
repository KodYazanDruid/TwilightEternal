const $DyenamicsDyeColor = java('cofh.dyenamics.core.util.DyenamicDyeColor')

onEvent('client.generate_assets', event => {
    new Map([
        ['farmersdelight:barbecue_stick', 'Kebab Skewer'],
        ['create_dd:bronze_nugget', 'Strong Bronze Nugget'],
        ['create_dd:bronze_ingot', 'Strong Bronze Ingot'],
        ['create_dd:bronze_block', 'Block of Strong Bronze'],
        ['create_dd:bronze_sheet', 'Strong Bronze Sheet'],
        ['create_dd:refined_radiance_casing', 'Super Radiant Casing'],
        ['create_dd:shadow_steel_casing', 'Super Shadow Casing'],
        ['create_dd:refined_radiance', 'Super Refined Radiance'],
        ['create_dd:shadow_steel', 'Super Shadow Steel'],
        ['create_dd:chromatic_compound', 'Super Chromatic Compound'],
        ['create_dd:chromatic_block', 'Block of Super Chromatic Compound'],
        ['create_dd:shadow_steel_block', 'Block of Super Shadow Steel'],
        ['create_dd:refined_radiance_block', 'Block of Super Refined Radiance']
    ]).forEach((v, k) => event.addLang(Item.of(k).item.getDescriptionId(), v))

    $DyenamicsDyeColor.dyenamicValues().forEach(color => {
        console.log(Item.of('kubejs:laser_lens' + color.id).item.getDescriptionId())
        console.log(color.name() + ' Lens')
        event.addLang(Item.of('kubejs:laser_lens' + color.id).item.getDescriptionId(), color.name() + ' Laser Lens')
    })

    event.addLang('key.placeableitems.placeable', '§5You can place this item in world with pressing §6§oShift + Right Click§r§4.')
    event.addLang('key.placeableitems.component.biposition', '§7You can rotate this item while placing depending on your facing.')
    event.addLang('key.placeableitems.component.multimodel', '§7You can change the model of this item by pressing §8§oRight Click§r§7.')
    event.addLang('key.placeableitems.component.stackable', '§7This item can be stacked on the same block with §8§oRight Click§r§7ing on existing stack.')
    event.addLang('key.placeableitems.component.edible', '§7This item can be eaten by §8§oRight Click§r§7ing on it.')
    event.addLang('key.placeableitems.component.slime', '§7This item can bounce you like a slime block.')
    event.addLang('key.placeableitems.component.firework', '§8§oRight Click§r§7ing this block launches as a firework.')
    event.addLang('key.placeableitems.component.firecharge', '§8§oRight Click§r§7 while it is placed to fire a fire charge at players facing direction.')

})