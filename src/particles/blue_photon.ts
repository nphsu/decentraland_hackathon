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

  static buildTrigger(): BluePhoton {
    const blueTrigger = new BluePhoton(Position.defaultPhoton)
    blueTrigger.addComponent(new AudioSource(new AudioClip("../sounds/shot1.mp3")))
    blueTrigger.addComponent(
      new OnClick(() => {
        log('click')
        const source = blueTrigger.getComponent(AudioSource)
        source.loop = true
        source.playing = true
        log(source) // TODO: confirm souding

        const literal = new Literal(Vector3.Zero())
        // const sequence = literal.buildAFrom(this.buildInitArray(15))
        const sequence = literal.buildCover(this.buildInitArray(100))
        engine.addSystem(new utils.ActionsSequenceSystem(sequence))
      })
    )  
    return blueTrigger
  }
}
