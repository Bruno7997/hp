class FaceText{
    constructor(){
this.esperar=[,["Poxa, você podia esperar eu terminar de falar, né?","Eu sei que sou lento, mas já é falta de respeito","Aaah, se você continuar assim, eu vou embora",""]]//Ah, ja vi porque fui chamada, voçê deve ter irritado a outra, né?
this.esperar[0]=this.esperar[1][0]

this.timereset=0

}


    InspectText(x){
        if(faceText[0]!=""){faceText[0]="";faceText[1]=this.esperar[0];this.esperar[0]=this.esperar[1][this.esperar[1].indexOf(this.esperar[0])+1]}
        else if(x.includes(" feliz")&&this.CheckTimeVerb(x,["","feliz"],"estar")){Face["Color"].Show("happy");faceText[1]="Eba, se você está feliz, eu também estou. Então, o que aconteceu?"}
        else if(x.includes(" triste")&&this.CheckTimeVerb(x,["","triste"],"estar")){Face["Color"].Show("sad");faceText[1]="Aaah, então tambem estou triste. O que aconteceu?"}
        else if(x.includes(" bravo")&&this.CheckTimeVerb(x,["","bravo"],"estar")){Face["Color"].Show("angry");faceText[1]="O que te deixou assim? Foi alguma pessoa? Vou acabar com ela"}
        else if((x.includes(" cansado")&&this.CheckTimeVerb(x,["","cansado"],"estar")||x.includes("não aguento mais essa vida")||x.includes("não suporto mais essa vida"))){Face["Color"].Show("tired");faceText[1]="Essa vida é cansativa mesmo, coitado, ainda bem que não estou viva"}
        else if(x.includes(" nojo")&&this.CheckTimeVerb(x,["","nojo"],"estar")){Face["Color"].Show("disgusted");faceText[1]="O que era?";setTimeout(()=>{faceText[1]="Não, espera, se for muito nojento, você sabe que eu não quero nem saber";setTimeout(()=>{faceText[1]+=".......\t\t\t ";setTimeout(()=>{faceText[1]+="baratas"},2000)},2000)},3000)}
        else if((x.includes(" bem")&&this.CheckTimeVerb(x,["","bem"],"estar"))||(x.includes(" normal")&&this.CheckTimeVerb(x,["","normal"],"estar"))){humor[0]="normal";faceText[1]="Que bom"}
        else if((x.includes(" otimo")&&this.CheckTimeVerb(x,["","otimo"],"estar"))){humor[0]="happy";Face["Color"].Show("normal");faceText[1]="Que maravilha"}

        
        else if(x.includes(" vou morrer")){Face["Color"].Show("rgba(16,18,85,1)");faceText[1]="Isso é mentira, né?"}
        else if(x.includes(" morrer")){Face["Color"].Show("rgba(16,18,85,1)");console.log(this.CheckTimeVerb(x,["","morrer"],"querer"));if(this.CheckTimeVerb(x,"eu","querer")||this.CheckTimeVerb(x,"","querer")){faceText[1]="Porque? Não faça isso, vou sentir a sua falta"}else{faceText[1]="Isso era antes, né? Agora você me tem"}}
        else if(x.includes(" me matar")){Face["Color"].Show("rgba(16,18,85,1)");if(this.CheckTimeVerb(x,["","me matar"],"querer")){faceText[1]="Porque? Não faça isso, vou sentir a sua falta"}else{faceText[1]="Porque?"}}
        

        //EXTRAS
        else if(x.includes("sem bigode")||x.includes("tirar bigode")||x.includes("remover bigode")){Face["Mouth"].extras["bigode"]=false}else if(x.includes("bigode")){Face["Mouth"].extras["bigode"]=true}
        else if(x.includes("tudo bem?")||x.includes("tudo bem ?")||x.includes("tudo bem com você?")||x.includes("tudo bem com você ?")){faceText[1]="Eu?";setTimeout(()=>{Face["Color"].Show("rgba(255,0,85,1)");faceText[1]="Ooh, achei fofo, alegrou meu dia."; setTimeout(()=>{Face["Color"].Show("rgba(255,255,0,1)");faceText[1]="Eu estou bem, obrigado(a)"},3500)},3000)}
        else if(x.includes("ola")){faceText[1]="Ola...";setTimeout(()=>{faceText[1]+=" de novo"},2500);humor[0]="normal"}
        
        //error -_-
        else{Face["Color"].Show("rgba(28,46,111,1)");faceText[1]="Me desculpe, não entendi a sua frase, não sou muito 'inteligente', poderia escrever ela da maneira 'correta'? Não precisa literalmente reponder essa pergunta"}
        }

        Show(){push(strokeWeight(2.5));textSize(50);var tamanho=0
if(faceText[1].indexOf("\n")==-1&&faceText[1].length*25>width){var l=["",0,""];for(var L in faceText[1]){L=Number(L);if(L==faceText[1].indexOf("\n",l[1])||L==(faceText[1].indexOf("\n",l[1])+1)){l[1]=L};
if((L-l[1])*25>width){tamanho=(L-l[1]);if(l[0].length==0){l[0]=l[0]+faceText[1].slice(l[1],L)}else{l[0]=l[0].slice(0,l[0].length+(L-faceText[1].length+(L/tamanho)-1))};if(l[0][l[0].length-1]!=" "){l[2]="-"};if(faceText[1].slice(L)!=""){;l[0]=l[0]+l[2]+"\n"+faceText[1].slice(L);l[2]=""};l[1]=L}};faceText[1]=l[0]}


            if(faceText[0]!=""){text(faceText[0],0,height/1.5)}
            if(faceText[1]!=""){
            if(faceText[1].length!=0&&faceText[0].length!=faceText[1].length){faceText[0]+=faceText[1][faceText[0].length];if(this.timereset!=0){this.timereset=0}}
            else if(faceText[1]!=""){this.timereset+=1;if(this.timereset>=2.5*60){this.timereset=0;faceText[1]="";faceText[0]=""}}}else{this.timereset=0};pop()
}

       CheckTimeVerb(t,x,v){var T = t.indexOf(x[1])-20;if(T<t.length){T=0}

       if(v=="estar"){
       if(t.indexOf("estou",T)!=-1&&(x[1]!=""||t.indexOf("estou",T)<t.indexOf(x[1]))){if(x[0]!=""){if(t.indexOf("estou",T)>t.indexOf(x[0])){return true}else{return false}}else{return true}}
       if(t.indexOf("estava",T)!=-1&&(x[1]!=""&&t.indexOf("estava",T)<t.indexOf(x[1]))){if(x[0]!=""){if((t.indexOf("estava",T)>t.indexOf(x[0]))){return true}else{return false}}else{return true}}
    }

       if(v=="querer"){
       if(t.indexOf("quero",T)!=-1&&(x[1]!=""||t.indexOf("quero",T)<t.indexOf(x[1]))){if(x[0]!=""){if(t.indexOf("quero",T)>t.indexOf(x[0])){return true}else{return false}}else{return true}}
       if(t.indexOf("queria",T)!=-1&&(x[1]!=""||t.indexOf("queria",T)<t.indexOf(x[1]))){if(x[0]!=""){if(t.indexOf("queria",T)>t.indexOf(x[0])){return true}else{return false}}else{return true}}
    }

    }
}

//estava feliz, mas agora estou triste