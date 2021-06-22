class Launcher{
    construcutor(body,anchor){
        var options={
            bodyA:body,
            pointB:anchor,
            stifness:0.04,
            length:1
        }
     //   this.launcher=loadImage("images/boy.png")

        this.bodyA=body
        this.pointB=anchor
       this.launcher=Constraint.create(options)
    World.add(world,this.launcher)
    }
    fly(){
        this.launcher.bodyA=null
    }

    attach(body){
        this.launcher.bodyA=body
    }

    display(){
      
        if(this.launcher.bodyA){
            var pointA=this.bodyA.position
            var pointB=this.pointB;
            strokeWeight(0)
            line(pointA.x,pointA.y,pointB.x,pointB.y)
           /* push();
            if(pointA.x < 220){
                strokeWeight(7);
                line(pointA.x,pointA.y,pointB.x,pointB.y)
                image(this.launcher,pointA.x-30,pointb.y-10,15,20)
            }else{
                    strokeWeight(7);
                    line(pointA.x,pointA.y,pointB.x,pointB.y)
                    image(this.boy1,pointA.x-30,pointb.y-10,15,20)
                }
                pop();*/
            }
        }
    }

    