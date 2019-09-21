/// <reference path="../config/index.ts" />
import utils from "../../node_modules/decentraland-ecs-utils/index"
import { BluePhoton, RedPhoton, GreenPhoton } from '../particles/index'
import { RiseAction, MoveAction, MoveSlowAction } from '../actions/index'
import { FireWorksSequenceBuilder, FireWorksDot } from "../sequences/index";

export class Landing extends Entity {

  constructor() {
    super()
    engine.addEntity(this)
    this.addComponent(new Transform({ position: Position.landing }))
    this.addComponent(new GLTFShape("models/landing.glb"))
  }

  public linkTrigger() {
    const trigger = new Entity()
    engine.addEntity(trigger)
    trigger.addComponent(new Transform({ position: Position.landing }))
    trigger.addComponent(new utils.TriggerComponent(
      new utils.TriggerBoxShape(new Vector3(1, 10, 1), Vector3.Zero()),
      0,
      0,
      null,
      null,
      (): void => {
        const blueTrigger = BluePhoton.buildTrigger()
        const redTrigger = RedPhoton.buildTrigger()
        // const greenPhoton = GreenPhoton.buildInitArray(15)
        const greenTrigger = new GreenPhoton(Position.defaultPhoton)
        const sequence = new utils.ActionsSequenceSystem.SequenceBuilder()
          .then(new RiseAction(this, new Vector3(0, 5, 0), Position.landing, blueTrigger, redTrigger, greenTrigger))
        engine.addSystem(new utils.ActionsSequenceSystem(sequence))

        const redPhotons = RedPhoton.buildInitArray(15)
        const firework = new utils.ActionsSequenceSystem.SequenceBuilder()
          .then(new MoveSlowAction(redPhotons[0], new Vector3(35, 15, 5.5), redTrigger.getComponent(Transform).position))
          .then(new MoveSlowAction(redPhotons[1], new Vector3(35, 16, 6.5), redTrigger.getComponent(Transform).position))
          .then(new MoveSlowAction(redPhotons[2], new Vector3(35, 17, 5.5), redTrigger.getComponent(Transform).position))
          .then(new MoveSlowAction(redPhotons[3], new Vector3(35, 18, 6.5), redTrigger.getComponent(Transform).position))
          .then(new MoveSlowAction(redPhotons[4], new Vector3(35, 19, 5.5), redTrigger.getComponent(Transform).position))
          .then(new MoveSlowAction(redPhotons[5], new Vector3(35, 20, 6.5), redTrigger.getComponent(Transform).position))
        engine.addSystem(new utils.ActionsSequenceSystem(firework))

        const startPosition = new Vector3(15, 0, 7.5)
        const addPosition = new Vector3(0, 20, 0)
        const bloomDelay = 3
        FireWorksSequenceBuilder.build(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), circle16().concat(dcl()), startPosition, addPosition, bloomDelay)
          .forEach(each => engine.addSystem(new utils.ActionsSequenceSystem(each)))

        // const redTrigger = new RedPhoton(redBase)
        // redTrigger.addComponent(
        //   new OnClick(() => {
        //     const literal = new Literal(redBase)
        //     const sequence = literal.buildDECEN(redPhoton)
        //     engine.addSystem(new utils.ActionsSequenceSystem(sequence))        
        //   })
        // )
        // const greenTrigger = new GreenPhoton(greenBase)
        // greenTrigger.addComponent(
        //   new OnClick(() => {
        //     const literal = new Literal(greenBase)
        //     const sequence = literal.buildAFrom(greenPhoton)
        //     engine.addSystem(new utils.ActionsSequenceSystem(sequence))
        //   })
        // )
      },
      (): void => {
        log("xxxxxxxxxxx")
      }
    ))
  }
}

const circle16 = () => [
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 0)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 6, 0)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 7, 0)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 8, 0)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 9, 0)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 10, 0)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 3, 1)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 4, 1)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 11, 1)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 12, 1)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 2, 2)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 13, 2)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 1, 3)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 14, 3)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 1, 4)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 14, 4)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 0, 5)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 15, 5)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 0, 6)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 15, 6)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 0, 7)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 15, 7)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 0, 8)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 15, 8)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 0, 9)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 15, 9)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 0, 10)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 15, 10)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 1, 11)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 14, 11)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 1, 12)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 14, 12)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 2, 13)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 13, 13)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 3, 14)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 4, 14)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 11, 14)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 12, 14)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 15)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 6, 15)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 7, 15)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 8, 15)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 9, 15)),
]
const dcl = () => [
  // circle left
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 12, 4)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 11, 4)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 13, 5)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 10, 5)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 13, 6)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 10, 6)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 12, 7)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 11, 7)),
  // circle right
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 10, 10)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 9, 10)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 11, 11)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 8, 11)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 11, 12)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 8, 12)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 10, 13)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 9, 13)),

  // mt left
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 1)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 2)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 6, 2)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 3)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 7, 3)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 4)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 8, 4)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 5)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 9, 5)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 6)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 8, 6)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 7)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 7, 7)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 8)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 6, 8)),

  // mt right
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 3, 7)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 3, 8)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 4, 8)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 3, 9)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 9)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 3, 10)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 6, 10)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 3, 11)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 7, 11)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 3, 12)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 6, 12)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 3, 13)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 13)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 3, 14)),
  new FireWorksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 4, 14)),
]
