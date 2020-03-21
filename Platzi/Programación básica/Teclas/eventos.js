document.addEventListener("click", dibujarTeclado);
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};


function dibujarTeclado (evento) {
  console.log(evento.clientX);
  console.log(evento.clientY);

  switch (evento.keyCode) {
    case teclas.UP: console.log("Arriba")
    break;
    case teclas.DOWN: console.log("Abajo")
    break;
    case teclas.LEFT: console.log("Izquieda")
    break;
    case teclas.RIGHT: console.log("Derecha")
    break;
    }
  }
