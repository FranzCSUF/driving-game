/* eslint-disable no-unused-vars */
var $img = document.querySelector('img')

class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }
}
