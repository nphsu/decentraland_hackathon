/// <reference path="../config/index.ts" />
import { Literal } from '../sequences/index'
import utils from "../../node_modules/decentraland-ecs-utils/index"

export class SmallStar extends Entity  {
  constructor(position: Vector3) {
    super()
    engine.addEntity(this)
    this.addComponent(new Transform({ position: position }))
    this.addComponent(new GLTFShape("models/star_small.glb"))
  }
}