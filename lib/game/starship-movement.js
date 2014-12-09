ig.module(
	'game.starship-movement'
)
.requires(
	'impact.entity'
)
.defines(function(){
	StarshipMovement = {   
    movement: function(thrust){
      var angle = this.anims.idle.angle;
			
			this.maxVel.x = 1000;
      this.maxVel.y = 1000;
      
			if(ig.input.state('forward')){
				this.accel.x = Math.cos(angle-(Math.PI/2)) * thrust;
        this.accel.y = Math.sin(angle-(Math.PI/2)) * thrust;
      }
      else if(ig.input.state('backward')){
				this.accel.x = Math.cos(angle-(Math.PI/2)) * -thrust;
			  this.accel.y = Math.sin(angle-(Math.PI/2)) * -thrust;
			}
      else{
        this.accel.x = 0;
        this.accel.y = 0;
			}

      if(ig.input.state('turnLeft')){
        this.anims.idle.angle -= 0.010;
      }
      
      if(ig.input.state('turnRight')){
        this.anims.idle.angle += 0.010;
      }
      
      if(ig.input.state('brakes')){
        this.fire("brakes");
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
      else{
        this.fire("noBrakes");
      }
		}
	};
});