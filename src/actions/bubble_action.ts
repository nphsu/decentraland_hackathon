/// <reference path="../config/index.ts" />
import utils from "../../node_modules/decentraland-ecs-utils/index"
import { ActionsSequenceSystem } from "../../node_modules/decentraland-ecs-utils/actionsSequenceSystem/actionsSequenceSystem";
import { BluePhoton } from "../particles/index";
import { ScoreBoard } from "../components/index";

export class BubbleAction implements ActionsSequenceSystem.IAction {
  hasFinished: boolean = false
  scoreBoard: ScoreBoard
  limitTimeSec: number = 0
  currentTimeSec: number = 0
  entity: Entity
  bubbles: BluePhoton[]

  constructor(scoreBoard: ScoreBoard, limitTimeSec: number) {
    this.scoreBoard = scoreBoard
    this.limitTimeSec = limitTimeSec
    this.bubbles = new Array()
  }

  //Method when action starts
  onStart(): void {
    this.entity = new Entity()
    engine.addEntity(this.entity)
    this.entity.addComponent(new utils.Interval(1000, () => {
      if (this.limitTimeSec < this.currentTimeSec) {
        log('remove all')
        this.entity.removeComponent(utils.Interval)
        engine.removeEntity(this.entity)
        this.bubbles.forEach(b => engine.removeEntity(b))
      }
      let rndX: number = Math.floor(Math.random() * 50)
      let rndY: number = Math.floor(Math.random() * 40)
      let rndZ: number = Math.floor(Math.random() * 15)
      const bubble = BluePhoton.buildBubble(new Vector3(rndX, rndY, rndZ), this.scoreBoard)
      this.bubbles.push(bubble)
      this.currentTimeSec++
    }))
  }
  //Method to run on every frame
  update(dt: number): void {
  }
  //Method to run at the end
  onFinish(): void {
  }
}