/// <reference path="../config/index.ts" />
import { Literal } from '../sequences/index'
import utils from "../../node_modules/decentraland-ecs-utils/index"

export class RedPhoton extends Entity  {
  constructor(position: Vector3) {
    super()
    engine.addEntity(this)
    this.addComponent(new Transform({ position: position }))
    this.addComponent(new GLTFShape("models/photon_red.glb"))
  }

  static buildInitArray(length: number): RedPhoton[] {
    let redPhoton: RedPhoton[] = new Array()
    for (let i = 0; i < length; i++) {
      redPhoton.push(new RedPhoton(Vector3.Zero()))
    }
    return redPhoton
  }

  static buildTrigger(): RedPhoton {
    const redTrigger = new RedPhoton(Position.defaultPhoton)
    redTrigger.addComponent(
      new OnClick(() => {
        const literal = new Literal(Position.redPhotonBase)
        const sequence = literal.buildAFrom(this.buildInitArray(15))
        engine.addSystem(new utils.ActionsSequenceSystem(sequence))
      })
    )
    return redTrigger
  }
}