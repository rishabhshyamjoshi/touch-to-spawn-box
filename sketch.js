const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;

function setup(){
    var canvas =createCanvas(800,1200);
    engine = Engine.create();
    world = engine.World;
    ground = new Ground(400,1190,800,10);

}

function draw(){
    background(mouseX,mouseY,125);
    ground.display();

}