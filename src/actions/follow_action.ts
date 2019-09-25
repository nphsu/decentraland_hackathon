/// <reference path="../config/index.ts" />
import utils from "../../node_modules/decentraland-ecs-utils/index"
import { ActionsSequenceSystem } from "../../node_modules/decentraland-ecs-utils/actionsSequenceSystem/actionsSequenceSystem";
import { BluePhoton } from "../particles/index";
import { ScoreBoard } from "../components/index";

export class FollowAction implements ActionsSequenceSystem.IAction {
  hasFinished: boolean = false
  scoreBoard: ScoreBoard
  entity: Entity
  position: Vector3
  limitTimeSec: number = 30
  currentTimeSec: number = 0
  bubbles: BluePhoton[]

  constructor(entity: Entity, scoreBoard: ScoreBoard) {
    this.entity = entity
    this.position = entity.getComponent(Transform).position
    this.scoreBoard = scoreBoard
    this.bubbles = new Array()
  }

  //Method when action starts
  onStart(): void {
    let x = this.position.x
    let y = this.position.y
    let z = this.position.z
    let path = []
    path[0] = new Vector3(x, y, z)
    path[1] = new Vector3(x + 5, y, z + 5)
    path[2] = new Vector3(x + 5, y + 5, z + 5)
    path[3] = new Vector3(x, y + 5, z)
    path[4] = new Vector3(x - 10, y + 5, z)
    path[5] = new Vector3(x - 10, y + 10, z + 5)
    path[6] = new Vector3(x - 15, y + 5, z + 5)
    path[7] = new Vector3(x - 20, y + 10, z - 10)
    path[8] = new Vector3(x - 15, y + 5, z + 10)
    path[9] = new Vector3(x + 5, y, z)
    // path[10] = new Vector3(x+5, y, z+10)
    // path[11] = new Vector3(x+5, y-20, z+10)
    // path[12] = new Vector3(x-30, y-20, z+10)
    // path[13] = new Vector3(x-30, y-20, z-10)
    // path[14] = new Vector3(x-20, y-20, z-10)
    // path[15] = new Vector3(x+10, y-10, z-10)
    // path[16] = new Vector3(x+5, y+5, z-5)
    // path[17] = new Vector3(x, y+10, z)
    this.entity.addComponent(new utils.FollowPathComponent(path, this.limitTimeSec))

    this.entity.addComponent(new utils.Interval(1000, () => {
      if (this.limitTimeSec < this.currentTimeSec) {
        log('remove all')
        this.entity.removeComponent(utils.Interval)
        // engine.removeEntity(this.entity)
        this.bubbles.forEach(b => engine.removeEntity(b))
        this.hasFinished = true
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
    log('onFinish FollowAction')
  }
}