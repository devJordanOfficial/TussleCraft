LootJS.modifiers((event) => {
	event.addEntityLootModifier('minecraft:squid').replaceLoot('supplementaries:antique_ink', 'minecraft:ink_sac', true)
})