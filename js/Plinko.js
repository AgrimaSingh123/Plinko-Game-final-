class Plinko{
    constructor(x,y){
        var options={
            'isStatic':true,
            'resitution':1,
            'friction':0
        }
        this.r=10;
        this.body=Bodies.circle(x,y,this.r,options);

        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("white");
        noStroke();
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r);
    }
}