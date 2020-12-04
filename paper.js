class Paper
{
constructor(x,y,r)
{
    var options={

        restitution: 0.1,
        friction: 1,
        density: 1

    }
    this.paper1 = loadImage("paper.png");
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x,this.y,this.r/2,options);
    World.add(world,this.body);
  }
display()
{
var paperpos=this.body.position;
push();

translate(paperpos.x,paperpos.y);
imageMode(CENTER);
image(this.paper1,0,0,this.r,this.r);
pop();
}

}