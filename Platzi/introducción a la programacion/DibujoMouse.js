var area = document.getElementById("area_dibujo");
var lienzo = area.getContext("2d");

document.addEventListener("mousedown", inicio);
document.addEventListener("mousemove", mover);
document.addEventListener("mouseup", parar);

var xi, yi, xf, yf;
var clic;


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle= color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function inicio (evento){
  xi = evento.layerX;
  yi = evento.layerY;
  clic = true;
}

function mover (evento){
  if (clic == true) {
    xf = evento.layerX;
    yf= evento.layerY;
    dibujarLinea("red", xi,yi,xf,yf);
    xi = xf;
    yi = yf;
  }
}
function parar (evento){
  clic = false;
}
