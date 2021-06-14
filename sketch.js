const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg; 
var time
var bg ;

function preload() {
    // create getBackgroundImg( ) here
    sunrise1=loadImage("sunrise1.png")
    sunrise2=loadImage("sunrise2.png")
    sunrise3=loadImage("sunrise3.png")
    sunrise4=loadImage("sunrise4.png")
    sunrise5=loadImage("sunrise5.png")
    sunrise6=loadImage("sunrise6.png")
    sunrise7=loadImage("sunrise7.png")
    sunrise8=loadImage("sunrise8.png")
    sunrise9=loadImage("sunrise9.png")
    sunrise10=loadImage("sunrise10.png")
    sunrise11=loadImage("sunrise11.png")
    sunrise12=loadImage("sunrise12.png")
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);   
            }
           noStroke()
           textSize(25)
           fill ("white")
           text ("TIME: "+time,width-300,50)

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API    
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
 

    //change the data in JSON format
    var responseJSON=await response.json()
    var datetime=responseJSON.datetime;
    // write code slice the datetime
    var hour=responseJSON.datetime.slice(11,13)

    // add conditions to change the background images from sunrise to sunset
    if( hour>=04 && hour<=06){ 
        bg="sunrise1.png";
    }else if( hour>=06 && hour<=08){
        bg="sunrise2.png";  
    }else if( hour>=23 && hour==0){
        bg="sunrise10.png";
    }else if(hour==0 && hour<=03){
        bg="sunrise11.png";
    }else{
        bg="sunrise12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
