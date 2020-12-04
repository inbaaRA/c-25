class dustbin{
    constructor(x,y,width,height){
        var box_options ={
            isStatic:true,
            friction: 1
        }
        this.body = Bodies.rectangle(x,y,width,height,box_options);
        this.width = width;
        this.height = height;
    
        World.add(world,this.body);
    
    }
    display(){
        var pos = this.body.position;
        push();
        fill("green");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    pop();
    }
    
    }