class Fuel{
    constructor(x,y){
        var options = {
            isStatic : true,
            restitution : 0.7            
        }
        this.body = Bodies.rectangle(x,y,20,20,options);
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(pos.x, pos.y,20,20);
    }
}