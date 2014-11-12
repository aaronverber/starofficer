ig.module(
		'game.plugins.ui'
	)
.requires(

)
.defines(function() {
	UI = {
		addUIEventListeners: function(game) {

			var starship = game.getEntityByName("player");
			var location = game.getEntityByName("planet001");
			var starshipPosX = starship.pos.x;

			$(".ui").append("<div class = locationInfoText><div class = locationWelcome></div><div class = locationName></div><div class= locationIconRow></div><div class= locationDescription>Test</div></div>");

			var locationPositionListener = location.addListener("locationPosition", function(position) {
				$(".locationInfoText").css({
					"width": "400px",
					"height": "400px",
					"left": (position.x) + "px",
					"top": (position.y - 22) + "px",
				});
			});
			
			var locationVisitedList = location.addListener("locationVisited", function(){
				$(".locationIconRow").delay(1000).fadeIn(500).html("<img src=media/treeicon.png height=30 width=30 alt=Earth-like>");
				$(".locationDescription").delay(1500).fadeIn(500).html("<p>Endor is a small forested moon orbiting the gas giant planet of Endor and was the farthest moon away from it. An enchanted world, Endor is notable for being the native home of the Ewoks.</p>");
				location.visited = true;
			});

			$(".locationName").text("ENDOR");
			$(".locationWelcome").text("WELCOME TO DAMP");
			
			$("#brakes").css({
				"width": starship.size.x * 2,
				"left": (ig.system.width / 2 - (starship.size.x / 2)) + "px",
				"top": (ig.system.height / 2 + (starship.size.y * 1.5)) + "px",
			});

			var velocity = starship.addListener("velocity", function(velocity) {
				$("#velocity").text((Math.ceil(velocity.x)) + ", " + (Math.ceil(velocity.y)))
			});
			var brakes = starship.addListener("brakes", function(brakes) {
				$("#brakes").show();
			});
			var noBrakes = starship.addListener("noBrakes", function(noBrakes) {
				$("#brakes").hide();
				

			});
		}
	};
})