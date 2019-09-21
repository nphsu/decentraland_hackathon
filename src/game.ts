/// <reference path="./config/index.ts" />

import utils from "../node_modules/decentraland-ecs-utils/index"
import { CreateBaseScene } from "./scenes/base_scene"
import { RedPhoton, GreenPhoton, SmallStar } from './particles/index'
// RedPhoton.buildInitArray(100)
// GreenPhoton.buildInitArray(15)


CreateBaseScene()
const tree1 = new Entity()
tree1.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
tree1.addComponent(new GLTFShape("models/original_tree1.glb"))
engine.addEntity(tree1)

const tree2 = new Entity()
tree2.addComponent(new Transform({ position: new Vector3(0, 0, 15) }))
tree2.addComponent(new GLTFShape("models/original_tree1.glb"))
engine.addEntity(tree2)

const star1 = new SmallStar(new Vector3(30, 35, 7.5))
const star2 = new SmallStar(new Vector3(40, 25, 6.5))
const star3 = new SmallStar(new Vector3(35, 20, 5.5))
const star4 = new SmallStar(new Vector3(40, 25, 8.5))
const star5 = new SmallStar(new Vector3(35, 20, 9.5))

const star6 = new SmallStar(new Vector3(15, 35, 12))
const star7 = new SmallStar(new Vector3(10, 30, 15))
const star8 = new SmallStar(new Vector3(20, 20, 1))
const star9 = new SmallStar(new Vector3(25, 25, 2))
const star10 = new SmallStar(new Vector3(15, 20, 3))

const star11 = new SmallStar(new Vector3(15, 20, 12))
const star12 = new SmallStar(new Vector3(10, 15, 15))
const star13 = new SmallStar(new Vector3(25, 44, 1))
const star14 = new SmallStar(new Vector3(21, 43, 2))
const star15 = new SmallStar(new Vector3(20, 40, 3))
