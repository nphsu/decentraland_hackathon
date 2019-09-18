export class Landing extends Entity {

  constructor() {
    super()
    engine.addEntity(this)
    this.addComponent(new Transform({ position: new Vector3(31, 10, 7.5) }))
    this.addComponent(new GLTFShape("models/landing.glb"))
  }
}