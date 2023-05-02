onEvent('client.generate_assets', event => {
    const rename = (item, newName) => event.addLang(Item.of(item).item.getDescriptionId(), newName)

    rename('farmersdelight:barbecue_stick', 'Kebab Skewer')
})