var humor=["normal",
{"happy":"rgba(255,255,0,1)"
,"sad":"rgba(0,0,255,1)"
,"angry":"rgba(255,0,0,1)"
,"normal":"rgba(32,32,32,1)"
,"disgusted":"rgba(0,255,0,1)"}]
var backColor
var input = [,[]], button
var faceText=["","Ola, que bom ve-lo de novo, como você está se sentindo hoje?"]

var Face={
     "Color":new FaceColor(),
     "L_Eye":new Left_Eye(),
     "R_Eye":new Right_Eye(),
     "L_EyeB":new Left_Eyebrown(),
     "R_EyeB":new Right_Eyebrown(),
     "Mouth":new Mouth(),
     "Text":new FaceText(),
}
var k = 0
function preload(){ 
    
}
function setup() {
createCanvas(windowWidth, windowHeight);w=0,h=height/2
input[0]=createInput("").style('font-size',Math.sqrt(width/2)+'px').size(width*0.95,height-height/1.25).position(0,height/1.25).class("customInput").attribute("placeholder","Digite")
button=createButton("E\nN\nV\nI\nA\nR").style('font-size',Math.sqrt(width/2)+'px').size(width*0.05,height-height/1.25).position(width*0.95,height-(height/5)).class("customButton")
.mousePressed(()=>{if(input[0].value()!=""){input[1].push(input[0].value());input[0].elt.value="";Face["Text"].InspectText(input[1][input[1].length-1].toLowerCase())}})
backColor="rgba(32,32,32,1)"
}

function draw() {
face()


drawSprites()

if((keyWentDown("enter"))&&input[0].value()!=""){input[1].push(input[0].value());input[0].elt.value="";Face["Text"].InspectText(input[1][input[1].length-1].toLowerCase())}
}

function face(){
stroke("black");strokeWeight(10);fill("black")
for(var f in Face){
     Face[f].Show()
}


}




