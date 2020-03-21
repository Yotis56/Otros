class Pakiman {
  constructor(nom,stam,atta) {
    this.imagen = new Image();
    this.nombre = nom;
    this.vida = stam;
    this.ataque = atta;
    this.imagen.src = imagenes[this.nombre];
  }
  hablar () {
    alert(this.nombre);
  }
  mostrar(){
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("<strong>" + this.nombre + "</strong> <br />");
    document.write("Vida: " + this.vida + "<br />");
    document.write("Ataque: " + this.ataque + "<br />");
    document.write("</p>" + "<hr />");
  }
}
