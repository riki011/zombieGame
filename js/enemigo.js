/* 
-sprite: contiene la ruta a la imagen que lo representa.
-x: posicion x actual del enemigo en el mapa
-y: posicion y actual del enemigo en el mapa
-ancho: el ancho del enemigo
-alto: el alto del enemigo
-velocidad: es la velocidad de movimiento, pixeles que podra moverse en cada mov
-rangoMov: los limites en el mapa donde se puede mover 
{desdeX: valor, hastaX: valor, desdeY: valor, hastaY: valor} */

var Enemigo = function (sprite, x, y, ancho, alto, velocidad, rangoMov={desdeX:valor,hastaX:valor,desdeY:valor,hastaY:valor}) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.velocidad = velocidad;
  this.rangoMov=rangoMov;
  this.atacando = false;
}

/*saca una vida al jugador.*/
Enemigo.prototype.atacar = function (jugador) {
  jugador.perderVidas(1);
}

/* Este metodo sirve para no estar atacando continuamente al jugador. Solo va a
atacar si no estaba atacando previamente*/
Enemigo.prototype.comenzarAtaque = function (jugador) {
  if (!this.atacando) {
    this.atacar(jugador);
  }
  this.atacando = true;
}
/* Cuando el enemigo no este contacto con el jugador */
Enemigo.prototype.dejarDeAtacar = function () {
  this.atacando = false;
}
