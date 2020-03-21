int verde = 13;
int amarillo = 7;
int rojo = 8;
int milisegundos = 500;

void setup()
{
  pinMode(amarillo, OUTPUT);
  pinMode(rojo, OUTPUT);
  pinMode(verde, OUTPUT);
}

void loop()
{
  digitalWrite(verde, HIGH);
  digitalWrite(rojo, LOW);
  digitalWrite(amarillo, LOW);
  
  delay(milisegundos*10); // Wait for 1000 millisecond(s)
  
  digitalWrite(verde, HIGH);
  digitalWrite(amarillo, HIGH);
  digitalWrite(rojo, LOW);
  
  delay(milisegundos*4);
  
  digitalWrite(rojo, HIGH);
  digitalWrite(amarillo, LOW);
  digitalWrite(verde, LOW);
  
  delay(milisegundos*10);
  
  
  }