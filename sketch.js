
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1;

function preload()
{
	dustbin1 = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paper = new Paper(100,100,50);
	ground = new Ground(400,690,800,10);
	base = new dustbin(615,675,50,15);
	Lside = new dustbin(585,655,15,50);
	Rside = new dustbin(640,655,15,50);
	Engine.run(engine);
  
}


function draw() {
Engine.update(engine);
  background("white");
  imageMode(CENTER);
	image(dustbin1,615,655,70,80);

//Lside.display()
//Rside.display()
ground.display()
//base.display()
paper.display()


}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-100})
	}
}


