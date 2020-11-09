/* jugador y sus funciones mover, perderVida, doblar */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,


}


Jugador.mover = function(x1,y1){
  this.x=x1;
  this.y=y1;
}

Jugador.perderVidas= function(cantVidas){
  this.vidas=this.vidas-cantVidas;
}

Jugador.doblarIzquierda = function()
{
  this.sprite= 'imagenes/auto_rojo_izquierda.png';
  this.ancho=30;
  this.alto=15;

}

Jugador.doblarArriba = function()
{
  this.sprite= 'imagenes/auto_rojo_arriba.png';
    this.ancho=15;
    this.alto=30;

}
Jugador.doblarDerecha = function()
{
  this.sprite= 'imagenes/auto_rojo_derecha.png';
  this.ancho=30;
  this.alto=15;

}

Jugador.doblarAbajo = function()
{
  this.sprite= 'imagenes/auto_rojo_abajo.png';
  this.ancho=15;
  this.alto=30;

}
