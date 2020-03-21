var jf = require ("johnny-Five");
var circuito = new jf.Board();   // se crea unun objeto de tipo board de Johnny five

circuito.on("ready", prender); //cuando circuito esta prendido, lanza función prender

function prender () {
  var led = new jf.Led(13); //acá se crea un objeto de tipo LED en JF
  led.blink(500); //función lista del objeto LED. Parpadeo.
  var ledRojo = new jf.Led(9); //nuevo led conectado en la
  ledRojo.blink(300);
  console.log("hola mama") // al ajecutar el archivo en la consola, muestra el mensaje.
}
