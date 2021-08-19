var hourhand;
var minutehand;
var secondhand;
var secondangle;
var minuteangle;
var hourangle;









function setup() {
  createCanvas(800,400);
  angleMode (DEGREES);
}

function draw() {
  


  background(255,255,255);  
  drawSprites();
  translate(200,200)
  rotate(-90)
  




  hourhand=hour()
  minutehand=minute()
  secondhand=second()

secondangle=map(secondhand,0,60,0,360);
minuteangle=map(minutehand,0,60,0,360);
hourangle=map(hourhand%12,0,12,0,360);

push ();
rotate (secondangle);
stroke(66, 230, 245);
strokeWeight(8);
line(0,0,100,0);
pop ();

push ();
rotate (minuteangle);
stroke(66, 230, 245);
strokeWeight(8);
line(0,0,75,0);
pop ();

push ();
rotate (hourangle);
stroke(66, 230, 245);
strokeWeight(8);
line(0,0,50,0);
pop ();
}