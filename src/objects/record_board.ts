/// <reference path="../config/index.ts" />
export class RecordBoard extends Entity {
  constructor() {
    super()
    engine.addEntity(this)
    this.addComponent(new Transform({position: Position.recordBoard, scale: Scale.recordBoard }))
    this.addComponent(new GLTFShape("models/record_board.glb"))
  }
}