export class Corridor extends Entity {
  constructor() {
    super()
    engine.addEntity(this)
    this.addComponent(new Transform({ position: new Vector3(21, 10, 7.5) }))
    this.addComponent(new GLTFShape("models/corridor.glb"))    
  }
}