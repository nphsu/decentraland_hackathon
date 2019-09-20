/// <reference path="../config/index.ts" />
import { Literal } from '../sequences/index'
import utils from "../../node_modules/decentraland-ecs-utils/index"

export class BluePhoton extends Entity {
  constructor(position: Vector3) {
    super()
    engine.addEntity(this)
    this.addComponent(new Transform({ position: position}))
    this.addComponent(new GLTFShape("models/photon_blue.glb"))
  }

  static buildInitArray(length: number): BluePhoton[] {
    let bluePhoton: BluePhoton[] = new Array()
    for (let i = 0; i < length; i++) {
      bluePhoton.push(new BluePhoton(Vector3.Zero()))
    }
    return bluePhoton
  }

  static buildTrigger() {
    const blueTrigger = new BluePhoton(Position.bluePhotonBase)
    blueTrigger.addComponent(
      new OnClick(() => {
        const literal = new Literal(Position.bluePhotonBase)
        const sequence = literal.buildAFrom(this.buildInitArray(15))
        engine.addSystem(new utils.ActionsSequenceSystem(sequence))
      })
    )
  }
}
