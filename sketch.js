const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var coinArray = [];
var fuelArray = [];
var score = 0;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,380,1200,20)
    player = new Player(30,300,100,100)
   
    
}

function draw(){
    background("#0c8a88");
    Engine.update(engine);

    ground.display()
    player.display()

    textSize(20)
    fill ("Green")
    text ("Score   : " + score,width-150,20)

    
  /* if( Matter.SAT.collides(player.body, ground.body).collided){
       Matter.Body.setPosition(player.body ,{x : 30,y : 360 })
   }*/
   if(frameCount % 60===0){
    coinArray.push(new Coin(random(100,800),300));
    
  }
  if(frameCount % 60===0){
    fuelArray.push(new Fuel(random(100,800),310));
    
  }
  for (var j = 0; j < coinArray.length; j++) {
    coinArray[j].display();

    if(Matter.SAT.collides(player.body, coinArray[j].body).collided){
      score = score + 1;
      World.remove(world,coinArray[j].body)
      coinArray.splice(j,1)
    }
  }
  for (var j = 0; j < fuelArray.length; j++) {
    fuelArray[j].display();
    if(Matter.SAT.collides(player.body, fuelArray[j].body).collided){
     
      World.remove(world,fuelArray[j].body)
      fuelArray.splice(j,1)
    }

  }  
  World.add(world,keyPressed)  
}

/*function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    player.move()
  }
}*/

function keyPressed(){
  /*if(keyCode === 32){
     player.jump();
   }*/
   if(keyCode === LEFT_ARROW){
      player.move(-5,0);
    }
    if(keyCode === RIGHT_ARROW){
      player.move(5,0);     
    }
    if(keyCode === DOWN_ARROW){
      player.move(0,0)
    }
}

