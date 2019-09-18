export class RedPhoton extends Entity implements Photon {
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
}