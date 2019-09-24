import utils from "../../node_modules/decentraland-ecs-utils/index"
import { ActionsSequenceSystem } from "../../node_modules/decentraland-ecs-utils/actionsSequenceSystem/actionsSequenceSystem";
import { getScore, saveRecord, getRecords, deleteAllEntities, getTempEntites } from "../states/store";
import { RecordBoardText } from "../components/index";

export class CalculatingResultAction implements ActionsSequenceSystem.IAction {
  hasFinished: boolean = false;
  entity: Entity
  position: Vector3
  basePosition: Vector3
  duration: number

  constructor(entity: Entity, position: Vector3, basePosition: Vector3, duration = 0.1) {
    this.entity = entity
    this.position = position
    this.basePosition = basePosition
    this.duration = duration
  }

  //Method when action starts
  onStart(): void {
    log("start move action")
    const finalScore = getScore()
    const records = getRecords()
    if (records.length === 0) {
      // Fireworks
      log('This is a first record!')
    } else {
      const maxScore = getRecords().reduce((a, b) => Math.max(a, b))
      if (maxScore < finalScore) {
        // Fireworks
        log('This is a max record!')
      }
    }
    const recordBoardText = new RecordBoardText()
    recordBoardText.saveRecord(finalScore)

    const transform = this.entity.getComponent(Transform)
    const toPosition = new Vector3(this.basePosition.x + this.position.x, this.basePosition.y + this.position.y, this.basePosition.z + this.position.z)
    this.entity.addComponentOrReplace(new utils.MoveTransformComponent(transform.position, toPosition, this.duration,
      () => {
        this.hasFinished = true
      }))
  }
  //Method to run on every frame
  update(dt: number): void {
  }
  //Method to run at the end
  onFinish(): void {
    // TODO: doen't work
    log('onFinish: CalculatingResultAction')
    const entites = getTempEntites()
    log(entites)
    deleteAllEntities()
    const entites2 = getTempEntites()
    log(entites2)
  }
}