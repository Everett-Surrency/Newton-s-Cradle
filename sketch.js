const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;

var world, engine, canvas;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var mConstraint;

function setup() {
  canvas = createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();

  let options = {
    mouse: canvasmouse
  };

  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  pendulum1 = new Pendulum(380, 450, "red");
  pendulum2 = new Pendulum(440, 450, "green");
  pendulum3 = new Pendulum(500, 450, "blue");
  pendulum4 = new Pendulum(560, 450, "yellow");
  pendulum5 = new Pendulum(620, 450, "purple");

  sling1 = new Sling(pendulum1.body, {x: 380, y: 200});
  sling2 = new Sling(pendulum2.body, {x: 440, y: 200});
  sling3 = new Sling(pendulum3.body, {x: 500, y: 200});
  sling4 = new Sling(pendulum4.body, {x: 560, y: 200});
  sling5 = new Sling(pendulum5.body, {x: 620, y: 200});
}

function draw() {
  background(0);
  fill("yellow");
  textSize(65);
  text("Newton's Cradle", 270, 670);
  fill("white");
  textSize(25);
  text("Click and Drag your mouse to start the reaction", 250, 760);


  Engine.update(engine);
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}

function mouseDragged() {
  Matter.Body.setPosition(pendulum1.body, {x: mouseX, y: mouseY});
}