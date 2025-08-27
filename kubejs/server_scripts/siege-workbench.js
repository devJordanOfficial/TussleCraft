ServerEvents.tags('block', event => {
	event.add('minecraft:mineable/axe', 'siegemachines:siege_workbench')
})

LootJS.modifiers((event) => {
	event.addBlockLootModifier('siegemachines:siege_workbench').addLoot('siegemachines:siege_workbench')
})