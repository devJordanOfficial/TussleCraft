ServerEvents.recipes(event => {
	event.shaped(
		'backpacked:backpack',
		[
			'AAA',
			'BCB',
			'AAA'
		],
		{
			A: 'minecraft:leather',
			B: 'minecraft:string',
			C: '#c:iron_ingots'
		},
	)
})