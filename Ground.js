// class Ground {
//     constructor(x,y,width,height) {
//       var options = {
//           isStatic: true
//       }
//       this.body = Bodies.rectangle(x,y,width,height,options);
//       this.width = width;
//       this.height = height;
//       World.add(world, this.body);
//     }
//     display(){
//       var pos =this.body.position;
//       rectMode(CENTER);
//       fill("brown");
//       rect(pos.x, pos.y, this.width, this.height);
//     }
//   };


class Ground{

  constructor(x,y,w,h){



    this.body=Bodies.rectangle(x,y,w,h,{isStatic: true})
    this.w=w;
    this.h=h;
    World.add(world,this.body)


  }


  display(){

    var pos=this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x,pos.y,this.w,this.h);


  }



};

