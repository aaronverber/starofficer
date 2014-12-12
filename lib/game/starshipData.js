ig.module(
	'game.starshipData'
)
.requires(
	'impact.game'
)
.defines(function(){
	ig.Game.inject({
		hull: {
			scout01: {
				design: "Light Scout",
				size: "size: {x: 50, y: 36}",
				hitpoints: 100,
				sprite: "'media/starships/hulls/scout01.png', 50, 36"
			},
		}
	})
});