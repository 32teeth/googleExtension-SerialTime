import java.util.*;

/*
	Shapes
*/
PShape svg;
PShape seconds;
PShape minutes;
PShape hours;

/*
	Font
*/
font = loadFont("FFScala.ttf");

/*
	dimensions, sizes, offsets
*/
int dimensions[2] = {
	256,	// width
	256		// height
};
int width = dimensions[0];
int height = dimensions[1];

/*

*/
int s;
int m;
int h;

float sRad; 
float mRad; 
float hRad;

int st;

/*
	colors
*/
color red = color(153,0,0);
color gray = color(153,153,153);
color black = color(0,0,0);
color white = color(255,255,255);


void setup()
{
	background(gray, 25);
	size(width, height);
	smooth();
}

void draw()
{
	background(gray, 25);
	clock();
	time();	
}

void time()
{
	s = second();
  m = minute();
  h = hour();

  sRad = 360 / 60 * s;
  mRad = 360 / 60 * m;
  hRad = 360 / 12 * h;

  /*
	fill(black);
	textFont(font); 
	text(h + ":" + m + ":" + s, 15, 30); 
	*/
}

void clock()
{
	background(white);
	translate(width / 2, height / 2);

	/*
		face
	*/
	st = 20;
	stroke(black);
	strokeWeight(st);
	ellipse(0, 0, width-st, height-st);

	/*
		seconds
	*/
	st = 10;
	stroke(red);
  strokeWeight(st);
  pushMatrix();
  rotate(radians(sRad));
  line(0, 0, 0, -90);
  popMatrix();	

	/*
		minutes
	*/
	st = 16;
	stroke(gray);
  strokeWeight(st);
  pushMatrix();
  rotate(radians(mRad));
  line(0, 0, 0, -70);
  popMatrix();	  

	/*
		hours
	*/
	st = 20;
	stroke(black);
  strokeWeight(st);
  pushMatrix();
  rotate(radians(hRad));
  line(0, 0, 0, -45);
  popMatrix();	    
}