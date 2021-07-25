var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particle=null;
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var gameState="PLAY";
var count=10;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(width/2,height,width,20);
  

  for(var d=0; d<=width; d=d+80){
    divisions.push(new Division(d,height-divisionHeight/2,10,divisionHeight));
  }

  for(var l=65-20;l<=width;l+=50){
    plinkos.push(new Plinko(l,75));
  }

  for(var l=40-20;l<=width;l+=50){
    plinkos.push(new Plinko(l,175));
  }

  for(var l=65-20;l<=width;l+=50){
    plinkos.push(new Plinko(l,275));
  }

  for(var l=40-20;l<=width;l+=50){
    plinkos.push(new Plinko(l,375));
  }
}

function draw() {
  background("black");
  textSize(20)
  Engine.update(engine);

  if(gameState==="PLAY"){

    ground.display();

    for(var i=0;i<divisions.length;i++){
      divisions[i].display();
    }
  
    for(var a=0;a<plinkos.length;a+=1){
      plinkos[a].display();
    }
  
    
    text("500",25,height-divisionHeight+10);
    text("400",25+80,height-divisionHeight+10);
    text("300",25+2*80,height-divisionHeight+10);
    text("200",25+3*80,height-divisionHeight+10);
    text("100",25+4*80,height-divisionHeight+10);
    text("100",25+5*80,height-divisionHeight+10);
    text("200",25+6*80,height-divisionHeight+10);
    text("300",25+7*80,height-divisionHeight+10);
    text("400",25+8*80,height-divisionHeight+10);
    text("500",25+9*80,height-divisionHeight+10);
  
    text("Score: "+score,20,30);
    
    text("Chances left: "+count,20,50);
    
  }

  if(particle!==null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>0 && particle.body.position.x<80){
        score+=500;
        particle=null;
      }
      else if(particle.body.position.x>80 && particle.body.position.x<80*2){
        score+=400;
        particle=null;
      }
      else if(particle.body.position.x>80*2 && particle.body.position.x<80*3){
        score+=300;
        particle=null;
      }
      else if(particle.body.position.x>80*3 && particle.body.position.x<80*4){
        score+=200;
        particle=null;
      }
      else if(particle.body.position.x>80*4 && particle.body.position.x<80*5){
        score+=100;
        particle=null;
      }
      else if(particle.body.position.x>80*5 && particle.body.position.x<80*6){
        score+=100;
        particle=null;
      }
      else if(particle.body.position.x>80*6 && particle.body.position.x<80*7){
        score+=200;
        particle=null;
      }
      else if(particle.body.position.x>80*7 && particle.body.position.x<80*8){
        score+=300;
        particle=null;
      }
      else if(particle.body.position.x>80*8 && particle.body.position.x<80*9){
        score+=400;
        particle=null;
      }
      else if(particle.body.position.x>80*9 && particle.body.position.x<80*10){
        score+=500;
        particle=null;
      }
    }
  }

  if(count===-1){
    gameState="END";
  }

  if(gameState==="END"){
    textSize(80);
    text("GAME OVER",150,height/2-150);
    text("SCORE: "+score,200,height/2);
  }
}

//create particle when mouse is pressed
function mousePressed(){
  count-=1;
  if(gameState==="PLAY" && count>0){
    particle=new Particle(mouseX,10,10);
  }
}