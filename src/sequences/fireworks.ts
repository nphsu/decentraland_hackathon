import utils from "../../node_modules/decentraland-ecs-utils/index"
import { ActionsSequenceSystem } from "../../node_modules/decentraland-ecs-utils/actionsSequenceSystem/actionsSequenceSystem";
import { FadeOutAction, MoveAction, FadeInAction } from "../actions/index";

class FireWorksSequenceBuilder {
    static build(
        fireWorksBall: Entity,
        fireWorksDots: FireWorksDot[],
        startPosition: Vector3,
        addPosition: Vector3,
        bloomDelay: number
    ): ActionsSequenceSystem.SequenceBuilder[] {
        const bloomPosition = startPosition.add(addPosition)
        const fireWorksBallSequence = new utils.ActionsSequenceSystem.SequenceBuilder()
            .then(new MoveAction(fireWorksBall, addPosition, startPosition, bloomDelay))
            .then(FadeOutAction(fireWorksBall, 0.5, new Vector3(0, -2, 0)))
        const fireWorksSequences = fireWorksDots.map(dot => {
            const entity = dot.entity
            const fireWorksDotSequence = new utils.ActionsSequenceSystem.SequenceBuilder()
                .then(new MoveAction(entity, Vector3.Zero(), Vector3.Zero(), bloomDelay))　// wait
                .then(FadeInAction(entity, 1, dot.position, bloomPosition)) // bloom
            return fadeOutWithBlink(entity, fireWorksDotSequence)
        })
        return [fireWorksBallSequence].concat(fireWorksSequences)
    }
}

class FireWorksDot {
    entity: Entity
    position: Vector3

    constructor(entity: Entity, position: Vector3) {
        this.entity = entity
        this.position = position
    }
}

const fadeOutWithBlink = (entity: Entity, sequnce: ActionsSequenceSystem.SequenceBuilder): ActionsSequenceSystem.SequenceBuilder => {
    return sequnce
        .then(FadeOutAction(entity, 0.5, new Vector3(0, -2, 0)))
        .then(FadeOutAction(entity, 0.5, new Vector3(0, -2, 0), Vector3.Zero(), new Vector3(0.8, 0.8, 0.8)))
        .then(FadeOutAction(entity, 0.5, new Vector3(0, -2, 0), Vector3.Zero(), new Vector3(0.5, 0.5, 0.5)))
        .then(FadeOutAction(entity, 0.5, new Vector3(0, -2, 0), Vector3.Zero(), new Vector3(0.2, 0.2, 0.2)))
}

export { FireWorksSequenceBuilder, FireWorksDot }