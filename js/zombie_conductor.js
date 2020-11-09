

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov,direccion) {
 
  
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccion=direccion;
}

ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;


ZombieConductor.prototype.mover = function () {
  if (this.direccion === 'v') {
      this.y = this.y + this.velocidad;
      if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
      this.velocidad *= -1;
    }
  }
  else {
    this.x = this.x + this.velocidad;
    if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)) {
      this.velocidad *= -1;
    }
  }
}

ZombieConductor.prototype.atacar = function(jugador){
  jugador.perderVidas(5);
}