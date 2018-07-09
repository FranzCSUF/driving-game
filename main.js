/* eslint-disable no-unused-vars */
var carImage = document.querySelector('img')
var setInt = null

class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
    this.isRunning = false
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
    this.$img.style = 'top:' + this.location[1] + 'px ; left:' + this.location[0] + 'px'
  }
  start() {
    setInt = setInterval(() => this.move(), 16)
  }
  stop() {
    clearInterval(setInt)
  }
}

var alfaRomeo = new Car(carImage, 10, 'north', [0, 0])

document.addEventListener('keydown', function () {
  if (event.key === ' ') {
    if (this.isRunning === false) {
      alfaRomeo.start()
      this.isRunning = true
    }
    else {
      alfaRomeo.stop()
      this.isRunning = false
    }
  }
})

document.addEventListener('keydown', function () {
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
