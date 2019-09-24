/// <reference path="../config/index.ts" />
export class ScoreBoard extends Entity {

  score: number = 0

  constructor() {
    super()
    engine.addEntity(this)
  }

  addScore(): void {
    this.score++
  }

  init(parent: Entity): void {
    const board1 = new ScoreBoard()
    board1.addComponent(new Transform({ position: new Vector3(3, 3, 0), rotation: Quaternion.Euler(0, 90, 0), scale: new Vector3(0.5, 0.5, 0.5) }))
    board1.addComponent(new TextShape(this.score.toString()))
    board1.setParent(parent)
    const board2 = new ScoreBoard()
    board2.addComponent(new Transform({ position: new Vector3(0, 3, 3), scale: new Vector3(0.5, 0.5, 0.5) }))
    board2.addComponent(new TextShape(this.score.toString()))
    board2.setParent(parent)
    const board3 = new ScoreBoard()
    board3.addComponent(new Transform({ position: new Vector3(0, 3, -3), rotation: Quaternion.Euler(0, 180, 0), scale: new Vector3(0.5, 0.5, 0.5) }))
    board3.addComponent(new TextShape(this.score.toString()))
    board3.setParent(parent)
    const board4 = new ScoreBoard()
    board4.addComponent(new Transform({ position: new Vector3(-3, 3, 0), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(0.5, 0.5, 0.5) }))
    board4.addComponent(new TextShape(this.score.toString()))
    board4.setParent(parent)
  }
}