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
    switch (direction) {
      case 'north':
        carImage.setAttribute('class', 'north')
        break
      case 'south':
        carImage.setAttribute('class', 'south')
        break
      case 'east':
        carImage.setAttribute('class', 'east')
        break
      case 'west':
        carImage.setAttribute('class', 'west')
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
