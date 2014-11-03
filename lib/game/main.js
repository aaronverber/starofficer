ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',

	'game.entities.spaceship',

	'game.levels.main'
)
.defines(function(){
MyGame = ig.Game.extend({
	
	init: function() {
		ig.input.bind(ig.KEY.W, 'forward');
		ig.input.bind(ig.KEY.S, 'backward');
		ig.input.bind(ig.KEY.A, 'turnLeft');
		ig.input.bind(ig.KEY.D, 'turnRight');
		// Initialize your game here; bind keys etc.
    
    this.loadLevel(LevelMain);
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
    var gameviewport= ig.game.screen;
    var gamecanvas= ig.system;
    var player = this.getEntitiesByType( EntitySpaceship )[0];
    gameviewport.x = player.pos.x - gamecanvas.width /2;
    gameviewport.y = player.pos.y - gamecanvas.height /2;
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();

	}
});

ig.main( '#canvas', MyGame, 60, 1028, 768, 1 );

});
