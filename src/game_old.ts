// import utils from "../node_modules/decentraland-ecs-utils/index"
// import { TriggerBoxShape } from "../node_modules/decentraland-ecs-utils/triggers/triggerSystem"
// import { ActionsSequenceSystem } from "../node_modules/decentraland-ecs-utils/actionsSequenceSystem/actionsSequenceSystem";

// import { Corridor } from './objects/index'
// //Use IAction to define action for movement
// // class MoveAction implements ActionsSequenceSystem.IAction {
// //   hasFinished: boolean = false;
// //   entity: Entity
// //   position: Vector3

// //   constructor(entity: Entity, position: Vector3) {
// //     this.entity = entity
// //     this.position = position
// //   }

// //   //Method when action starts
// //   onStart(): void {
// //     const transform = this.entity.getComponent(Transform)

// //     this.entity.addComponentOrReplace(new utils.MoveTransformComponent(transform.position, this.position, 0.2,
// //       () => {
// //         this.hasFinished = true
// //       }))
// //   }
// //   //Method to run on every frame
// //   update(dt: number): void {
// //   }
// //   //Method to run at the end
// //   onFinish(): void {
// //   }
// // }
// // //Use IAction to define action for movement
// // class RotateAction implements ActionsSequenceSystem.IAction {
// //   hasFinished: boolean = false;
// //   entity: Entity
// //   position: Quaternion

// //   constructor(entity: Entity, position: Quaternion) {
// //     this.entity = entity
// //     this.position = position
// //   }

// //   //Method when action starts
// //   onStart(): void {
// //     this.entity.addComponentOrReplace(new utils.RotateTransformComponent(Quaternion.Euler(0, 0, 0), this.position, 4,
// //       () => {
// //         this.hasFinished = true
// //       }))
// //   }
// //   //Method to run on every frame
// //   update(dt: number): void {
// //   }
// //   //Method to run at the end
// //   onFinish(): void {
// //   }
// // }

// // //Use IAction to define action for movement
// // class ChangeObjectAction implements ActionsSequenceSystem.IAction {
// //   hasFinished: boolean = false;
// //   entity: Entity
// //   position: Quaternion
// //   afterShape: GLTFShape

// //   constructor(entity: Entity, afterShape: GLTFShape) {
// //     this.entity = entity
// //     this.afterShape = afterShape
// //   }

// //   //Method when action starts
// //   onStart(): void {
// //     this.entity.addComponentOrReplace(this.afterShape)

// //     this.entity.addComponentOrReplace(new utils.RotateTransformComponent(Quaternion.Euler(0, 0, 0), this.position, 1,
// //       () => {
// //         this.hasFinished = true
// //       }))
// //   }
// //   //Method to run on every frame
// //   update(dt: number): void {
// //   }
// //   //Method to run at the end
// //   onFinish(): void {
// //   }
// // }

// // const ball001 = new Entity()
// // ball001.addComponent(new Transform())
// // ball001.addComponent(new GLTFShape("models/particle1.glb"))
// // engine.addEntity(ball001)
// // const ball002 = new Entity()
// // ball002.addComponent(new Transform())
// // ball002.addComponent(new GLTFShape("models/particle1.glb"))
// // engine.addEntity(ball002)
// // const ball003 = new Entity()
// // ball003.addComponent(new Transform())
// // ball003.addComponent(new GLTFShape("models/particle1.glb"))
// // engine.addEntity(ball003)
// // const ball004 = new Entity()
// // ball004.addComponent(new Transform())
// // ball004.addComponent(new GLTFShape("models/particle1.glb"))
// // engine.addEntity(ball004)
// // const ball005 = new Entity()
// // ball005.addComponent(new Transform())
// // ball005.addComponent(new GLTFShape("models/particle1.glb"))
// // engine.addEntity(ball005)
// // const ball006 = new Entity()
// // ball006.addComponent(new Transform())
// // ball006.addComponent(new GLTFShape("models/particle1.glb"))
// // engine.addEntity(ball006)
// // const ball007 = new Entity()
// // ball007.addComponent(new Transform())
// // ball007.addComponent(new GLTFShape("models/particle1.glb"))
// // engine.addEntity(ball007)
// // const ball008 = new Entity()
// // ball008.addComponent(new Transform())
// // ball008.addComponent(new GLTFShape("models/particle1.glb"))
// // engine.addEntity(ball008)
// // const ball009 = new Entity()
// // ball009.addComponent(new Transform())
// // ball009.addComponent(new GLTFShape("models/particle1.glb"))
// // engine.addEntity(ball009)
// // const ball010 = new Entity()
// // ball010.addComponent(new Transform())
// // ball010.addComponent(new GLTFShape("models/particle1.glb"))
// // engine.addEntity(ball010)
// // const ball011 = new Entity()
// // ball011.addComponent(new Transform())
// // ball011.addComponent(new GLTFShape("models/particle1.glb"))
// // engine.addEntity(ball011)
// // const ball012 = new Entity()
// // ball012.addComponent(new Transform())
// // ball012.addComponent(new GLTFShape("models/particle1.glb"))
// // engine.addEntity(ball012)
// // const ball013 = new Entity()
// // ball013.addComponent(new Transform())
// // ball013.addComponent(new GLTFShape("models/particle1.glb"))
// // engine.addEntity(ball013)
// // const ball014 = new Entity()
// // ball014.addComponent(new Transform())
// // ball014.addComponent(new GLTFShape("models/particle1.glb"))
// // engine.addEntity(ball014)
// // const ball015 = new Entity()
// // ball015.addComponent(new Transform())
// // ball015.addComponent(new GLTFShape("models/particle1.glb"))
// // engine.addEntity(ball015)


// // const ball0 = new Entity()
// // ball0.addComponent(new Transform({ position: new Vector3(6, 1, 1) }))
// // ball0.addComponent(new GLTFShape("models/ball0.glb"))
// // const ball0StartPos = new Vector3(1, 1, 1)
// // const ball0EndPos = new Vector3(8, 1, 1)
// // const ball0Duration = 2
// // ball0.addComponent(
// //   new OnClick(() => {
// //     // ball0.addComponent(new utils.MoveTransformComponent(ball0StartPos, ball0EndPos, ball0Duration))
// //     // ball1.addComponent(new utils.MoveTransformComponent(ball0StartPos, ball0EndPos, 2))
// //     const sequence = new utils.ActionsSequenceSystem.SequenceBuilder()
// //       .while(() => null)
// //       .then(new MoveAction(ball0, new Vector3(1, 0, 1)))
// //       .endWhile()
// //       // .then(new MoveAction(ball0, new Vector3(1, 0, 1)))
// //       // .then(new MoveAction(ball0, new Vector3(1, 1, 1)))
// //       // .then(new RotateAction(ball0, Quaternion.Euler(0,90,0)))
// //       // .then(new ChangeObjectAction(ball0, ball1.getComponent(GLTFShape)))
// //       .then(new MoveAction(ball001, new Vector3(1, 2, 2)))
// //       .then(new MoveAction(ball002, new Vector3(1, 3, 2)))
// //       .then(new MoveAction(ball003, new Vector3(1.5, 1.5, 2)))
// //       .then(new MoveAction(ball004, new Vector3(1.5, 4, 2)))
// //       .then(new MoveAction(ball005, new Vector3(2, 4.5, 2)))
// //       .then(new MoveAction(ball006, new Vector3(2, 1, 2)))
// //       .then(new MoveAction(ball007, new Vector3(3, 1, 2)))
// //       .then(new MoveAction(ball008, new Vector3(3, 4.5, 2)))
// //       .then(new MoveAction(ball009, new Vector3(3.5, 1.5, 2)))
// //       .then(new MoveAction(ball010, new Vector3(4, 2, 2)))
// //       .then(new MoveAction(ball011, new Vector3(0, 0, 0)))
// //       .then(new MoveAction(ball012, new Vector3(0, 0, 0)))
// //       .then(new MoveAction(ball013, new Vector3(0, 0, 0)))
// //       .then(new MoveAction(ball014, new Vector3(0, 0, 0)))
// //     //Create a sequence system, and add it to the engine to run the sequence
// //     engine.addSystem(new utils.ActionsSequenceSystem(sequence))
// //   })
// // )
// // engine.addEntity(ball0)

// // const ball1 = new Entity()
// // ball1.addComponent(new Transform({ position: new Vector3(7, 1, 1) }))
// // ball1.addComponent(new GLTFShape("models/ball1.glb"))
// // const ball1StartPos = new Vector3(2, 2, 2)
// // const ball1EndPos = new Vector3(3, 3, 3)
// // ball1.addComponent(
// //   new OnClick(() => {
// //     // ball1.addComponent(new utils.MoveTransformComponent(ball0StartPos, ball0EndPos, 2))
// //     const sequence = new utils.ActionsSequenceSystem.SequenceBuilder()
// //       .while(() => null)
// //       .then(new MoveAction(ball0, new Vector3(1, 0, 1)))
// //       .endWhile()
// //       // .then(new MoveAction(ball0, new Vector3(1, 0, 1)))
// //       // .then(new MoveAction(ball0, new Vector3(1, 1, 1)))
// //       // .then(new RotateAction(ball0, Quaternion.Euler(0,90,0)))
// //       // .then(new ChangeObjectAction(ball0, ball1.getComponent(GLTFShape)))
// //       .then(new MoveAction(ball001, new Vector3(1, 1, 2)))
// //       .then(new MoveAction(ball002, new Vector3(1.5, 2, 2)))
// //       .then(new MoveAction(ball003, new Vector3(2, 3, 2)))
// //       .then(new MoveAction(ball004, new Vector3(2.5, 4, 2)))
// //       .then(new MoveAction(ball005, new Vector3(2.5, 3, 2)))
// //       .then(new MoveAction(ball006, new Vector3(3, 5, 2)))
// //       .then(new MoveAction(ball007, new Vector3(3.5, 4, 2)))
// //       .then(new MoveAction(ball008, new Vector3(3.5, 3, 2)))
// //       .then(new MoveAction(ball009, new Vector3(4, 3, 2)))
// //       .then(new MoveAction(ball010, new Vector3(4.5, 2, 2)))
// //       .then(new MoveAction(ball011, new Vector3(5, 1, 2)))
// //     //Create a sequence system, and add it to the engine to run the sequence
// //     engine.addSystem(new utils.ActionsSequenceSystem(sequence))
// //   })
// // )
// // ball1.addComponent(new utils.TriggerComponent(
// //   new TriggerBoxShape(new Vector3(2, 2, 2), Vector3.Zero()),
// //   0,
// //   0,
// //   (): void => {
// //     log("33333")
// //   },
// //   (): void => {
// //     log("44444")
// //   },
// //   (): void => {

// //     log("11111")
// //   },
// //   (): void => {
// //     log("22222")
// //   }
// // ))
// // engine.addEntity(ball1)

// // const trigger = new Entity()
// // engine.addEntity(trigger)
// // trigger.addComponent(new Transform({
// //   position: new Vector3(31, 10, 7.5)
// // }))
// // trigger.addComponent(new utils.TriggerComponent(
// //   new TriggerBoxShape(new Vector3(4, 4, 4), Vector3.Zero()),
// //   0,
// //   0,
// //   null,
// //   null,
// //   (): void => {
// //     log("transfer!")
// //     const triggerLight1 = new Entity()
// //     triggerLight1.addComponent(new Transform({ position: new Vector3(35, 20, 7.5) }))
// //     triggerLight1.addComponent(new GLTFShape("models/particle1.glb"))
// //     engine.addEntity(triggerLight1)
// //     triggerLight1.addComponent(
// //       new OnClick(() => {
// //         // ball1.addComponent(new utils.MoveTransformComponent(ball0StartPos, ball0EndPos, 2))
// //         const sequence = new utils.ActionsSequenceSystem.SequenceBuilder()
// //           .while(() => null)
// //             .then(new MoveAction(ball0, new Vector3(1, 0, 1)))
// //           .endWhile()
// //             .then(new MoveAction(ball001, new Vector3(1, 1, 2)))
// //             .then(new MoveAction(ball002, new Vector3(1.5, 2, 2)))
// //             .then(new MoveAction(ball003, new Vector3(2, 3, 2)))
// //             .then(new MoveAction(ball004, new Vector3(2.5, 4, 2)))
// //             .then(new MoveAction(ball005, new Vector3(2.5, 3, 2)))
// //             .then(new MoveAction(ball006, new Vector3(3, 5, 2)))
// //             .then(new MoveAction(ball007, new Vector3(3.5, 4, 2)))
// //             .then(new MoveAction(ball008, new Vector3(3.5, 3, 2)))
// //             .then(new MoveAction(ball009, new Vector3(4, 3, 2)))
// //             .then(new MoveAction(ball010, new Vector3(4.5, 2, 2)))
// //             .then(new MoveAction(ball011, new Vector3(5, 1, 2)))

// //         //Create a sequence system, and add it to the engine to run the sequence
// //         engine.addSystem(new utils.ActionsSequenceSystem(sequence))
// //       })
// //     )
// //   },
// //   (): void => {
// //     log("ng")
// //   }
// // ))

// const dome = new Entity()
// dome.addComponent(new Transform({ position: new Vector3(25, 20, 7.5) }))
// dome.addComponent(new GLTFShape("models/dome.glb"))
// engine.addEntity(dome)

// const staircase = new Entity()
// staircase.addComponent(new Transform({ position: new Vector3(-10, 0, 7.5) }))
// staircase.addComponent(new GLTFShape("models/staircase.glb"))
// engine.addEntity(staircase)

// const corridor = new Corridor()
// log(corridor)

// const landing = new Entity()
// landing.addComponent(new Transform({ position: new Vector3(31, 10, 7.5) }))
// landing.addComponent(new GLTFShape("models/landing.glb"))
// engine.addEntity(landing)


