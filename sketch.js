// namespace - short name 
//constant 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world,box;
var ground,ball;
var ball_options


function setup() {
  var canvas = createCanvas(400,400);
  // instance of physics engine 
  // assigned to engine variable
  engine = Engine.create();

  // world variable 

  world = engine.world;

  var options = {
    isStatic:true
  }

  box = Bodies.rectangle(200,395,400,20, options);
  World.add(world , box);
  var ball_options = {
    isStatic:false,
    restitution:1
  }
  ball = Bodies.circle(200,200,7,ball_options)
  World.add(world , ball)
}

function draw() {
  background("cyan");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(box.position.x, box.position.y, 400, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y, 7,7);
  
}