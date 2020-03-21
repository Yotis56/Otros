var d = document.getElementById("money");
var boton = document.getElementById("boton");
boton.addEventListener("click", entregarDinero);
var r = document.getElementById("resultado"); //parrafo vacío para el resultado.
var restante = document.getElementById("restante");
var caja = [];
var entregado = [];
var imagenes = [];
var total = 0;

  imagenes[5] = "5 dollar.jpg";
  imagenes[10] = "10 dollar.jfif";
  imagenes[20] = "20 dollar.jpg";
  imagenes[50] = "50 dollar.jpg";
  imagenes[100] = "100 dollar.jpg";


class Billete {
  constructor(v, c) {
    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;
    this.imagen.src = imagenes[this.valor];
  }
  mostrar () {
    r.innerHTML +=  "<li> Billetes de " + this.valor + " dolares: " + this.cantidad + "<br />";
    for (var i = 0; i< this.cantidad; i++) {
      r.innerHTML +=  '<img style="margin-right: 5px;" src="' + imagenes[this.valor] + '" width = "125px">';
    }
    r.innerHTML += "</li>"
  }
}

caja.push(new Billete (100,5));
caja.push(new Billete (50,10));
caja.push(new Billete (20,5));
caja.push(new Billete (10,10));
caja.push(new Billete (5,5));

for (var p of caja) {
  total = total + (p.valor * p.cantidad);} //calcula el total

function entregarDinero () {
  var dinero = parseInt(d.value);
  var x, i;
  if (dinero > total) {
    window.alert("No tenemos todo ese dinero. SORRY!");
    return;} //comprobación de que haya dinero suficiente
  if (dinero % (caja[(caja.length -1)].valor) > 0 ) {
    window.alert ("No te podemos entregar esa cantidad. Verifica que la cantidad se un multiplo de " + caja[(caja.length -1)].valor +" dólares");
     return;
   }
  i = 0;
  for (var z of caja){
    x = Math.floor(dinero/z.valor);
    if (x <= z.cantidad) {
      entregado[i] = new Billete (z.valor, x);
    } else {
      entregado[i]= new Billete (z.valor, z.cantidad);
    }
    dinero = dinero - (entregado[i].valor *entregado[i].cantidad);
    i++;
  }
  if (dinero > 0) {
    window.alert("lo sentimos, no es posible darle la cantidad solicitada");
    return;
  } // mira si faltó dinero
  for (var value of entregado) {
    if (value.cantidad > 0){
      value.mostrar();
    }
  } //mostrar cada elemento
  calcRestante(caja, entregado);
}

function calcRestante (orig,out){
  if (orig.length != out.length){
    window.alert("ERROR!");
    return;
  }
  for (var j =0; j< orig.length; j++) {
    orig[j].cantidad -= out[j].cantidad;
  }
}
