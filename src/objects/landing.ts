/// <reference path="../config/index.ts" />
import utils from "../../node_modules/decentraland-ecs-utils/index"
import { BluePhoton, RedPhoton, GreenPhoton } from '../particles/index'
import { RiseAction, MoveAction, CountdownAction } from '../actions/index'
import { FireworksSequenceBuilder, FireworksDot } from "../sequences/index";
import { FollowAction } from "../actions/follow_action";
import { ScoreBoard } from "../components/index";
import { BubbleAction } from "../actions/bubble_action";
import { CalculatingResultAction } from "../actions/calculating_result_action";
import { Point } from "../particles/point";
import { addTempEntity, hasStartedGame, startGame } from "../states/store";
import { FireworksSound } from "../components/fireworks_sound";
import { GunSound } from '../components/gun_sound';

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
      new utils.TriggerBoxShape(new Vector3(3, 10, 3), Vector3.Zero()),
      0,
      0,
      null,
      null,
      (): void => {
        if (hasStartedGame()) {
          return
        }
        startGame()
        const scoreBoard = new ScoreBoard()
        scoreBoard.init(this)
        addTempEntity(scoreBoard)

        const position = this.getComponent(Transform).position

        const sequence = new utils.ActionsSequenceSystem.SequenceBuilder()
          .then(new CountdownAction(3))
          .then(new FollowAction(this, scoreBoard))
          .then(new CalculatingResultAction(this, position, Vector3.Zero(), 10))
        engine.addSystem(new utils.ActionsSequenceSystem(sequence))

        const hiddenPhoton = new GreenPhoton(new Vector3(0, -1.5, 0))
        hiddenPhoton.setParent(this)
        hiddenPhoton.addComponent(
          new OnClick(() => {
            new GunSound()
            const currentPosition = this.getComponent(Transform).position.add(hiddenPhoton.getComponent(Transform).position)
            const point = new Point(50, currentPosition, Quaternion.Euler(0, 90, 0), new Vector3(0, -1, 0))
            scoreBoard.addScore(point.point)
            engine.removeEntity(hiddenPhoton)
          })
        )

        const startPosition = new Vector3(15, 0, 7.5)
        const addPosition = new Vector3(0, 20, 0)
        const bloomDelay = 20
        const fireworksBall = new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1))
        fireworksBall.addComponent(
          new OnClick(() => {
            const currentPosition = fireworksBall.getComponent(Transform).position
            const point = Math.ceil(addPosition.y - currentPosition.y)
            new Point(point, fireworksBall.getComponent(Transform).position, Quaternion.Euler(0, 270, 0))
            new GunSound()
            scoreBoard.addScore(point)
          })
        )
        FireworksSequenceBuilder.build(fireworksBall, circle16.concat(dcl), startPosition, addPosition, bloomDelay)
          .forEach(each => engine.addSystem(new utils.ActionsSequenceSystem(each)))
        fireworksBall.addComponent(new utils.Delay(20000, () => {
          new FireworksSound()
        }))
      },
      (): void => {
        log("xxxxxxxxxxx")
      }
    ))
  }
}

export const circle16 = [
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 0)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 6, 0)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 7, 0)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 8, 0)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 9, 0)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 10, 0)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 3, 1)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 4, 1)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 11, 1)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 12, 1)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 2, 2)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 13, 2)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 1, 3)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 14, 3)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 1, 4)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 14, 4)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 0, 5)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 15, 5)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 0, 6)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 15, 6)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 0, 7)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 15, 7)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 0, 8)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 15, 8)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 0, 9)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 15, 9)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 0, 10)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 15, 10)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 1, 11)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 14, 11)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 1, 12)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 14, 12)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 2, 13)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 13, 13)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 3, 14)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 4, 14)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 11, 14)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 12, 14)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 15)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 6, 15)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 7, 15)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 8, 15)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 9, 15)),
]
export const dcl = [
  // circle left
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 12, 4)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 11, 4)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 13, 5)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 10, 5)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 13, 6)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 10, 6)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 12, 7)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 11, 7)),
  // circle right
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 10, 10)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 9, 10)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 11, 11)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 8, 11)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 11, 12)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 8, 12)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 10, 13)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 9, 13)),

  // mt left
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 1)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 2)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 6, 2)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 3)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 7, 3)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 4)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 8, 4)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 5)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 9, 5)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 6)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 8, 6)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 7)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 7, 7)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 8)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 6, 8)),

  // mt right
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 3, 7)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 3, 8)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 4, 8)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 3, 9)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 9)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 3, 10)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 6, 10)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 3, 11)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 7, 11)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 3, 12)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 6, 12)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 3, 13)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 5, 13)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 3, 14)),
  new FireworksDot(new RedPhoton(Vector3.Zero(), new Vector3(1, 1, 1)), new Vector3(0, 4, 14)),
]
