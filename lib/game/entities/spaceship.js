ig.module(
	'game.entities.spaceship'
)
.requires(
	'impact.entity'
)
.defines(function(){
	EntitySpaceship = ig.Entity.extend({
		size: {x: 50, y: 50},
    speed: 80,
		collides: ig.Entity.COLLIDES.ACTIVE,

		animSheet: new ig.AnimationSheet('media/spaceshipbase.png', 50, 50),

		init: function(x, y, settings){
			this.parent(x, y, settings);

			this.addAnim('idle', 1, [0]);
		},
    
    update: function(){
      var angle = this.anims.idle.angle;
			
			if(ig.input.state('forward')){
				this.vel.x = Math.cos(angle-(Math.PI/2)) * this.speed;
			  this.vel.y = Math.sin(angle-(Math.PI/2)) * this.speed;
			}
			else if(ig.input.state('backward')){
				this.vel.x = Math.cos(angle-(Math.PI/2)) * -this.speed;
			  this.vel.y = Math.sin(angle-(Math.PI/2)) * -this.speed;
			}
			else{
				this.vel.y = 0;
        this.vel.x = 0;
			}

      if(ig.input.state('turnLeft')){
        this.anims.idle.angle -= .02;
      }
      
      if(ig.input.state('turnRight')){
        this.anims.idle.angle += .02;
      }
			this.parent();
		}
	});

});