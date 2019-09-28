/// <reference path="./config/index.ts" />

import utils from "../node_modules/decentraland-ecs-utils/index"
import { CreateBaseScene } from "./scenes/base_scene"
import { BlackBox } from "./objects/black_box"
import { WhiteBox } from "./objects/white_box"

CreateBaseScene()
// const tree1 = new Entity()
// tree1.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
// tree1.addComponent(new GLTFShape("models/original_tree1.glb"))
// engine.addEntity(tree1)

// const tree2 = new Entity()
// tree2.addComponent(new Transform({ position: new Vector3(0, 0, 15) }))
// tree2.addComponent(new GLTFShape("models/original_tree1.glb"))
// engine.addEntity(tree2)

// const blackBox1 = new Entity()
// blackBox1.addComponent(new Transform({
//   position: new Vector3(0, 10, 0),
//   scale: new Vector3(3, 3, 3)
// }))
// blackBox1.addComponent(new GLTFShape("models/box_black.glb"))
// engine.addEntity(blackBox1)

// const whiteBox1 = new Entity()
// whiteBox1.addComponent(new Transform({
//   position: new Vector3(6, 6, 6),
//   scale: new Vector3(3, 3, 3)
// }))
// whiteBox1.addComponent(new GLTFShape("models/box_white.glb"))
// engine.addEntity(whiteBox1)

new BlackBox(Position.box01)
new BlackBox(Position.box02)
new WhiteBox(Position.box03)
new BlackBox(Position.box04)
new BlackBox(Position.box05)
new WhiteBox(Position.box06)
new BlackBox(Position.box07)
new BlackBox(Position.box08)
new BlackBox(Position.box09)
new BlackBox(Position.box10)
new BlackBox(Position.box11)
new BlackBox(Position.box12)
new BlackBox(Position.box13)

new BlackBox(Position.box51)
new BlackBox(Position.box52)
new WhiteBox(Position.box53)
new BlackBox(Position.box54)
new BlackBox(Position.box55)
new WhiteBox(Position.box56)
new BlackBox(Position.box57)
new BlackBox(Position.box58)
new BlackBox(Position.box59)
new WhiteBox(Position.box60)
new BlackBox(Position.box61)
new WhiteBox(Position.box62)
new WhiteBox(Position.box63)
