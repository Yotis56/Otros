document.addEventListener("keydown", moverCerdo);

var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var x,y;
var vaca = {
  url: "vaca.webp",
  carga1Ok: false,
  mover: false,
};
var cerdo = {
  url: "cerdo.webp",
  Carga1Ok: false,
  mover: false,
};
var fondo = {
  url:"tile.webp",
  cargaOk:false
};
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
var cantidad = aleatorio(1,10);
var xVacas = [cantidad];
var yVacas = [cantidad];

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);


function dibujar (){
  if (fondo.cargaOk){
    papel.drawImage(fondo.imagen,0,0);
  }
  if (vaca.mover == true && vaca.carga1Ok == true){
    for (var i = 0; i< cantidad; i++) {
      papel.drawImage(vaca.imagen,xVacas[i],yVacas[i]);
    }
  } else if(vaca.carga1Ok){
      for (var i = 0; i< cantidad; i++) {
        xVacas [i] = aleatorio(0,420);
        yVacas [i]  = aleatorio(0,420);
        papel.drawImage(vaca.imagen,xVacas[i],yVacas[i]);
        vaca.mover = true;
      }
  }
  if (cerdo.mover == true && cerdo.carga1Ok == true) {
    papel.drawImage(cerdo.imagen, x, y);
  } else if (cerdo.carga1Ok){  //falta crear condicional para mover al cerdo
    x = aleatorio(0,420);
    y = aleatorio(0,420);
    papel.drawImage(cerdo.imagen,x,y);
    cerdo.mover=true;
  }
}

function moverCerdo (evento){
  switch (evento.keyCode) {
    case teclas.UP: y = y -10;
    break;
    case teclas.DOWN: y = y +10;
    break;
    case teclas.LEFT: x = x -10;
    break;
    case teclas.RIGHT: x = x +10;
    break;
  }
  dibujar();
}

function cargarFondo(){
  fondo.cargaOk = true;
  dibujar();
}
function cargarVacas(){
  vaca.carga1Ok = true;
  dibujar();
}
function cargarCerdos(){
  cerdo.carga1Ok = true;
  dibujar();
}

function aleatorio (min, max) {
  var resultado;
  resultado = Math.floor(Math.random()*(max - min +1))+ min;
  return resultado;
}
