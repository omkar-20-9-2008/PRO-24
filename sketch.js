
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,options,papersp;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var options = {
		isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.

	paper = new Paper(100,200,10,10);
	Engine.run(engine);

  
}


function draw() {
  background(0);
  Engine.update(engine);

paper.display();
 
 drawSprites();
}



