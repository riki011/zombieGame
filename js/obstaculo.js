/* Recibe un sprite que tendra la
imagen que lo representa y una potencia indicando cuando danio que hace,
ademas de los parametros comunes x, y, ancho y alto*/
var Obstaculo = function (sprite, x, y, ancho, alto, potencia) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.potencia = potencia;
  


}

Obstaculo.Chocar = function(obstaculo){
  Jugador.perderVidas(obstaculo.potencia);
  obstaculo.potencia=0;
  console.log("choca");

}