import utils from "../../node_modules/decentraland-ecs-utils/index"
import { ActionsSequenceSystem } from "../../node_modules/decentraland-ecs-utils/actionsSequenceSystem/actionsSequenceSystem";
import { FadeOutAction, MoveAction, FadeInAction } from "../actions/index";

class FireworksSequenceBuilder {
    static build(
        fireworksBall: Entity,
        fireworksDots: FireworksDot[],
        startPosition: Vector3,
        addPosition: Vector3,
        bloomDelay: number
    ): ActionsSequenceSystem.SequenceBuilder[] {
        const bloomPosition = startPosition.add(addPosition)
        const fireworksBallSequence = new utils.ActionsSequenceSystem.SequenceBuilder()
            .then(new MoveAction(fireworksBall, addPosition, startPosition, bloomDelay))
            .then(FadeOutAction(fireworksBall, 0.5, new Vector3(0, -2, 0)))
        const fireworksSequences = fireworksDots.map(dot => {
            const entity = dot.entity
            const wait = new MoveAction(entity, Vector3.Zero(), Vector3.Zero(), bloomDelay)
            const fireworksDotSequence = new utils.ActionsSequenceSystem.SequenceBuilder()
                .while(() => fireworksBall.alive && !wait.hasFinished)
                .then(wait)
                .endWhile()
                .then(FadeInAction(entity, 1, dot.position, bloomPosition)) // bloom
            return fadeOutWithBlink(entity, fireworksDotSequence)
        })
        return [fireworksBallSequence].concat(fireworksSequences)
    }
}

class FireworksDot {
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

export { FireworksSequenceBuilder, FireworksDot }