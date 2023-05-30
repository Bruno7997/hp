class FaceColor{
    constructor(){

    }

    Show(x){
        
        
             
        if(x!=undefined){
/*if(x=="happy"){humor[0]=x;backColor=humor[1]["happy"]}
if(x=="sad"){humor[0]=x;backColor=humor[1]["sad"]}
if(x=="angry"){humor[0]=x;backColor=humor[1]["angry"]}
if(x=="disgusted"){humor[0]=x;backColor=humor[1]["disgusted"]}
if(x=="tired"){humor[0]=x;backColor=humor[1]["depressed"]}*/
   
if(x.startsWith("rgba(")){backColor=x;setTimeout(()=>{humor[0]="normal"},4000)}
else{humor[0]=x;backColor=humor[1][x]}
        }
        else{
if(humor[0]!="normal"){background(backColor);if(faceText[0]==""&&Face["Text"].timereset==0){
        if(humor[0]!="disgusted"){setTimeout(()=>{humor[0]="normal"},3000)}
else{setTimeout(()=>{humor[0]="normal";Face["Mouth"].time=0},10000)}}}else{background(backColor)}
        }
   }
}