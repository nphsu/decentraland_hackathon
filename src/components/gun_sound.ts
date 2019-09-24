import { addScore, getScore, addTempEntity } from '../states/store'

/// <reference path="../config/index.ts" />
export class GunSound extends Entity {

  constructor() {
    super()
    engine.addEntity(this)
    const clip = new AudioClip('sounds/gun.mp3')
    const source = new AudioSource(clip)
    this.addComponent(source)
    source.playOnce()
  }
}