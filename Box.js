/*class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.04,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }
}*/



class Box{

  constructor(x,y,w,h){

    this.body=Bodies.rectangle(x,y,w,h,{restitution:0.8,friction:1.0,density:0.04});
    this.w=w;
    this.h=h;
    World.add(world,this.body);

  };


  display(){

    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    strokeWeight(4);
    stroke("green");
    rect(0,0,this.w,this.h);
    pop();

   }


}