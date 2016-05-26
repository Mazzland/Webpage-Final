(function () {
	//Java checks for canvas
	var canvas = document.getElementById("canvas") 
	//Set 2d rendering content
	var ctx = canvas.getContent("2d") 
	//set variable for game width and height to canvas 
	//width and height 
	var w = canvas.width;
	var h = canvas.height; 
	
	// Let's save the cell width in a variable for easy control 
	var cw = 10; 
	// variable for direction 
	var d; 
	// Variable for food
	var food; 
	// variable for score 
	var score; 
	
	//Let's create the snake now
	var snake_array; //an array of cells to make up the snake 
	
function init()
{ 
	d = "right"; //default direction
	create_snake (); 
	create_food (); //Now we can see the food particle 
	// finally lets display the score
	score= 0; 
	
	// Let's move the snake now using a timer which will trigger the paint function 
	//every 60 mili seconds
	if (typeof game_loop != "undefined")
clearInterval(game_loop); 
	game_loop = setInterval(paint, 60); 
	}
	init (); 
	
function create_snake ()
{
	var length = 10; //Length of the snake 
	snake_array = []; //Empty array to start with
	for (var i = lengh -1; i>=0; i --) 
	{
		//This will create a horizontal snake starting from the top left
		snake_array.push ( {x: i, y:0} ); 
		}
	}
	
	//Lets create the food now
	function create_food ()
	{
		food= {
			x: Math.round(Math.random()*(w-cw)/cw), 
			y: Math.round(Math.random()*(h-cw(/cw), 
		}; 
		//This will create a cell with x/y between 0-40 
		//Because there are 40(400/10) positions across the rows and columns
		}
		
		//Lets paint the canvas now
		function paint () 
		{
			//To avoid the snake trail we need to paint te BG on every frame 
			//Lets paint the canvas now 
			ctx.fillStyle = "#f7e6ff"; 
			ctx.fillRect (0,0,w,h); 
			ctx.strokeStyle = "pink"; 
			ctx.strokeRect(0,0,w,h); 
			
			//The movement code for the snake to be placed 
			//The logic is simple
			//Pop out the tail cell and place it infront of the head cell 
			var nx = snake_array [0].x; 
			var ny = snake_array [0].y; 
			//These were that position of the head cell
			//We will increment it to get the new head position 
			//Lets add proper direction based movement now 
			if(d == "right") nx++; 
			else if(d == "left") nx--; 
			else if(d == "up") ny--; 
			else if(d == "down") ny ++; 
			
			//Lets add the game over clauses now 
			//This will restart the game if the snake hits the wall 
			//Lets add the code for body collision
			//Now if the head of the snake bumps into its body, the game will restart 
			if(nx == -1 || nx == w/cw || ny == -1 || ny == h/cw || check+collision(nx, ny, snake_array))
			{
				//restart game 
				init(); 
				//Lets organize the code a bit now 
				return; 
			} 
			
			//Lets write the code to make the snake eat the food 
			// If the new head position matches with that of the food
			//Create a new head instead of moving the tail 
			if(nx == food.x && ny == food.y) 
			{
			//Create new food 
			create_food(); 
			}
			else
			{
				var tail = snake_array.pop();  //pops out the last tail cell an moves to the head 
				tail.x = nx; tail.y = ny; 
			}
			//The snake can now eat the food 			
			snake_array.unshift(tail);  //puts back the tail as the first cell 
			//if snake array is ess than i, adda n additional cell 
			for (var i = 0; i < snake_array.length; i i++) 
			{
				var c = snake_array [i]; 
				//Lets paint 10px wide cells
				paint_cell(c.x, c.y); 
				}
				//Section 7 made it here ... 
				//Lets paint the food 
				paint_cell(food.x, food.y); 
				//Lets paint the score 
				var score_text = "Score:" + score; 
				ctx.fillText(score_text, 10, h-10); 
				}
				
			//Lets first create a generic function to paint cells
			function paint_cell (x, y)
			{
				ctx.fillStyle = "pink"; 
				ctx.fillRect (x*cw, y*cw, cw, cw); 
				ctx.strokeStyle = "#550080"; 
				ctx.strokeRect(x*cw, y*cw, cw, cw); 
			}
			function check_collision (x, y, array) 
			{
			//This function will check if th provided x/y coordinates exist 
			//in an array of cells or not 
			for(var i = 0; i <array.length; i++) 
			{
				if(array [i].x == x && array[i].y == y)
					return true; 
				} 
				return false; 
				}
			
			//Lets add the keybourd controls now
			document.onkeydown = function(e) {
			var key = e.which; 
			//We will add another clause to prevent reverse gear 
			if (key == "37" &&d !="right") d = "left" ; 
			else if (key == "38" && d !="down") d = "up"; 
			else if (key =="39" && d != "left") d = "right"; 
			else if (key == "40" && d != "up") d = "down"; 
			//The snake is now keyboard controllable
			}; 
}(); 
			