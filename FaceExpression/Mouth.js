class Mouth{
    constructor(){
     this.time=0
this.extras={
     "bigode":false
}
    }

    Show(){
        var px = width*1.0859375/2.75+width/32, py = height/3.25
        if(this.extras["bigode"]===true){arc((width-px)-(width-px-px)/2,py, (width-px)-(width-px-px)/2, 100, 0, Math.PI);py=height/3}
             if(humor[0]!="happy"&&humor[0]!="sad"){line(px,py,width-px,py)}

             if(humor[0]=="happy"){push();strokeWeight(2.5)
        arc((width-px)-(width-px-px)/2,py, ((width-px)-(width-px-px))/2.5, height/6+height/12, -0, -1*Math.PI);pop()
             }

             if(humor[0]=="sad"){push();strokeWeight(2.5);translate((width-px)-(width-px-px)/2,py+(height/6+height/12)/2);rotate(180 * Math.PI / 180)
               arc(0,0, ((width-px)-(width-px-px))/2.5, height/6+height/12, -0, Math.PI);pop()
                    }

          if(humor[0]=="disgusted"){this.time+=1
               console.log(this.time)
          if(this.time>=360){push();noFill();strokeWeight(10)//LEFT
          translate(width/2.5,py); rotate(270 * Math.PI / 180);
          noStroke();fill("rgba(255,0,0,0.5)");ellipse(0,0,px/8);noFill();stroke("black")
          arc(0,0, px/8, px/8, -0, -1*Math.PI)
          translate(0,0.5625*width-width/2.5+px/12);rotate(180 * Math.PI / 180);
          noStroke();fill("rgba(255,0,0,0.5)");ellipse(0,0,px/8);noFill();stroke("black")
          arc(0,0, px/8, px/8, -0, -1*Math.PI)
          pop()
     }}
        

        
        /*function Tongue(){push();fill("red");stroke("red");strokeWeight(2.5)
        arc((width-px)-(width-px-px)/2,py, 100, 100, 0, Math.PI);
        pop()
        };Tongue()*/
        }
        

}