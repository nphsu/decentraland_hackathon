import { addScore, getScore, addTempEntity } from '../states/store'

/// <reference path="../config/index.ts" />
export class InitialExplain extends Entity {

  constructor() {
    super()
    engine.addEntity(this)
    this.addComponent(new Transform({
      position: new Vector3(0, 1.8, 0.5),
      scale: new Vector3(0.1, 0.1, 0.1)
    }))
    this.addComponent(new TextShape(
      '<- Find a trigger \n to open a gate'
    ))
  }
}