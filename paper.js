class Paper {
    constructor(x, y, radius) {
        var options = {
            'restitution' : 0.2,
            'friction' : 1.0,
            'density' : 1.0
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius; 

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position; 

        push(); 
        fill("yellow"); 
        translate(pos.x, pos.y); 
        ellipseMode(RADIUS); 
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}