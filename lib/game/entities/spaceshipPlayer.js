ig.module(
	'game.entities.spaceshipPlayer'
)
.requires(
	'game.entities.spaceship'
)
.defines(function(){
	console.log("hello!");
	EntitySpaceshipPlayer = EntitySpaceship.extend({

		update: function(){

			if(ig.input.state('forward')){
				this.vel.y = 100;
			}
			else if(ig.input.state('backward')){
				this.vel.y = -100;
			}
			else{
				this.vel.y = 0;
			}

			this.parent();
		}
	});

});