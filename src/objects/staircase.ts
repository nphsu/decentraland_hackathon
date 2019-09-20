/// <reference path="../config/index.ts" />
export class Staircase extends Entity {
  constructor() {
    super()
    engine.addEntity(this)
    this.addComponent(new Transform({position: Position.staircase }))
    this.addComponent(new GLTFShape("models/staircase.glb"))
  }
}