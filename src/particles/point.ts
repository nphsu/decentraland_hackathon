import utils from "../../node_modules/decentraland-ecs-utils/index"

export class Point extends Entity {
    point: number
    position: Vector3

    constructor(point: number, position: Vector3, rotation: Quaternion, pointPosition = POINT_POSITION, displayTime = DISPLAY_TIME) {
        super()
        engine.addEntity(this)
        this.point = point
        this.addComponent(new Transform({ position: Vector3.Zero(), rotation }))
        this.addComponent(new TextShape(`+${point.toString()}`));
        this.addComponentOrReplace(new utils.MoveTransformComponent(position, position.add(pointPosition), displayTime, () => engine.removeEntity(this)))
    }
}

const POINT_POSITION = new Vector3(0, 0.5, 0)
const DISPLAY_TIME = 0.5