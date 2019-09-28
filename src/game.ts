/// <reference path="./config/index.ts" />

import utils from "../node_modules/decentraland-ecs-utils/index"
import { CreateBaseScene } from "./scenes/base_scene"
import { BlackBox } from "./objects/black_box"
import { WhiteBox } from "./objects/white_box"
import { GreenPhoton, RedPhoton } from "./particles/index"
import { MoveAction } from "./actions/index"

CreateBaseScene()

const explain = new Entity()
explain.addComponent(new Transform({
  position: new Vector3(21, 12, 9.5),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
explain.addComponent(new TextShape(
  'A Shooting Game starts when you get on the back stage ->'
))
engine.addEntity(explain)

const explain2 = new Entity()
explain2.addComponent(new Transform({
  position: new Vector3(21, 12, 5.5),
  rotation: Quaternion.Euler(0, 180, 0),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
explain2.addComponent(new TextShape(
  'BLUE:1pt       RED:2pt          Green(Hidden):20pt'
))
engine.addEntity(explain2)


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

const gateTrigger = new RedPhoton(new Vector3(-12, 3, 7.5), Vector3.One())
gateTrigger.addComponent(
  new OnClick(() => {
    log('Open the Gate')
    // openGate()
    const sequence = new utils.ActionsSequenceSystem.SequenceBuilder()
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