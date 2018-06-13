/* eslint-disable no-unused-vars */
var carImage = document.querySelector('img')

class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }
  turn() {
    switch (this.direction) {
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

window.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'ArrowUp':
      carImage.setAttribute('class', 'north')
      break
    case 'ArrowDown':
      carImage.setAttribute('class', 'south')
      break
    case 'ArrowLeft':
      carImage.setAttribute('class', 'west')
      break
    case 'ArrowRight':
      carImage.setAttribute('class', 'east')
  }
})

var alfaRomeo = new Car(carImage)
