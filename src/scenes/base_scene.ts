/// <reference path="../config/index.ts" />
import utils from "../../node_modules/decentraland-ecs-utils/index"
import { Dome, Staircase, Landing, Corridor } from '../objects/index'
import { SmallStar } from '../particles/index'
import { RecordBoard } from '../objects/record_board'
import { InitialExplain, GameExplain } from '../components/index'
import { BluePhoton, GreenPhoton, RedPhoton } from "../particles/index"
import { BlackBox } from "../objects/black_box"
import { WhiteBox } from "../objects/white_box"
import { MoveAction, FadeOutAction, ScaleAction } from "../actions/index"


export function CreateBaseScene() {
  new Dome()
  new Staircase()
  new Corridor()
  new RecordBoard()
  new InitialExplain()

  createGameLanding()
  createStars()
  createGateBoxes()
}

function createGameLanding(): void {
  const landing = new Landing()
  landing.linkTrigger()
}

function createStars(): void {
  new SmallStar(new Vector3(30, 35, 7.5))
  new SmallStar(new Vector3(40, 25, 6.5))
  new SmallStar(new Vector3(35, 20, 5.5))
  new SmallStar(new Vector3(40, 25, 8.5))
  new SmallStar(new Vector3(35, 20, 9.5))

  new SmallStar(new Vector3(15, 35, 12))
  new SmallStar(new Vector3(10, 30, 15))
  new SmallStar(new Vector3(20, 20, 1))
  new SmallStar(new Vector3(25, 25, 2))
  new SmallStar(new Vector3(15, 20, 3))

  new SmallStar(new Vector3(15, 20, 12))
  new SmallStar(new Vector3(10, 15, 15))
  new SmallStar(new Vector3(25, 44, 1))
  new SmallStar(new Vector3(21, 43, 2))
  new SmallStar(new Vector3(20, 40, 3))
}

function createGateBoxes() {
  const box1 = new BlackBox(Position.initBox01)
  const box2 = new BlackBox(Position.initBox02)
  const box3 = new WhiteBox(Position.initBox03)
  const box4 = new BlackBox(Position.initBox04)
  const box5 = new BlackBox(Position.initBox05)
  const box6 = new WhiteBox(Position.initBox06)
  const box7 = new BlackBox(Position.initBox07)
  const box8 = new BlackBox(Position.initBox08)
  const box9 = new BlackBox(Position.initBox09)
  const box10 = new BlackBox(Position.initBox10)
  const box11 = new BlackBox(Position.initBox11)
  const box12 = new BlackBox(Position.initBox12)
  const box13 = new BlackBox(Position.initBox13)

  const box51 = new BlackBox(Position.initBox51)
  const box52 = new BlackBox(Position.initBox52)
  const box53 = new WhiteBox(Position.initBox53)
  const box54 = new BlackBox(Position.initBox54)
  const box55 = new BlackBox(Position.initBox55)
  const box56 = new WhiteBox(Position.initBox56)
  const box57 = new BlackBox(Position.initBox57)
  const box58 = new BlackBox(Position.initBox58)
  const box59 = new BlackBox(Position.initBox59)
  const box60 = new WhiteBox(Position.initBox60)
  const box61 = new BlackBox(Position.initBox61)
  const box62 = new WhiteBox(Position.initBox62)
  const box63 = new WhiteBox(Position.initBox63)

  const gateTrigger = new RedPhoton(new Vector3(-15, 3, 7.5), Vector3.One())

  const blinkSequence = new utils.ActionsSequenceSystem.SequenceBuilder()
    .while(() => true)
    .then(new ScaleAction(gateTrigger, new Vector3(1.2, 1.2, 1.2)))
    .then(new ScaleAction(gateTrigger, new Vector3(0.7, 0.7, 0.7)))
    .endWhile()
  engine.addSystem(new utils.ActionsSequenceSystem(blinkSequence))

  gateTrigger.addComponent(
    new OnClick(() => {
      log('Open the Gate')
      // openGate()
      const sequence = new utils.ActionsSequenceSystem.SequenceBuilder()
        .then(FadeOutAction(gateTrigger, 1, new Vector3(6, 0, 0)))
        .then(new MoveAction(box1, Position.box01, Vector3.Zero()))
        .then(new MoveAction(box2, Position.box02, Vector3.Zero()))
        .then(new MoveAction(box3, Position.box03, Vector3.Zero()))
        .then(new MoveAction(box4, Position.box04, Vector3.Zero()))
        .then(new MoveAction(box5, Position.box05, Vector3.Zero()))
        .then(new MoveAction(box6, Position.box06, Vector3.Zero()))
        .then(new MoveAction(box7, Position.box07, Vector3.Zero()))
        .then(new MoveAction(box8, Position.box08, Vector3.Zero()))
        .then(new MoveAction(box9, Position.box09, Vector3.Zero()))
        .then(new MoveAction(box10, Position.box10, Vector3.Zero()))
        .then(new MoveAction(box11, Position.box11, Vector3.Zero()))
        .then(new MoveAction(box12, Position.box12, Vector3.Zero()))
        .then(new MoveAction(box13, Position.box13, Vector3.Zero()))

        .then(new MoveAction(box51, Position.box51, Vector3.Zero()))
        .then(new MoveAction(box52, Position.box52, Vector3.Zero()))
        .then(new MoveAction(box53, Position.box53, Vector3.Zero()))
        .then(new MoveAction(box54, Position.box54, Vector3.Zero()))
        .then(new MoveAction(box55, Position.box55, Vector3.Zero()))
        .then(new MoveAction(box56, Position.box56, Vector3.Zero()))
        .then(new MoveAction(box57, Position.box57, Vector3.Zero()))
        .then(new MoveAction(box58, Position.box58, Vector3.Zero()))
        .then(new MoveAction(box59, Position.box59, Vector3.Zero()))
        .then(new MoveAction(box60, Position.box60, Vector3.Zero()))
        .then(new MoveAction(box61, Position.box61, Vector3.Zero()))
        .then(new MoveAction(box62, Position.box62, Vector3.Zero()))
        .then(new MoveAction(box63, Position.box63, Vector3.Zero()))

      engine.addSystem(new utils.ActionsSequenceSystem(sequence))
    })
  )
}