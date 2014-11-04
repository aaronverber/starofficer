ig.module(
	'game.starship-movement'
)
.requires(
	'impact.entity'
)
.defines(function(){
	StarshipMovement = {   
    movement: function(speed){
      var angle = this.anims.idle.angle;

      console.log(this.vel.x, this.vel.y, this.friction.x);
			
			if(ig.input.state('forward')){
				this.accel.x = Math.cos(angle-(Math.PI/2)) * speed;
        this.accel.y = Math.sin(angle-(Math.PI/2)) * speed;
      }
      else if(ig.input.state('backward')){
				this.accel.x = Math.cos(angle-(Math.PI/2)) * -speed;
			  this.accel.y = Math.sin(angle-(Math.PI/2)) * -speed;
			}
      else{
        this.accel.x = 0;
        this.accel.y = 0;
			}

      if(ig.input.state('turnLeft')){
        this.anims.idle.angle -= 0.015;
      }
      
      if(ig.input.state('turnRight')){
        this.anims.idle.angle += 0.015;
      }
      
      if(ig.input.state('brakes')){
        if(this.vel.x > 1){
          this.vel.x -= 0.5;
        }
        if(this.vel.x < -1){
          this.vel.x += 0.5;
        }
        if(this.vel.x <= 1 && this.vel.x >= -1){
          this.vel.x = 0;
        }
        
        
        if(this.vel.y > 1){
          this.vel.y -= 0.5;
        }
        if(this.vel.y < -1){
          this.vel.y += 0.5;
        }
        if(this.vel.y <= 1 && this.vel.y >= -1){
          this.vel.y = 0;
        }
      }
			this.parent();
		}
	};
});