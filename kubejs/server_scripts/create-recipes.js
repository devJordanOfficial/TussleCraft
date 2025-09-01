ServerEvents.recipes(event => {
	// Compacting
	event.recipes.create.compacting('minecraft:tuff', [Fluid.water(50), Item.of('minecraft:cobblestone', 16)])
	event.recipes.create.compacting('minecraft:deepslate', [Fluid.lava(50), 'minecraft:cobblestone'])
	event.recipes.create.compacting('minecraft:diamond', [Fluid.lava(100), Item.of('minecraft:coal_block', 12)]).heated()
	event.recipes.create.compacting('minecraft:blaze_rod', [Fluid.lava(50), Item.of('minecraft:blaze_powder', 6)])
	event.recipes.create.compacting('minecraft:calcite', ['minecraft:gravel', Item.of('minecraft:bonemeal', 3)])
	// Mixing
	event.recipes.create.mixing('minecraft:andesite', [Fluid.water(250), 'minecraft:cobblestone', 'minecraft:gravel'])
	event.recipes.create.mixing('minecraft:redstone', [Fluid.lava(50), 'minecraft:netherrack', 'minecraft:flint'])
	event.recipes.create.mixing('minecraft:dripstone_block', [Fluid.water(200), 'minecraft:calcite'])
	// Washing
	event.recipes.create.splashing('minecraft:blue_ice', 'minecraft:packed_ice')
	// Haunting
	event.recipes.create.haunting('minecraft:netherrack', 'minecraft:basalt')
	event.recipes.create.haunting('minecraft:crying_obsidian', 'minecraft:obsidian')
	event.recipes.create.haunting('minecraft:coal', 'minecraft:charcoal')
	event.recipes.create.haunting('minecraft:wither_rose', 'minecraft:rose')
	// Crushing
	event.recipes.create.crushing([Item.of('minecraft:quartz').withChange(0.12), Item.of('minecraft:lapis_lazuli').withChange(0.08)], 'create:limestone')
})