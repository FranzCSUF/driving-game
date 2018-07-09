var carImage = document.querySelector('img')

class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
    this.isRunning = false
    this.interval = null
  }
  turn(direction) {
    this.direction = direction
    this.$img.classList = ''
    switch (direction) {
      case 'north':
        this.$img.classList.add('north')
        break
      case 'south':
        this.$img.classList.add('south')
        break
      case 'east':
        this.$img.classList.add('east')
        break
      case 'west':
        this.$img.classList.add('west')
    }
  }
  move() {
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
    this.interval = setInterval(() => this.move(), 16)
  }
  stop() {
    clearInterval(this.interval)
  }
}

var alfaRomeo = new Car(carImage, 10, 'north', [0, 0])

document.addEventListener('keydown', function () {
  if (event.key === ' ') {
    if (alfaRomeo.isRunning === false) {
      alfaRomeo.start()
      alfaRomeo.isRunning = true
    }
    else {
      alfaRomeo.stop()
      alfaRomeo.isRunning = false
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
