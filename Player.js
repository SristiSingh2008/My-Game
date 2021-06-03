class Player {
  constructor(x, y, width, height) {
    var options = {
        
        'friction':0.3,
        'density':2.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.imag = loadImage("images/plr.png")
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    image (this.imag,0,0,this.width,this.height)
    pop();
  
  }
  move(a,b){
    var pos = this.body.position;
    pos.x = pos.x + a;
    pos.y = pos.y + b;
    //console.log(pos)
}
};
