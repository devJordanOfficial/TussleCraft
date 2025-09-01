LootJS.modifiers((event) => {
	event
		.addEntityLootModifier('minecraft:squid')
		.addWeightedLoot([1,2], 'minecraft:ink_sac')
})