ig.module(
		'game.main'
	)
.requires(
	'impact.game',
	'impact.font',

	'game.plugins.ui',
	'game.plugins.impactEvents',

	'game.entities.starship',

	'game.levels.main'
)
.defines(function() {

	MyGame = ig.Game.extend({

		init: function() {

			ig.input.bind(ig.KEY.W, 'forward');
			ig.input.bind(ig.KEY.S, 'backward');
			ig.input.bind(ig.KEY.A, 'turnLeft');
			ig.input.bind(ig.KEY.D, 'turnRight');
			ig.input.bind(ig.KEY.ALT, 'brakes');
			ig.input.bind(ig.KEY.Z, 'something');
			// Initialize your game here; bind keys etc.

			this.loadLevel(LevelMain);
			
			UI.addLocationUIEventListeners(this);
			UI.addPlayerUIEventListeners(this);
			UI.appendLocationUI(this);
			UI.appendPlayerUI(this);
		},

		update: function() {
			// Update all entities and backgroundMaps
			this.parent();

			var gameviewport = ig.game.screen;
			var gamecanvas = ig.system;
			var player = this.getEntitiesByType(EntityStarship)[0];
			gameviewport.x = player.pos.x - gamecanvas.width / 2;
			gameviewport.y = player.pos.y - gamecanvas.height / 2;
			//Add your own, additional update code here
		},

		draw: function() {
			// Draw all entities and backgroundMaps
			this.parent();

		}
	});

	ig.main('#canvas', MyGame, 60, 1440, 900, 1);

});