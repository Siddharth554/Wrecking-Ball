// class Ball {
//   constructor(x, y, width, height, angle) {
//     var options = { 
//       density: 1, 
//       frictionAir: 0.005};

//     this.body = Bodies.rectangle(x, y, width, height, options);
//     this.width = width;
//     this.height = height;
//     World.add(world, this.body);
//   }

//   display() {
//     var angle = this.body.angle;
//     push();
//     translate(this.body.position.x, this.body.position.y);
//     rotate(angle);
//     ellipse(0, 0, this.width, this.height);
//     pop();
//   }
// }




class Ball{

  constructor(x,y,r,angle){
    this.body=Bodies.circle(x,y,r,{frictionAir: 0.005,density:1})
    this.r=r;
    World.add(world,this.body)

  }


  display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill("brown");
    strokeWeight(4);
    stroke("green");
    ellipse(0,0,this.r,this.r);
    pop();

   }





}