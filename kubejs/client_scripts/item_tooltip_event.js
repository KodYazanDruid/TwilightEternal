onEvent('item.tooltip', event => {
  event.add('create:chromatic_compound', 'This item is a mystery!')

  event.addAdvanced(Ingredient.all, (item, _, text) => {
    if (event.alt && item.nbt) {
      text.add(Text.of('NBT: ').append(Text.prettyPrintNbt(item.nbt)))
    }

    if (item?.nbt?.DeterminationChallenge && item.nbt.DeterminationChallenge == true ){
      text.add(Text.of(' §c⚡⚡ Determination Challenge'))
    }
  })

  event.addAdvanced('magicfeather:magicfeather', (item, a, text) => {
    let name = text.get(0)
    text.removeIf(e => e != name)
  })

  //Needs to be done with player tick event but it is now worth it.
  /* event.addAdvanced('redstone_arsenal:flux_sword', (item, a, text) => {
    text.add(Text.of(' §7Cooldown ' + global.fluxCd))
  }) */
})