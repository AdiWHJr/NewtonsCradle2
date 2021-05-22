const Engine = Matter.Engine
const World = Matter.World
const Mouse = Matter.Mouse
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint

var world, engine
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5
var sling1, sling2, sling3, sling4, sling5
var mConstraint

function setup(){
    createCanvas(windowWidth/2, windowHeight/2)
    engine = Engine.create()
    world = engine.world

    let canvasmouse = Mouse.create(canvas.elt)
    canvasmouse.pixelRatio = pixelDensity()
    let options = {
        mouse: canvasmouse
    }
    mConstraint = MouseConstraint.create(engine, options)
    World.add(world, mConstraint)

    pendulum1 = new Pendulum(220, 260, "red")
    pendulum2 = new Pendulum(280, 260, "blue")
    pendulum3 = new Pendulum(340, 260, "red")
    pendulum4 = new Pendulum(400, 260, "blue")
    pendulum5 = new Pendulum(460, 260, "red")

    sling1 = new Sling(pendulum1.body, {x: 220, y: 40})
    sling2 = new Sling(pendulum2.body, {x: 280, y: 40})
    sling3 = new Sling(pendulum3.body, {x: 340, y: 40})
    sling4 = new Sling(pendulum4.body, {x: 400, y: 40})
    sling5 = new Sling(pendulum5.body, {x: 460, y: 40})
}

function draw(){
    Engine.update(engine)

    background("black")
    pendulum1.display()
    pendulum2.display()
    pendulum3.display()
    pendulum4.display()
    pendulum5.display()

    sling1.display()
    sling2.display()
    sling3.display()
    sling4.display()
    sling5.display()

}

function mouseDragged(){
    Matter.Body.setPosition(pendulum1.body, {x: mouseX, y: mouseY})
}