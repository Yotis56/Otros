var d = document.getElementById("dibujito");
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle= color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

var dimensionx = lienzo.canvas.width;

function dibujarCosito (col, x1, y1, x2, y2, salto, dirx, diry) {
  var finalizar = (300/salto)-1; //para empezar desde el centro, poner 150
  for (i =0; i<=finalizar; i++){
    dibujarLinea(col, x1,y1,x2, y2);
    if (dirx === "der") {
      if (diry === "down") {
        y1 = y1 + salto;
        x2 = x2 + salto;
      } else if (diry === "up") {
        y1 = y1 - salto;
        x2 = x2 + salto;
      }
    } else if (dirx === "izq") {
      if (diry === "down"){
        y1 = y1 + salto;
        x2 = x2 - salto;
      } else if (diry==="up"){
        y1 = y1 - salto;
        x2 = x2 - salto;
      }
    }
  }
}

function dibujoPorClick () {
  var lineas = parseInt(texto.value);
  var salto_calc = dimensionx / lineas;
  dibujarCosito("red", 0,0,0,300,salto_calc,"der", "down");
  dibujarCosito("blue", 300,300,0,300,salto_calc,"der","up");
  dibujarCosito("green", 0,0,300,0,salto_calc,"izq","down");
  dibujarCosito("yellow", 300,300,300,0,salto_calc,"izq","up");
}
