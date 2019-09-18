import utils from "../node_modules/decentraland-ecs-utils/index"
import { TriggerBoxShape } from "../node_modules/decentraland-ecs-utils/triggers/triggerSystem"
import { ActionsSequenceSystem } from "../node_modules/decentraland-ecs-utils/actionsSequenceSystem/actionsSequenceSystem";

import { Corridor, Landing } from './objects/index'
import { MoveAction } from './actions/index'
import { BluePhoton, RedPhoton } from './particles/index'
import { GreenPhoton } from "./particles/green_photon";

const blueBase = new Vector3(40, 12, 6)
let bluePhoton: BluePhoton[] = BluePhoton.buildInitArray(15)

const redBase = new Vector3(40, 12, 7.5)
let redPhoton: RedPhoton[] = RedPhoton.buildInitArray(15)


const greenBase = new Vector3(40, 12, 9)
let greenPhoton: GreenPhoton[] = GreenPhoton.buildInitArray(15)

const dome = new Entity()
dome.addComponent(new Transform({ position: new Vector3(25, 20, 7.5) }))
dome.addComponent(new GLTFShape("models/dome.glb"))
engine.addEntity(dome)

const staircase = new Entity()
staircase.addComponent(new Transform({ position: new Vector3(-10, 0, 7.5) }))
staircase.addComponent(new GLTFShape("models/staircase.glb"))
engine.addEntity(staircase)

const corridor = new Corridor()
log(corridor)

const landing = new Landing()
log(landing)


const trigger = new Entity()
engine.addEntity(trigger)
// trigger.addComponent(new Transform({ position: new Vector3(31, 10, 7.5) }))
trigger.addComponent(new Transform({ position: new Vector3(31, 10, 7.5) }))
trigger.addComponent(new utils.TriggerComponent(
  new utils.TriggerBoxShape(new Vector3(10, 10, 10), Vector3.Zero()),
  0,
  0,
  null,
  null,
  (): void => {
    const blueTrigger = new BluePhoton(blueBase)
    blueTrigger.addComponent(
      new OnClick(() => {
        const sequence = new utils.ActionsSequenceSystem.SequenceBuilder()
          .while(() => null)
          .then(new MoveAction(bluePhoton[0], new Vector3(1, 0, 1), blueBase))
          .endWhile()
          .then(new MoveAction(bluePhoton[1], new Vector3(2, 1, 1), blueBase))
          .then(new MoveAction(bluePhoton[2], new Vector3(2, 2, 1.5), blueBase))
          .then(new MoveAction(bluePhoton[3], new Vector3(2, 3, 2), blueBase))
          .then(new MoveAction(bluePhoton[4], new Vector3(2, 4, 2.5), blueBase))
          .then(new MoveAction(bluePhoton[5], new Vector3(2, 3, 2.5), blueBase))
          .then(new MoveAction(bluePhoton[6], new Vector3(2, 5, 3), blueBase))
          .then(new MoveAction(bluePhoton[7], new Vector3(2, 4, 3.5), blueBase))
          .then(new MoveAction(bluePhoton[8], new Vector3(2, 3, 3.5), blueBase))
          .then(new MoveAction(bluePhoton[9], new Vector3(2, 3, 4), blueBase))
          .then(new MoveAction(bluePhoton[10], new Vector3(2, 2, 4.5), blueBase))
          .then(new MoveAction(bluePhoton[11], new Vector3(2, 1, 5), blueBase))
        engine.addSystem(new utils.ActionsSequenceSystem(sequence))
      }
      ))
    const redTrigger = new RedPhoton(redBase)
    redTrigger.addComponent(
      new OnClick(() => {
        const sequence = new utils.ActionsSequenceSystem.SequenceBuilder()
          .while(() => null)
          .then(new MoveAction(redPhoton[0], new Vector3(1, 0, 1), redBase))
          .endWhile()
          .then(new MoveAction(redPhoton[1], new Vector3(2, 1, 1), redBase))
          .then(new MoveAction(redPhoton[2], new Vector3(2, 2, 1.5), redBase))
          .then(new MoveAction(redPhoton[3], new Vector3(2, 3, 2), redBase))
          .then(new MoveAction(redPhoton[4], new Vector3(2, 4, 2.5), redBase))
          .then(new MoveAction(redPhoton[5], new Vector3(2, 3, 2.5), redBase))
          .then(new MoveAction(redPhoton[6], new Vector3(2, 5, 3), redBase))
          .then(new MoveAction(redPhoton[7], new Vector3(2, 4, 3.5), redBase))
          .then(new MoveAction(redPhoton[8], new Vector3(2, 3, 3.5), redBase))
          .then(new MoveAction(redPhoton[9], new Vector3(2, 3, 4), redBase))
          .then(new MoveAction(redPhoton[10], new Vector3(2, 2, 4.5), redBase))
          .then(new MoveAction(redPhoton[11], new Vector3(2, 1, 5), redBase))
        engine.addSystem(new utils.ActionsSequenceSystem(sequence))
      }
      ))

    const greenTrigger = new GreenPhoton(greenBase)
    greenTrigger.addComponent(
      new OnClick(() => {
        const sequence = new utils.ActionsSequenceSystem.SequenceBuilder()
          .while(() => null)
          .then(new MoveAction(greenPhoton[0], new Vector3(1, 0, 1), greenBase))
          .endWhile()
          .then(new MoveAction(greenPhoton[1], new Vector3(2, 1, 1), greenBase))
          .then(new MoveAction(greenPhoton[2], new Vector3(2, 2, 1.5), greenBase))
          .then(new MoveAction(greenPhoton[3], new Vector3(2, 3, 2), greenBase))
          .then(new MoveAction(greenPhoton[4], new Vector3(2, 4, 2.5), greenBase))
          .then(new MoveAction(greenPhoton[5], new Vector3(2, 3, 2.5), greenBase))
          .then(new MoveAction(greenPhoton[6], new Vector3(2, 5, 3), greenBase))
          .then(new MoveAction(greenPhoton[7], new Vector3(2, 4, 3.5), greenBase))
          .then(new MoveAction(greenPhoton[8], new Vector3(2, 3, 3.5), greenBase))
          .then(new MoveAction(greenPhoton[9], new Vector3(2, 3, 4), greenBase))
          .then(new MoveAction(greenPhoton[10], new Vector3(2, 2, 4.5), greenBase))
          .then(new MoveAction(greenPhoton[11], new Vector3(2, 1, 5), greenBase))
        engine.addSystem(new utils.ActionsSequenceSystem(sequence))
      })
    )
  },
  (): void => {
    log("xxxxxxxxxxx")
  }
))
