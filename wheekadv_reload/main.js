import './style.css'
import getMousePos from './utils/getMousePos'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight


class Piggy {
  x = 0;
  y = 0;
  width = 50;
  height = 50;
  velocity = 1;
  speedx = 1;
  speedy = 1;
  image = new Image();

  constructor (name, velocity) {
    console.log('wheek wheek a new piggy is born and its ' + name)
    this.velocity = velocity
    this.speedx = this.velocity
    this.speedy = this.velocity
  }

  animate () {
    ctx.drawImage(this.image, this.x, this.y, this.height, this.width)

    this.x += this.speedx
    this.y += this.speedy
  
    if ( this.y + this.height >= canvas.height) {
      this.speedy = -this.velocity
    }
    if ( this.x + this.width >= canvas.width) {
      this.speedx = -this.velocity
    }
    if (this.y <= 0)
    {
      this.speedy = this.velocity
    }
    if ( this.x <= 0) {
      this.speedx = this.velocity
    }
  }
}

const piggies = []

for (let index = 0; index < 10; index++) {
  const piggy = new Piggy('piggy' + index, 3)
  piggy.image.src = 'britney.png'
  piggy.x = 10 + (index * 20);
  piggy.y = 20 + (index * 20);
  piggy.velocity = 1 + index;
  
  piggies.push(piggy)
}

function animate_player1() {
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#fff'
 
  for (const piggy of piggies) {
    piggy.animate()
  }

  console.log('mouse is at:', getMousePos(canvas))
  
  requestAnimationFrame(animate_player1)
}

animate_player1()