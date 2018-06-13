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
        this.$img.setAttribute('class', 'north')
        break
      case 'south':
        this.$img.setAttribute('class', 'south')
        break
      case 'east':
        this.$img.setAttribute('class', 'east')
        break
      case 'west':
        this.$img.setAttribute('class', 'west')
    }
  }
}

var alfaRomeo = new Car(carImage)

window.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'ArrowUp':
      alfaRomeo.turn('north')
      break
    case 'ArrowDown':
      alfaRomeo.turn('south')
      break
    case 'ArrowLeft':
      alfaRomeo.turn('west')
      break
    case 'ArrowRight':
      alfaRomeo.turn('east')
  }
})
