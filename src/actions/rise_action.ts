/// <reference path="../config/index.ts" />
import utils from "../../node_modules/decentraland-ecs-utils/index"
import { ActionsSequenceSystem } from "../../node_modules/decentraland-ecs-utils/actionsSequenceSystem/actionsSequenceSystem";
import { BluePhoton, RedPhoton, GreenPhoton } from '../particles/index'
import { Literal } from '../sequences/index'
import { MoveAction } from '../actions/move_action'

export class RiseAction implements ActionsSequenceSystem.IAction {
  hasFinished: boolean = false;
  entity: Entity
  position: Vector3
  basePosition: Vector3

  redBase: Vector3
  greenBase: Vector3
  blueTrigger: BluePhoton
  redTrigger: RedPhoton
  greenTrigger: GreenPhoton

  constructor(entity: Entity, position: Vector3, basePosition: Vector3, blueTigger: BluePhoton, redTrigger: RedPhoton, greenTrigger: GreenPhoton) {
    this.entity = entity
    this.position = position
    this.basePosition = basePosition
    this.blueTrigger = blueTigger
    this.redTrigger = redTrigger
    this.greenTrigger = greenTrigger
  }

  //Method when action starts
  onStart(): void {
    const transform = this.entity.getComponent(Transform)
    // const toPosition = new Vector3(this.basePosition.x + this.position.x, this.basePosition.y + this.position.y, this.basePosition.z + this.position.z)
    const toPosition = new Vector3(transform.position.x + 5, transform.position.y, transform.position.z)
    // Rotate entity
    this.entity.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0, 10, 0)))
    // this.entity.addComponentOrReplace(new utils.MoveTransformComponent(transform.position, toPosition, 5,
    //   () => {
    //     this.hasFinished = true
    //     this.entity.getComponent(utils.KeepRotatingComponent).stop();
    //   }))
  }
  //Method to run on every frame
  update(dt: number): void {
  }
  //Method to run at the end
  onFinish(): void {
    log('onFinish')

    const sequence = new utils.ActionsSequenceSystem.SequenceBuilder()
      .while(() => null)
      .then(new MoveAction(this.blueTrigger, new Vector3(1, 1, 1), this.basePosition))
      .endWhile()
      .then(new MoveAction(this.blueTrigger, Position.bluePhotonBase, Position.defaultPhoton))
      .then(new MoveAction(this.redTrigger, Position.redPhotonBase, Position.defaultPhoton))
      .then(new MoveAction(this.greenTrigger, Position.greenPhotonBase, Position.defaultPhoton))
    engine.addSystem(new utils.ActionsSequenceSystem(sequence))
  }
}