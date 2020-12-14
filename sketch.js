const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies

var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var particle;
var turn =0;
var count = 0;

var PLAY = 0;
var END = 1;
var gameState = PLAY;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
      plinkos.push(new Plinko(j, 75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
}

function draw() {
  background("black");

  textSize(20)
  text("Score : "+score,20,30);
  text("1600",20,600);
  text("800",100,600);
  text("400",180,600);
  text("200",260,600);
  text("100",340,600);
  text("100",420,600);
  text("200",500,600);
  text("400",580,600);
  text("800",660,600);
  text("1600",740,600);

  if(particle!=null){

    particle.display();

    if(particle.body.position.y>700){

      if(particle.body.position.x<=86){
        score = score + 1600;
        paricle=null;
      }else if(particle.body.position.x<=167){
        score = score+800;
        particle=null;
      }else if(particle.body.position.x<=247){
        score = score+400;
        particle=null;
      }else if(particle.body.position.x<=327){
        score = score+200;
        particle=null;
      }else if(particle.body.position.x<=407){
        score = score+100;
        particle=null;
      }else if(particle.body.position.x<=487){
        score = score+100;
        particle=null;
      }else if(particle.body.position.x<=567){
        score = score+200;
        particle=null;
      }else if(particle.body.position.x<=647){
        score = score+400;
        particle=null;
      }else if(particle.body.position.x<=727){
        score = score+800;
        particle=null;
      }else if(particle.body.position.x<=807){
        score = score+1600;
        particle=null;
      }

    }

   }

  if(count===5){
    gameState = END;
  }

  if(gameState === END){
    textSize(100);
    fill("blue");
    text("Game Over!", 100,400);
  }

  Engine.update(engine);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   //console.log(mouseX);

}

function mousePressed()
{
  if(gameState===PLAY)
  {
    count++;
    particle = new Particle(mouseX, 10,10);
  }
}

