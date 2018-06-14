/* eslint-disable no-unused-vars */
var carImage = document.querySelector('img')
var setInt = null

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
  start() {
    setInterval(() => this.move(), 16)
  }
}

var alfaRomeo = new Car(carImage, 10, 'north', [0, 0])

window.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'ArrowUp':
      alfaRomeo.turn('north')
      alfaRomeo.move('north')
      alfaRomeo.start()
      break
    case 'ArrowDown':
      alfaRomeo.turn('south')
      alfaRomeo.move('south')
      alfaRomeo.start()
      break
    case 'ArrowLeft':
      alfaRomeo.turn('west')
      alfaRomeo.move('west')
      alfaRomeo.start()
      break
    case 'ArrowRight':
      alfaRomeo.turn('east')
      alfaRomeo.move('east')
      alfaRomeo.start()
  }
})
