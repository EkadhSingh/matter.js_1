const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground, ball, engine, world;

function setup() {
    createCanvas(400, 400);
    //    createSprite(400, 200, 50, 50);]
    engine = Engine.create();
    world = engine.world;
    var gOptions = {
        isStatic: true
    }
    ground = Bodies.rectangle(200, 390, 400, 20, gOptions);
    World.add(world, ground);
    var bOptions = {
        restitution: 1.3
    }
    ball = Bodies.circle(200, 100, 20, bOptions);
    World.add(world, ball);


}

function draw() {
    Engine.update(engine);
    background(0, 0, 0);
    //    drawSprites();
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 20);
}