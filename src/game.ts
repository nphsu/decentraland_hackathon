import utils from "../node_modules/decentraland-ecs-utils/index"
import { TriggerBoxShape } from "../node_modules/decentraland-ecs-utils/triggers/triggerSystem"
import { ActionsSequenceSystem } from "../node_modules/decentraland-ecs-utils/actionsSequenceSystem/actionsSequenceSystem";

import { Corridor, Landing } from './objects/index'
import { MoveAction } from './actions/index'
import { BluePhoton, RedPhoton, GreenPhoton } from './particles/index'
import { Literal } from './sequences/index'

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
        const literal = new Literal(blueBase)
        const sequence = literal.buildAFrom(bluePhoton)
        engine.addSystem(new utils.ActionsSequenceSystem(sequence))
      })
    )
    const redTrigger = new RedPhoton(redBase)
    redTrigger.addComponent(
      new OnClick(() => {
        const literal = new Literal(redBase)
        const sequence = literal.buildAFrom(redPhoton)
        engine.addSystem(new utils.ActionsSequenceSystem(sequence))
      })
    )
    const greenTrigger = new GreenPhoton(greenBase)
    greenTrigger.addComponent(
      new OnClick(() => {
        const literal = new Literal(greenBase)
        const sequence = literal.buildAFrom(greenPhoton)
        engine.addSystem(new utils.ActionsSequenceSystem(sequence))
      })
    )
  },
  (): void => {
    log("xxxxxxxxxxx")
  }
))
