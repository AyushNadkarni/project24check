
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin,paper,ground;

function setup() {
	createCanvas(800, 700);

dustbin = new Dustbin(700,600);

paper = new Paper(200,300,30,30);
paper.scale = 0.3;

	engine = Engine.create();
	world = engine.world;
}

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
function draw() {
  rectMode(CENTER);
  background(0);


display()
dustbin.display();
paper.display();
ground.display

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.Body,paperObject.Body.position,{x:85,y:-85});
		
	}
}


