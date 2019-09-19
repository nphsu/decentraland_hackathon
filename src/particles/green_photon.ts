export class GreenPhoton extends Entity  {
  constructor(position: Vector3) {
    super()
    engine.addEntity(this)
    this.addComponent(new Transform({ position: position }))
    this.addComponent(new GLTFShape("models/photon_green.glb"))
  }

  static buildInitArray(length: number): GreenPhoton[] {
    let greenPhoton: GreenPhoton[] = new Array()
    for (let i = 0; i < length; i++) {
      greenPhoton.push(new GreenPhoton(Vector3.Zero()))
    }
    return greenPhoton
  }
}