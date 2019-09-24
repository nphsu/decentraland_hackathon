/// <reference path="../config/index.ts" />
import utils from "../../node_modules/decentraland-ecs-utils/index"
import { ActionsSequenceSystem } from "../../node_modules/decentraland-ecs-utils/actionsSequenceSystem/actionsSequenceSystem";

export class CountdownAction implements ActionsSequenceSystem.IAction {
  alreadyStarted: boolean = false
  hasFinished: boolean = false
  startTime: number

  constructor(time: number) {
    this.startTime = time
  }

  //Method when action starts
  onStart(): void {
    if (this.alreadyStarted) {
      return
    }
    this.alreadyStarted = true
    const countdownText = new Entity()
    engine.addEntity(countdownText)
    countdownText.addComponent(new Transform({ position: Position.countdownBoard, scale: new Vector3(2,2,2), rotation: Quaternion.Euler(0, 90, 0) }))
    countdownText.addComponent(new TextShape(this.startTime.toString()))
    countdownText.addComponent(new utils.Interval(1000, (): void => {
      this.startTime--
      if (this.startTime < 0) {
        this.hasFinished = true
        countdownText.removeComponent(utils.Interval)
        countdownText.addComponentOrReplace(new TextShape("GO"))
        countdownText.addComponent(new utils.Delay(2000, () => {
          countdownText.addComponentOrReplace(new TextShape(""))
        }))
      } else {
        countdownText.getComponent(TextShape).value = this.startTime.toString()
      }
    }))
  }
  //Method to run on every frame
  update(dt: number): void {
  }
  //Method to run at the end
  onFinish(): void {
  }
}