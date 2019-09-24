import {addScore, getScore} from '../states/store'

/// <reference path="../config/index.ts" />
export class ScoreBoard extends Entity {

  score: number = 0
  board1: ScoreBoard
  board2: ScoreBoard
  board3: ScoreBoard
  board4: ScoreBoard
  
  constructor() {
    super()
    engine.addEntity(this)
  }

  addScore(): void {
    addScore()
    this.score = getScore()
    this.refresh()
  }

  init(parent: Entity): void {
    this.board1 = new ScoreBoard()
    this.board1.addComponent(new Transform({ position: new Vector3(3, 3, 0), rotation: Quaternion.Euler(0, 90, 0), scale: new Vector3(0.5, 0.5, 0.5) }))
    this.board1.addComponent(new TextShape(this.score.toString()))
    this.board1.setParent(parent)
    this.board2 = new ScoreBoard()
    this.board2.addComponent(new Transform({ position: new Vector3(0, 3, 3), scale: new Vector3(0.5, 0.5, 0.5) }))
    this.board2.addComponent(new TextShape(this.score.toString()))
    this.board2.setParent(parent)
    this.board3 = new ScoreBoard()
    this.board3.addComponent(new Transform({ position: new Vector3(0, 3, -3), rotation: Quaternion.Euler(0, 180, 0), scale: new Vector3(0.5, 0.5, 0.5) }))
    this.board3.addComponent(new TextShape(this.score.toString()))
    this.board3.setParent(parent)
    this.board4 = new ScoreBoard()
    this.board4.addComponent(new Transform({ position: new Vector3(-3, 3, 0), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(0.5, 0.5, 0.5) }))
    this.board4.addComponent(new TextShape(this.score.toString()))
    this.board4.setParent(parent)
  }

  refresh(): void {
    this.board1.getComponent(TextShape).value = this.score.toString()
    this.board2.getComponent(TextShape).value = this.score.toString()
    this.board3.getComponent(TextShape).value = this.score.toString()
    this.board4.getComponent(TextShape).value = this.score.toString() 
  }
}