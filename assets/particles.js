export default function particlele(settings) {
  let target = settings.target || "particles"
  let particleColor = convertHex(settings.particleColor) || "0, 0, 0"
  let particleConnectColor =
    convertHex(settings.particleConnectColor) || "0, 0, 0"
  let particleConnectWidth = settings.particleConnectWidth || 0.1
  let particleConnectRadius = settings.particleConnectRaidus || 200
  let particleConnectDistance = settings.particleConnectDistance || 100

  function convertHex(hex) {
    if (hex) {
      hex = hex.replace("#", "")
      let r = parseInt(hex.substring(0, 2), 16)
      let g = parseInt(hex.substring(2, 4), 16)
      let b = parseInt(hex.substring(4, 6), 16)
      return r + ", " + g + ", " + b
    }
    return false
  }

  const canvas = document.getElementById(target)
  const ctx = canvas.getContext("2d")

  let nb = 0
  let particleArray = []
  let mouseX
  let mouseY

  const animate = animateParticles()
  createParticles(animate)
  detectMouse()
  detectResize()

  function Particle(radius, x, y, vx, vy) {
    this.radius = radius
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
  }

  Particle.prototype.update = function() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    ctx.fillStyle = "rgb(" + particleColor + ")"
    ctx.fill()

    if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx
    if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy

    this.x += this.vx
    this.y += this.vy

    for (let i = 0; i < nb; i++) {
      const that = particleArray[i]
      const location = Math.sqrt(
        Math.pow(this.x - mouseX, 2) + Math.pow(this.y - mouseY, 2)
      )
      const distance = Math.sqrt(
        Math.pow(this.x - that.x, 2) + Math.pow(this.y - that.y, 2)
      )
      const connectOpacity = 1 - distance / particleConnectDistance

      if (
        location <= particleConnectRadius &&
        distance <= particleConnectDistance
      ) {
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(that.x, that.y)
        ctx.strokeStyle =
          "rgba(" + particleConnectColor + "," + connectOpacity + ")"
        ctx.lineWidth = particleConnectWidth
        ctx.stroke()
      }
    }
  }

  function createParticles(animate) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    nb = Math.round(canvas.width * canvas.height * (2 / 10000))
    particleArray = []

    for (let i = 0; i < nb; i++) {
      const radius = Math.random()
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const vx = -0.5 + Math.random()
      const vy = -0.5 + Math.random()

      const createParticle = new Particle(radius, x, y, vx, vy)
      particleArray.push(createParticle)
    }

    if (animate) animate
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < nb; i++) {
      let particle = particleArray[i]
      particle.update()
    }

    window.requestAnimationFrame(() => {
      drawParticles()
    })
  }

  function animateParticles() {
    window.requestAnimationFrame(() => {
      drawParticles()
    })
  }

  function detectMouse() {
    canvas.addEventListener("mousemove", canvasPosition => {
      mouseX = canvasPosition.pageX
      mouseY = canvasPosition.pageY - window.scrollY
    })
  }

  function detectResize() {
    let documentWidth = document.body.clientWidth
    let documentHeight = document.body.clientHeight

    window.addEventListener("resize", () => {
      if (
        documentWidth !== document.body.clientWidth ||
        documentHeight !== document.body.clientHeight
      ) {
        documentWidth = document.width
        documentHeight = document.height
        createParticles()
      }
    })
  }
}
