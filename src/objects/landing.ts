/// <reference path="../config/index.ts" />
import utils from "../../node_modules/decentraland-ecs-utils/index"
import { BluePhoton, RedPhoton, GreenPhoton } from '../particles/index'
import { RiseAction, MoveAction, MoveSlowAction } from '../actions/index'

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