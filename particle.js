class particle
{
  constructor(x,y,r)
  {
      var options = {
          'restitution': 0.9
      }
      this.body=Bodies.circle(x,y,r,options)
      World.add(world,this.body)
      this.radius=r;
      this.colour=color(random(0,255),random(0,255),random(0,255))
  }
  display()
  {
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    fill(this.colour)
    ellipseMode(RADIUS)
    ellipse(0,0,this.radius)
    pop()
  }
}