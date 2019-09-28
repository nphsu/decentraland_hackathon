/// <reference path="../config/index.ts" />
export class BlackBox extends Entity {
  constructor(position: Vector3) {
    super()
    engine.addEntity(this)
    this.addComponent(new Transform({
      position: position,
      scale: new Vector3(3, 3, 3)
    }))
    this.addComponent(new GLTFShape("models/box_black.glb"))
  }
}