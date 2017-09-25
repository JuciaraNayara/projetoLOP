// Mova seu mouse na janela ao lado 
// para ver o processing em ação
var x = 100;
var y = 100;
function setup() {
  createCanvas(400,400);
}

function draw() {
  
  background(0);
  fill(75,0,130);
  
  if (keyIsDown(37))
    x-=5;

  if (keyIsDown(39))
    x+=5;

  if (keyIsDown(38))
    y-=5;

  if (keyIsDown(40))
    y+=5;
	
   ellipse(x,y, 40, 40);

  
  fill(255,0,255);
  rect(100, 180, 55, 55);
  
}
