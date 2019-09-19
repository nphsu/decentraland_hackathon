import utils from "../../node_modules/decentraland-ecs-utils/index"
import { ActionsSequenceSystem } from "../../node_modules/decentraland-ecs-utils/actionsSequenceSystem/actionsSequenceSystem";

import { MoveAction } from '../actions/index'
import { BluePhoton } from '../particles/index'

export class Literal {
  basePosition: Vector3

  constructor(basePosition: Vector3) {
    this.basePosition = basePosition
  }

  buildAFrom(photons: BluePhoton[]): ActionsSequenceSystem.SequenceBuilder {
    const sequence = new utils.ActionsSequenceSystem.SequenceBuilder()
      .while(() => null)
      .then(new MoveAction(photons[0], new Vector3(1, 0, 1), this.basePosition))
      .endWhile()
      .then(new MoveAction(photons[1], new Vector3(2, 1, 1), this.basePosition))
      .then(new MoveAction(photons[2], new Vector3(2, 2, 1.5), this.basePosition))
      .then(new MoveAction(photons[3], new Vector3(2, 3, 2), this.basePosition))
      .then(new MoveAction(photons[4], new Vector3(2, 4, 2.5), this.basePosition))
      .then(new MoveAction(photons[5], new Vector3(2, 3, 2.5), this.basePosition))
      .then(new MoveAction(photons[6], new Vector3(2, 5, 3), this.basePosition))
      .then(new MoveAction(photons[7], new Vector3(2, 4, 3.5), this.basePosition))
      .then(new MoveAction(photons[8], new Vector3(2, 3, 3.5), this.basePosition))
      .then(new MoveAction(photons[9], new Vector3(2, 3, 4), this.basePosition))
      .then(new MoveAction(photons[10], new Vector3(2, 2, 4.5), this.basePosition))
      .then(new MoveAction(photons[11], new Vector3(2, 1, 5), this.basePosition))
    return sequence
  }
  
}