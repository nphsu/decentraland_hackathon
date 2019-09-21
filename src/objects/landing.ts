/// <reference path="../config/index.ts" />
import utils from "../../node_modules/decentraland-ecs-utils/index"
import { BluePhoton, RedPhoton, GreenPhoton } from '../particles/index'
import { RiseAction } from '../actions/index'

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
        // const redPhotons = RedPhoton.buildInitArray(15)
        const redTrigger = RedPhoton.buildTrigger()
        // const greenPhoton = GreenPhoton.buildInitArray(15)
        const greenTrigger = new GreenPhoton(Position.defaultPhoton)
        const sequence = new utils.ActionsSequenceSystem.SequenceBuilder()
          .then(new RiseAction(this, new Vector3(0, 5, 0), Position.landing, blueTrigger, redTrigger, greenTrigger))
        engine.addSystem(new utils.ActionsSequenceSystem(sequence))

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