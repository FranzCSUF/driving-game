/* eslint-disable no-unused-vars */
var carImage = document.querySelector('img')

class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }
  turn(direction) {
    this.direction = direction
    switch (direction) {
      case 'north':
        this.$img.className = 'north'
        break
      case 'south':
        this.$img.className = 'south'
        break
      case 'east':
        this.$img.className = 'east'
        break
      case 'west':
        this.$img.className = 'west'
    }
  }
  move(direction) {
    switch (this.direction) {
      case 'north':
        this.location[1] -= this.speed
        break
      case 'south':
        this.location[1] += this.speed
        break
      case 'east':
        this.location[0] += this.speed
        break
      case 'west':
        this.location[0] -= this.speed
    }
    this.$img.setAttribute('style', 'top:' + this.location[1] + 'px ; left:' + this.location[0] + 'px')
  }
}

var alfaRomeo = new Car(carImage, 50, 'north', [50, 50])

window.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'ArrowUp':
      alfaRomeo.turn('north')
      alfaRomeo.move('north')
      break
    case 'ArrowDown':
      alfaRomeo.turn('south')
      alfaRomeo.move('south')
      break
    case 'ArrowLeft':
      alfaRomeo.turn('west')
      alfaRomeo.move('west')
      break
    case 'ArrowRight':
      alfaRomeo.turn('east')
      alfaRomeo.move('east')
  }
})
