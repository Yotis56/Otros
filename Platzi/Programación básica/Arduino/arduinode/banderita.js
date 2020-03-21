var j = require ("johnny-five");
var circuito = new j.board();
var ledcito;
var motorcito;  //variable del servo
var celda;
var ondea;

circuito.on("ready", prender);

function prender (){
  var configuracion = {pin:"A0", freq: 50}; //configuración del sensor. se pone el pin y la frecuencia a la que funciona.

  celda = new j.Sensor(configuracion);
  ledcito = new j.Led(13);
  ledcito.on;   //prende el
  motorcito = new j.Servo(9);
  motorcito.to()

  ondear();
}

function ondear (){
  console.log("luz: " + celda.value);//para ver el valor que da el sensor de luz
  var luz = celda.value;

  if (luz>800 ){      //función que dependiendo del valor que retorna la fotocelda, sube o baja la bandera
    if (turno){   //para de verdad ondear la bandera. Se mueve en dos posiciones 90 +- 20.
      turno = 0;
      motorcito.to(70);
    } else {
      turno = 1;
      motorcito.to(110);
    }
    motorcito.to(90);
  } else {
    motorcito.to(30);
  }
  setTimeOut(ondear, 1000);// hace que la función se evalue cada 1000 mS.
}
