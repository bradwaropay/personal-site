interface ParticleOptions {
  color: HexColor,
  size: number,
  velocity: number,
}

interface ConnectOptions {
  color: HexColor,
  width: number,
  distance: number,
  detectRadius: number
}

interface Options {
  backgroundColor: HexColor,
  density: number,
  particle: ParticleOptions,
  connect: ConnectOptions
}

