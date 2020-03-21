var express = require("express");
var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio (petición, resultado) {
  resultado.send("Este es el <strong> Home </strong>.")
}
function cursos (petición, resultado) {
  resultado.send("Este son los <strong> cursos </strong>.")
}

aplicacion.listen(8989);
