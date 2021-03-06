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

    pendulum1 = new Pendulum(250, 260, "red")
    pendulum2 = new Pendulum(310, 260, "blue")
    pendulum3 = new Pendulum(370, 260, "red")
    pendulum4 = new Pendulum(430, 260, "blue")
    pendulum5 = new Pendulum(490, 260, "red")

    sling1 = new Sling(pendulum1.body, {x: 250, y: 40})
    sling2 = new Sling(pendulum2.body, {x: 310, y: 40})
    sling3 = new Sling(pendulum3.body, {x: 370, y: 40})
    sling4 = new Sling(pendulum4.body, {x: 430, y: 40})
    sling5 = new Sling(pendulum5.body, {x: 490, y: 40})
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
