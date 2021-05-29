var bgImg
var cat, catImg
var mouse, mouseImg2

function preload() {
    catImg1  = loadImage("images/cat1.png")
    bgImg = loadImage("garden.png")
    mouseImg1 = loadImage("images/mouse1.pmg")
    mouseImg2 = loadImage("mouse2.pmg,mouse3.png")
    catImg2  = loadImage("cat2.png,cat3.png")
}

function setup(){
    createCanvas(1000,800);
    
    cat = createSprite(100,790)
    mouse = createSprite(700,790)
    cat.addImage("catImg1")
    mouse.addImage("mouseImg1")
}

function draw() {

    background(255);
    
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0
        mouse.changeAnimation("mouseHappy",mouseImg2)
    }

    drawSprites();
}


function keyPressed(){

if(keyCode == LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2)
    mouse.changeAnimation("mouseTeasing")
    cat.addAnimation("catRunning", catImg2)
    cat.changeAnimation("catRunning")
    mouse.frameDelay = 25;
}

}
