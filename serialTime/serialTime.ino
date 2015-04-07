/*
** @author Eugene Andruszczenko
** @version 0.3
** @date April 6th, 2015
*/


/*
** @description include required files
*/
#include "arduino.h"
#include <LiquidCrystal.h>
LiquidCrystal lcd(8, 9, 4, 5, 6, 7);

/*
** @param wait {long} delay between loops
** @param now {unsigned long} timestamp millis()
*/
long wait = 100;
unsigned long now;

/*
** @param
**
*/
const char *atoz = {"abcdefghijklmnopqrstuvwxyz1234567890"} ;

/*
** @method setup
** @description main arduino setup
*/
void setup()
{
	
  /*
  ** @description if CPU is defined, change the timers accordingly
  */
  #ifdef CPU
  	TCCR1B = TCCR1B & 0b11111000 | CPU;
  	TCCR1B = TCCR1B & 0b11111000 | CPU; 
  	TCCR2B = TCCR2B & 0b11111000 | CPU;		
  #endif
        
  /*
  ** @description set initial value to now
  */
  now = millis()+wait;
  
  lcd.begin(16, 2);               // start the library
  lcd.setCursor(0,0);             // set the LCD cursor   position 
  lcd.print("Push the buttons");  // print a simple message on the LCD  
}

void loop() {
  // put your main code here, to run repeatedly:

}
