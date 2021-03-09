var tomcat, catWalks, catImg2, catImg1;
var jerrymouse, mouseImg1, mouseImg3, mouseImg4, mouseImg2;
var garden;

function preload() {
    mouseImg3 = loadImage("mouse3.png");
    mouseImg4 = loadImage("mouse4.png");
    mouseImg1 = loadImage("mouse1.png");
    mouseImg2 = loadImage("mouse2.png");
    catImg1 = loadImage("cat1.png");
    catImg2 = loadImage("cat2.png");
    catImg3 = loadImage("cat3.png");
    catImg4 = loadImage("cat4.png");
    garden = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    background(garden);
    tomcat = createSprite(mouseX,mouseY,100,100);   
    jerrymouse = createSprite(200,800,100,100)
}

function draw() {
    background(255);
    if(tomcat.x - jerrymouse.x >(tomcat.width -jerrymouse.width)/2){
        tomcat.velocityX = 0;
        tomcat.addAnimation("CatLastImage", catImg3);
        tomcat.changeAnimation("CatLastImage");

        jerrymouse.addAnimation("MouseLastImage",mouseImg3);
        jerrymouse.changeAnimation("MouseLastImage");
    }
    keyPressed();
    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        tomcat.VelocityX = -5;
        tomcat.addAnimation("tomcat_Running", catImg2);
        tomcat.changeAnimation("tomcat_Running");
    }
    
}
