
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObj, groundObj;
var world;

function setup(){
	createCanvas(1500, 410);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	paperObj = new paper(40,40,20);
	dustbinObj = new dustbin(1250,450);
	groundObj = new ground(600,400);
	//Create a ground

	Engine.run(engine);
	//Render.run(render);

}

function draw(){
	rectMode(CENTER);
	background("cyan");

	paperObj.display();
	dustbinObj.display();
	groundObj.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:45, y:-45});
	}
}