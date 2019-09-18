export class GreenPhoton extends Entity {
  constructor(position: Vector3) {
    super()
    engine.addEntity(this)
    this.addComponent(new Transform({ position: position}))
    this.addComponent(new GLTFShape("models/photon_green.glb"))
  }
}