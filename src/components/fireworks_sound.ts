import { addScore, getScore, addTempEntity } from '../states/store'

/// <reference path="../config/index.ts" />
export class FireworksSound extends Entity {

  constructor() {
    super()
    engine.addEntity(this)
    const clip = new AudioClip('sounds/fireworks.mp3')
    const source = new AudioSource(clip)
    this.addComponent(source)
    source.playOnce()
  }
}