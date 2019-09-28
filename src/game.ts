/// <reference path="./config/index.ts" />

import utils from "../node_modules/decentraland-ecs-utils/index"
import { CreateBaseScene } from "./scenes/base_scene"
import { BlackBox } from "./objects/black_box"
import { WhiteBox } from "./objects/white_box"
import { MoveAction, FadeOutAction, ScaleAction } from "./actions/index"
import { BluePhoton, GreenPhoton, RedPhoton } from "./particles/index"

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

const bluePhoton = new BluePhoton(new Vector3(26, 12, 5.5))
const explainBlue = new Entity()
explainBlue.addComponent(new Transform({
  position: new Vector3(25, 12, 5.5),
  rotation: Quaternion.Euler(0, 180, 0),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
explainBlue.addComponent(new TextShape(
  ':1pt'
))
engine.addEntity(explainBlue)
const redPhoton = new RedPhoton(new Vector3(23, 12, 5.5))
const explainRed = new Entity()
explainRed.addComponent(new Transform({
  position: new Vector3(22, 12, 5.5),
  rotation: Quaternion.Euler(0, 180, 0),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
explainRed.addComponent(new TextShape(
  ':Xpt'
))
engine.addEntity(explainRed)
const greenPhoton = new GreenPhoton(new Vector3(20, 12, 5.5))
const explainGreen = new Entity()
explainGreen.addComponent(new Transform({
  position: new Vector3(18, 12, 5.5),
  rotation: Quaternion.Euler(0, 180, 0),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
explainGreen.addComponent(new TextShape(
  '(Hidden):20pt'
))
engine.addEntity(explainGreen)

const explanations = [explain, bluePhoton, explainBlue, redPhoton, explainRed, greenPhoton, explainGreen]
export function switchExplation(show: boolean): void {
  const vector = show ? new Vector3(0, 100, 0) : new Vector3(0, -100, 0)
  explanations.forEach((explanation => {
    const position = explanation.getComponent(Transform).position
    explanation.addComponentOrReplace(new utils.MoveTransformComponent(position.add(vector), position.add(vector), 0))
  }))
}
