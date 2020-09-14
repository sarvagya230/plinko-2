var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles;
var count=0;
var turn=0
var plinkos = [];
var divisions =[];
var gamestate=0;
var score1=score2=score3=score4=score5=score6=score7=score8=score9=score10=0
var t=0
var divisionHeight=300;
var score =0;
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
    
       plinkos.push(new Plinko(j,75));
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
  text("score: "+score,50,50)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();

  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
    // particles.push(new Particle(random(width/2-60, width/2+60), 10,10));
    //score++
     
   }
   if(particles!=undefined)
   {
   particles.display()
   }
   if(count>=6)
   {
    particles=null
    push()
    textSize(32)
    text("GAME OVER",200,250)
    pop()
   }
   if(particles!=null)
   {
     if(particles.body.position.y>470)
     {
       
       if (particles.body.position.x<80)
       {
         score1=score1+500
       }
       else if (particles.body.position.x>80&&particles.body.position.x<180)
       {
         score2=score2+100
       }
       else if (particles.body.position.x>180&&particles.body.position.x<280)
       {
         score3=score3+100
       }
       else if (particles.body.position.x>280&&particles.body.position.x<380)
       {
         score4=score4+100
       }
       else if (particles.body.position.x>380&&particles.body.position.x<480)
       {
         score5=score5+100
       }
       else if (particles.body.position.x>480&&particles.body.position.x<580)
       {
         score5=score5+100
       }
       else if (particles.body.position.x>580&&particles.body.position.x<680)
       {
         score6=score6+500
       }
       particles=null

     }
   }
    
 
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   fill(255)
    text(score1,40,500)
    text(score2,150-40,500+10)
    text(score3,320-130,500+10)
    text(score4,400-130,500+10)
    text(score5,500-150,500+10)
    text(score6,600-160,500+10)
    text(score7,700-190,500+10)
    text(score8,800-200,500+10)
    text(score9,800-50,500+10)
    text(score10,700-30,500+10)
    push()
    strokeWeight(5)
    stroke("yellow")
    line(0, 470, 900, 470);
    pop()
}
function mousePressed()
{
  if (gamestate<=4)
  count++
  particles=new Particle(mouseX,100,10)

}