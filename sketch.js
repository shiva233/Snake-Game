
var s;
var scl = 20; 
var food;

function setup() {
	createCanvas(600,600);
	
	

	s = new Snake()

	frameRate(10);
	
	pickLocation()

}

function pickLocation(){

	var cols = floor(width/scl);
	var rows = floor(height/scl);

	food = createVector(floor(random(cols)),floor(random(rows)));

	food.mult(scl)

}




function draw() {

	background(51);
	
	s.death()
	
	s.update()
	
	s.show()

	if(s.eat(food)) {

		pickLocation();

	}

	fill(255,0,100);

	rect(food.x,food.y,scl,scl);
}

function keyPressed(){

	if(keyCode === 87){

		s.dir(0,-1)

	}
		else if(keyCode === 83){
			
			s.dir(0,1)

		}
		else if(keyCode === 65){
			
			s.dir(-1,0)

		}
		else if(keyCode === 68){
			
			s.dir(1,0)

		}

}



