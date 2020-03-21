var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var x,y;
var vaca = {
  url: "vaca.webp",
  cargaOk: false
};
var cerdo = {
  url: "cerdo.webp",
  CargaOk: false
};
var pollo ={
  url: "pollo.webp",
  cargaOk: false
};
var fondo = {
  url:"tile.webp",
  cargaOk:false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargarPollos);


function dibujar (posx,posy){
  if (fondo.cargaOk){
    papel.drawImage(fondo.imagen,0,0);
  }
  if (vaca.cargaOk){
    x = aleatorio(0,450);
    y = aleatorio(0,450);
    papel.drawImage(vaca.imagen,x,y);
  }
  if (cerdo.cargaOk){
    x = aleatorio(0,450);
    y = aleatorio(0,450);
    papel.drawImage(cerdo.imagen,x,y);
  }
  if (pollo.cargaOk){
    x = aleatorio(0,450);
    y = aleatorio(0,450);
    papel.drawImage(pollo.imagen,x,y);
  }
}

function cargarFondo(){
  fondo.cargaOk = true;
  dibujar();
}
function cargarVacas(){
  vaca.cargaOk = true;
  dibujar();
}
function cargarCerdos(){
  cerdo.cargaOk = true;
  dibujar();
}
function cargarPollos(){
  pollo.cargaOk = true;
  dibujar();
}

function aleatorio (min, max) {
  var resultado;
  resultado = Math.floor(Math.random()*(max - min +1))+ min;
  return resultado;
}
