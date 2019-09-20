/// <reference path="./config/index.ts" />

import utils from "../node_modules/decentraland-ecs-utils/index"
import { CreateBaseScene } from "./scenes/base_scene"

CreateBaseScene()
const tree1 = new Entity()
tree1.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
tree1.addComponent(new GLTFShape("models/original_tree1.glb"))
engine.addEntity(tree1)

const tree2 = new Entity()
tree2.addComponent(new Transform({ position: new Vector3(0, 0, 15) }))
tree2.addComponent(new GLTFShape("models/original_tree1.glb"))
engine.addEntity(tree2)

