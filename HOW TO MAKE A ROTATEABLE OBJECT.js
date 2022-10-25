const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var angle=60;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  
   
   var ground_options ={
     isStatic: true
   };
  

  ground1 = Bodies.rectangle(100,300,100,20,ground_options);
  World.add(world,ground1);

 
 // ground = Bodies.rectangle(100,400,650,20,ground_options);
 // World.add(world,ground); 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
  Matter.Body.rotate(ground1,angle)
 push();
  translate(ground1.position.x,ground1.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  
  angle +=40;

 

 
 // rect(ground.position.x,ground.position.y,650,20);
 
  
}