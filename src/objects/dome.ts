/// <reference path="../config/index.ts" />
export class Dome extends Entity {
  constructor() {
    super()
    engine.addEntity(this)
    this.addComponent(new Transform({position: Position.dome }))
    this.addComponent(new GLTFShape("models/dome.glb"))
  }
}