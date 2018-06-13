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
    }
    switch (this.direction) {
      case 'south':
        carImage.setAttribute('class', 'south')
    }
    switch (this.direction) {
      case 'east':
        carImage.setAttribute('class', 'east')
    }
    switch (this.direction) {
      case 'west':
        carImage.setAttribute('class', 'west')
    }
  }
}

var alfaRomeo = new Car(carImage)
