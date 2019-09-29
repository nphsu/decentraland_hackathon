import { addScore, getScore, addTempEntity } from '../states/store'

/// <reference path="../config/index.ts" />
export class InitialExplain extends Entity {

  constructor() {
    super()
    engine.addEntity(this)
    this.addComponent(new Transform({
      position: new Vector3(0, 1.7, 0.5),
      scale: new Vector3(0.05, 0.05, 0.05)
    }))
    this.addComponent(new TextShape(
      'FIND A TRIGGER TO OPEN A GATE \n\n FIND A HINT TO WIN A GAME \n\n\n LET\'S GET STARTED >> '
    ))
  }
}