import utils from "../../node_modules/decentraland-ecs-utils/index"
import { ActionsSequenceSystem } from "../../node_modules/decentraland-ecs-utils/actionsSequenceSystem/actionsSequenceSystem";

import { MoveAction } from '../actions/index'
import { BluePhoton } from '../particles/index'

export class Literal {
  basePosition: Vector3

  constructor(basePosition: Vector3) {
    this.basePosition = basePosition
  }
  buildCover(photons: BluePhoton[]): ActionsSequenceSystem.SequenceBuilder {
    // const sequence = new utils.ActionsSequenceSystem.SequenceBuilder()
    // .then(new MoveAction(photons[0], new Vector3(20, 35, 7.5), this.basePosition))
    // .then(new MoveAction(photons[1], new Vector3(19, 39, 7.5), this.basePosition))
    // .then(new MoveAction(photons[2], new Vector3(21, 39, 7.5), this.basePosition))
    // .then(new MoveAction(photons[3], new Vector3(20, 39, 6.5), this.basePosition))
    // .then(new MoveAction(photons[4], new Vector3(20, 39, 8.5), this.basePosition))
    // .then(new MoveAction(photons[5], new Vector3(21, 39, 6.5), this.basePosition))
    // .then(new MoveAction(photons[6], new Vector3(19, 39, 6.5), this.basePosition))
    // .then(new MoveAction(photons[7], new Vector3(21, 39, 8.5), this.basePosition))
    // .then(new MoveAction(photons[8], new Vector3(19, 39, 8.5), this.basePosition))
    // .then(new MoveAction(photons[9], new Vector3(18, 38, 7.5), this.basePosition))
    // .then(new MoveAction(photons[10], new Vector3(22, 38, 7.5), this.basePosition))
    // .then(new MoveAction(photons[11], new Vector3(20, 38, 6.5), this.basePosition))
    // .then(new MoveAction(photons[12], new Vector3(17, 37, 6.5), this.basePosition))
    // .then(new MoveAction(photons[13], new Vector3(16, 36, 7.5), this.basePosition))
    // .then(new MoveAction(photons[14], new Vector3(20, 36, 5.5), this.basePosition))
    const sequence = new utils.ActionsSequenceSystem.SequenceBuilder()
    .then(new MoveAction(photons[0], new Vector3(3, 22, 7.5), this.basePosition))
    .then(new MoveAction(photons[1], new Vector3(6, 24, 7.5), this.basePosition))
    .then(new MoveAction(photons[2], new Vector3(9, 26, 7.5), this.basePosition))
    .then(new MoveAction(photons[3], new Vector3(12, 28, 7.5), this.basePosition))
    .then(new MoveAction(photons[4], new Vector3(15, 30, 7.5), this.basePosition))
    .then(new MoveAction(photons[5], new Vector3(18, 32, 7.5), this.basePosition))
    .then(new MoveAction(photons[6], new Vector3(21, 34, 7.5), this.basePosition))
    .then(new MoveAction(photons[7], new Vector3(24, 36, 7.5), this.basePosition))
    .then(new MoveAction(photons[8], new Vector3(27, 38, 7.5), this.basePosition))
    .then(new MoveAction(photons[9], new Vector3(30, 40, 7.5), this.basePosition))
    .then(new MoveAction(photons[10], new Vector3(33, 38, 7.5), this.basePosition))
    .then(new MoveAction(photons[11], new Vector3(36, 36, 7.5), this.basePosition))
    .then(new MoveAction(photons[12], new Vector3(39, 34, 7.5), this.basePosition))
    .then(new MoveAction(photons[13], new Vector3(42, 32, 7.5), this.basePosition))
    .then(new MoveAction(photons[14], new Vector3(45, 30, 7.5), this.basePosition))
    .then(new MoveAction(photons[15], new Vector3(48, 28, 7.5), this.basePosition))
    .then(new MoveAction(photons[16], new Vector3(51, 26, 7.5), this.basePosition))
    .then(new MoveAction(photons[17], new Vector3(54, 24, 7.5), this.basePosition))
    .then(new MoveAction(photons[18], new Vector3(57, 22, 7.5), this.basePosition))
    .then(new MoveAction(photons[19], new Vector3(60, 20, 7.5), this.basePosition))
    .then(new MoveAction(photons[20], new Vector3(21, 35, 6.5), this.basePosition))
    .then(new MoveAction(photons[21], new Vector3(22, 35, 6.5), this.basePosition))
    .then(new MoveAction(photons[22], new Vector3(23, 35, 6.5), this.basePosition))
    .then(new MoveAction(photons[23], new Vector3(24, 35, 6.5), this.basePosition))
    .then(new MoveAction(photons[24], new Vector3(25, 35, 6.5), this.basePosition))
    .then(new MoveAction(photons[25], new Vector3(26, 35, 6.5), this.basePosition))
    .then(new MoveAction(photons[26], new Vector3(27, 35, 6.5), this.basePosition))
    .then(new MoveAction(photons[27], new Vector3(28, 35, 6.5), this.basePosition))
    .then(new MoveAction(photons[28], new Vector3(29, 35, 6.5), this.basePosition))
    .then(new MoveAction(photons[29], new Vector3(30, 35, 6.5), this.basePosition))
    .then(new MoveAction(photons[30], new Vector3(11, 35, 6.5), this.basePosition))
    .then(new MoveAction(photons[31], new Vector3(12, 35, 6.5), this.basePosition))
    .then(new MoveAction(photons[32], new Vector3(13, 35, 6.5), this.basePosition))
    .then(new MoveAction(photons[33], new Vector3(14, 35, 6.5), this.basePosition))
    .then(new MoveAction(photons[34], new Vector3(15, 35, 6.5), this.basePosition))
    .then(new MoveAction(photons[35], new Vector3(16, 35, 6.5), this.basePosition))
    .then(new MoveAction(photons[36], new Vector3(17, 35, 6.5), this.basePosition))
    .then(new MoveAction(photons[37], new Vector3(18, 35, 6.5), this.basePosition))
    .then(new MoveAction(photons[38], new Vector3(19, 35, 6.5), this.basePosition))
    .then(new MoveAction(photons[39], new Vector3(20, 35, 6.5), this.basePosition))
    .then(new MoveAction(photons[40], new Vector3(11, 35, 8.5), this.basePosition))
    .then(new MoveAction(photons[41], new Vector3(12, 35, 8.5), this.basePosition))
    .then(new MoveAction(photons[42], new Vector3(13, 35, 8.5), this.basePosition))
    .then(new MoveAction(photons[43], new Vector3(14, 35, 8.5), this.basePosition))
    .then(new MoveAction(photons[44], new Vector3(15, 35, 8.5), this.basePosition))
    .then(new MoveAction(photons[45], new Vector3(16, 35, 8.5), this.basePosition))
    .then(new MoveAction(photons[46], new Vector3(17, 35, 8.5), this.basePosition))
    .then(new MoveAction(photons[47], new Vector3(18, 35, 8.5), this.basePosition))
    .then(new MoveAction(photons[48], new Vector3(19, 35, 8.5), this.basePosition))
    .then(new MoveAction(photons[49], new Vector3(20, 35, 8.5), this.basePosition))
    .then(new MoveAction(photons[50], new Vector3(21, 35, 8.5), this.basePosition))
    .then(new MoveAction(photons[51], new Vector3(22, 35, 8.5), this.basePosition))
    .then(new MoveAction(photons[52], new Vector3(23, 35, 8.5), this.basePosition))
    .then(new MoveAction(photons[53], new Vector3(24, 35, 8.5), this.basePosition))
    .then(new MoveAction(photons[54], new Vector3(25, 35, 8.5), this.basePosition))
    .then(new MoveAction(photons[55], new Vector3(26, 35, 8.5), this.basePosition))
    .then(new MoveAction(photons[56], new Vector3(27, 35, 8.5), this.basePosition))
    .then(new MoveAction(photons[57], new Vector3(28, 35, 8.5), this.basePosition))
    .then(new MoveAction(photons[58], new Vector3(29, 35, 8.5), this.basePosition))
    .then(new MoveAction(photons[59], new Vector3(30, 35, 8.5), this.basePosition))
    .then(new MoveAction(photons[60], new Vector3(21, 35, 5.5), this.basePosition))
    .then(new MoveAction(photons[61], new Vector3(22, 35, 5.5), this.basePosition))
    .then(new MoveAction(photons[62], new Vector3(23, 35, 5.5), this.basePosition))
    .then(new MoveAction(photons[63], new Vector3(24, 35, 5.5), this.basePosition))
    .then(new MoveAction(photons[64], new Vector3(25, 35, 5.5), this.basePosition))
    .then(new MoveAction(photons[65], new Vector3(26, 35, 5.5), this.basePosition))
    .then(new MoveAction(photons[66], new Vector3(27, 35, 5.5), this.basePosition))
    .then(new MoveAction(photons[67], new Vector3(28, 35, 5.5), this.basePosition))
    .then(new MoveAction(photons[68], new Vector3(29, 35, 5.5), this.basePosition))
    .then(new MoveAction(photons[69], new Vector3(30, 35, 5.5), this.basePosition))
    .then(new MoveAction(photons[70], new Vector3(11, 35, 5.5), this.basePosition))
    .then(new MoveAction(photons[71], new Vector3(12, 35, 5.5), this.basePosition))
    .then(new MoveAction(photons[72], new Vector3(13, 35, 5.5), this.basePosition))
    .then(new MoveAction(photons[73], new Vector3(14, 35, 5.5), this.basePosition))
    .then(new MoveAction(photons[74], new Vector3(15, 35, 5.5), this.basePosition))
    .then(new MoveAction(photons[75], new Vector3(16, 35, 5.5), this.basePosition))
    .then(new MoveAction(photons[76], new Vector3(17, 35, 5.5), this.basePosition))
    .then(new MoveAction(photons[77], new Vector3(18, 35, 5.5), this.basePosition))
    .then(new MoveAction(photons[78], new Vector3(19, 35, 5.5), this.basePosition))
    .then(new MoveAction(photons[79], new Vector3(20, 35, 5.5), this.basePosition))
    .then(new MoveAction(photons[80], new Vector3(11, 35, 9.5), this.basePosition))
    .then(new MoveAction(photons[81], new Vector3(12, 35, 9.5), this.basePosition))
    .then(new MoveAction(photons[82], new Vector3(13, 35, 9.5), this.basePosition))
    .then(new MoveAction(photons[83], new Vector3(14, 35, 9.5), this.basePosition))
    .then(new MoveAction(photons[84], new Vector3(15, 35, 9.5), this.basePosition))
    .then(new MoveAction(photons[85], new Vector3(16, 35, 9.5), this.basePosition))
    .then(new MoveAction(photons[86], new Vector3(17, 35, 9.5), this.basePosition))
    .then(new MoveAction(photons[87], new Vector3(18, 35, 9.5), this.basePosition))
    .then(new MoveAction(photons[88], new Vector3(19, 35, 9.5), this.basePosition))
    .then(new MoveAction(photons[89], new Vector3(20, 35, 9.5), this.basePosition))
    .then(new MoveAction(photons[90], new Vector3(21, 35, 9.5), this.basePosition))
    .then(new MoveAction(photons[91], new Vector3(22, 35, 9.5), this.basePosition))
    .then(new MoveAction(photons[92], new Vector3(23, 35, 9.5), this.basePosition))
    .then(new MoveAction(photons[93], new Vector3(24, 35, 9.5), this.basePosition))
    .then(new MoveAction(photons[94], new Vector3(25, 35, 9.5), this.basePosition))
    .then(new MoveAction(photons[95], new Vector3(26, 35, 9.5), this.basePosition))
    .then(new MoveAction(photons[96], new Vector3(27, 35, 9.5), this.basePosition))
    .then(new MoveAction(photons[97], new Vector3(28, 35, 9.5), this.basePosition))
    .then(new MoveAction(photons[98], new Vector3(29, 35, 9.5), this.basePosition))
    .then(new MoveAction(photons[99], new Vector3(30, 35, 9.5), this.basePosition))
    
    // .then(new MoveAction(photons[10], new Vector3(22, 35, 7.5), this.basePosition))
    // .then(new MoveAction(photons[11], new Vector3(20, 35, 6.5), this.basePosition))
    // .then(new MoveAction(photons[12], new Vector3(17, 35, 6.5), this.basePosition))
    // .then(new MoveAction(photons[13], new Vector3(16, 35, 7.5), this.basePosition))
    // .then(new MoveAction(photons[14], new Vector3(20, 35, 5.5), this.basePosition))

    return sequence
  }

  buildAFrom(photons: BluePhoton[]): ActionsSequenceSystem.SequenceBuilder {
    // TODO: if photons.length < 15
    const sequence = new utils.ActionsSequenceSystem.SequenceBuilder()
      .while(() => null)
      .then(new MoveAction(photons[0], new Vector3(1, 0, 1), this.basePosition))
      .endWhile()

      //////////////////////////////////////////////
      // A
      //////////////////////////////////////////////

      .then(new MoveAction(photons[0], new Vector3(2, 1, 1), this.basePosition))
      .then(new MoveAction(photons[1], new Vector3(2, 2, 1.5), this.basePosition))
      .then(new MoveAction(photons[2], new Vector3(2, 3, 2), this.basePosition))
      .then(new MoveAction(photons[3], new Vector3(2, 4, 2.5), this.basePosition))
      .then(new MoveAction(photons[4], new Vector3(2, 3, 2.5), this.basePosition))
      .then(new MoveAction(photons[5], new Vector3(2, 5, 3), this.basePosition))
      .then(new MoveAction(photons[6], new Vector3(2, 4, 3.5), this.basePosition))
      .then(new MoveAction(photons[7], new Vector3(2, 3, 3.5), this.basePosition))
      .then(new MoveAction(photons[8], new Vector3(2, 3, 4), this.basePosition))
      .then(new MoveAction(photons[9], new Vector3(2, 2, 4.5), this.basePosition))
      .then(new MoveAction(photons[10], new Vector3(2, 1, 5), this.basePosition))
      .then(new MoveAction(photons[11], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[12], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[13], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[14], new Vector3(0, 0, 0), this.basePosition))
    return sequence
  }

  buildCFrom(photons: BluePhoton[]): ActionsSequenceSystem.SequenceBuilder {
    // TODO: if photons.length < 15
    const sequence = new utils.ActionsSequenceSystem.SequenceBuilder()
      .while(() => null)
      .then(new MoveAction(photons[0], new Vector3(1, 0, 1), this.basePosition))
      .endWhile()

      //////////////////////////////////////////////
      // C
      //////////////////////////////////////////////

      .then(new MoveAction(photons[0], new Vector3(2, 1, 1), this.basePosition))
      .then(new MoveAction(photons[1], new Vector3(2, 2, 1), this.basePosition))
      .then(new MoveAction(photons[2], new Vector3(2, 3, 1), this.basePosition))
      .then(new MoveAction(photons[3], new Vector3(2, 4, 1), this.basePosition))
      .then(new MoveAction(photons[4], new Vector3(2, 5, 1), this.basePosition))
      .then(new MoveAction(photons[5], new Vector3(2, 5, 2), this.basePosition))
      .then(new MoveAction(photons[6], new Vector3(2, 3, 2), this.basePosition))
      .then(new MoveAction(photons[7], new Vector3(2, 1, 2), this.basePosition))
      .then(new MoveAction(photons[8], new Vector3(2, 1, 3), this.basePosition))
      .then(new MoveAction(photons[9], new Vector3(2, 3, 3), this.basePosition))
      .then(new MoveAction(photons[10], new Vector3(2, 5, 3), this.basePosition))
      .then(new MoveAction(photons[11], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[12], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[13], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[14], new Vector3(0, 0, 0), this.basePosition))
    return sequence
  }

  buildDFrom(photons: BluePhoton[]): ActionsSequenceSystem.SequenceBuilder {
    // TODO: if photons.length < 15
    const sequence = new utils.ActionsSequenceSystem.SequenceBuilder()
      .while(() => null)
      .then(new MoveAction(photons[0], new Vector3(1, 0, 1), this.basePosition))
      .endWhile()

      //////////////////////////////////////////////
      // D
      //////////////////////////////////////////////

      .then(new MoveAction(photons[0], new Vector3(2, 1, 1), this.basePosition))
      .then(new MoveAction(photons[1], new Vector3(2, 2, 1), this.basePosition))
      .then(new MoveAction(photons[2], new Vector3(2, 3, 1), this.basePosition))
      .then(new MoveAction(photons[3], new Vector3(2, 4, 1), this.basePosition))
      .then(new MoveAction(photons[4], new Vector3(2, 5, 1), this.basePosition))
      .then(new MoveAction(photons[5], new Vector3(2, 5, 2), this.basePosition))
      .then(new MoveAction(photons[6], new Vector3(2, 1, 2), this.basePosition))
      .then(new MoveAction(photons[7], new Vector3(2, 4.5, 3), this.basePosition))
      .then(new MoveAction(photons[8], new Vector3(2, 2, 3), this.basePosition))
      .then(new MoveAction(photons[9], new Vector3(2, 3, 4), this.basePosition))
      .then(new MoveAction(photons[10], new Vector3(2, 4, 4), this.basePosition))
      .then(new MoveAction(photons[11], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[12], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[13], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[14], new Vector3(0, 0, 0), this.basePosition))
    return sequence
  }

  buildEFrom(photons: BluePhoton[]): ActionsSequenceSystem.SequenceBuilder {
    // TODO: if photons.length < 15
    const sequence = new utils.ActionsSequenceSystem.SequenceBuilder()
      .while(() => null)
      .then(new MoveAction(photons[0], new Vector3(1, 0, 1), this.basePosition))
      .endWhile()

      //////////////////////////////////////////////
      // E
      //////////////////////////////////////////////

      .then(new MoveAction(photons[0], new Vector3(2, 1, 1), this.basePosition))
      .then(new MoveAction(photons[1], new Vector3(2, 2, 1), this.basePosition))
      .then(new MoveAction(photons[2], new Vector3(2, 3, 1), this.basePosition))
      .then(new MoveAction(photons[3], new Vector3(2, 4, 1), this.basePosition))
      .then(new MoveAction(photons[4], new Vector3(2, 5, 1), this.basePosition))
      .then(new MoveAction(photons[5], new Vector3(2, 5, 2), this.basePosition))
      .then(new MoveAction(photons[6], new Vector3(2, 3, 2), this.basePosition))
      .then(new MoveAction(photons[7], new Vector3(2, 1, 2), this.basePosition))
      .then(new MoveAction(photons[8], new Vector3(2, 1, 3), this.basePosition))
      .then(new MoveAction(photons[9], new Vector3(2, 3, 3), this.basePosition))
      .then(new MoveAction(photons[10], new Vector3(2, 5, 3), this.basePosition))
      .then(new MoveAction(photons[11], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[12], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[13], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[14], new Vector3(0, 0, 0), this.basePosition))
    return sequence
  }

  buildNFrom(photons: BluePhoton[]): ActionsSequenceSystem.SequenceBuilder {
    // TODO: if photons.length < 15
    const sequence = new utils.ActionsSequenceSystem.SequenceBuilder()
      .while(() => null)
      .then(new MoveAction(photons[0], new Vector3(1, 0, 1), this.basePosition))
      .endWhile()

      //////////////////////////////////////////////
      // N
      //////////////////////////////////////////////

      .then(new MoveAction(photons[0], new Vector3(2, 1, 1), this.basePosition))
      .then(new MoveAction(photons[1], new Vector3(2, 2, 1), this.basePosition))
      .then(new MoveAction(photons[2], new Vector3(2, 3, 1), this.basePosition))
      .then(new MoveAction(photons[3], new Vector3(2, 4, 1), this.basePosition))
      .then(new MoveAction(photons[4], new Vector3(2, 5, 1), this.basePosition))
      .then(new MoveAction(photons[5], new Vector3(2, 4, 2), this.basePosition))
      .then(new MoveAction(photons[6], new Vector3(2, 3, 2.5), this.basePosition))
      .then(new MoveAction(photons[7], new Vector3(2, 2, 3.5), this.basePosition))
      .then(new MoveAction(photons[8], new Vector3(2, 1, 4), this.basePosition))
      .then(new MoveAction(photons[9], new Vector3(2, 2, 4), this.basePosition))
      .then(new MoveAction(photons[10], new Vector3(2, 3, 4), this.basePosition))
      .then(new MoveAction(photons[11], new Vector3(2, 4, 4), this.basePosition))
      .then(new MoveAction(photons[12], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[13], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[14], new Vector3(0, 0, 0), this.basePosition))
    return sequence
  }

  buildDECEN(photons: BluePhoton[]): ActionsSequenceSystem.SequenceBuilder {
    return new utils.ActionsSequenceSystem.SequenceBuilder()

      //////////////////////////////////////////////
      // D
      //////////////////////////////////////////////

      .then(new MoveAction(photons[0], new Vector3(2, 1, 1), this.basePosition))
      .then(new MoveAction(photons[1], new Vector3(2, 2, 1), this.basePosition))
      .then(new MoveAction(photons[2], new Vector3(2, 3, 1), this.basePosition))
      .then(new MoveAction(photons[3], new Vector3(2, 4, 1), this.basePosition))
      .then(new MoveAction(photons[4], new Vector3(2, 5, 1), this.basePosition))
      .then(new MoveAction(photons[5], new Vector3(2, 5, 2), this.basePosition))
      .then(new MoveAction(photons[6], new Vector3(2, 1, 2), this.basePosition))
      .then(new MoveAction(photons[7], new Vector3(2, 4.5, 3), this.basePosition))
      .then(new MoveAction(photons[8], new Vector3(2, 2, 3), this.basePosition))
      .then(new MoveAction(photons[9], new Vector3(2, 3, 4), this.basePosition))
      .then(new MoveAction(photons[10], new Vector3(2, 4, 4), this.basePosition))
      .then(new MoveAction(photons[11], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[12], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[13], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[14], new Vector3(0, 0, 0), this.basePosition))

      //////////////////////////////////////////////
      // E
      //////////////////////////////////////////////

      .then(new MoveAction(photons[0], new Vector3(2, 1, 1), this.basePosition))
      .then(new MoveAction(photons[1], new Vector3(2, 2, 1), this.basePosition))
      .then(new MoveAction(photons[2], new Vector3(2, 3, 1), this.basePosition))
      .then(new MoveAction(photons[3], new Vector3(2, 4, 1), this.basePosition))
      .then(new MoveAction(photons[4], new Vector3(2, 5, 1), this.basePosition))
      .then(new MoveAction(photons[5], new Vector3(2, 5, 2), this.basePosition))
      .then(new MoveAction(photons[6], new Vector3(2, 3, 2), this.basePosition))
      .then(new MoveAction(photons[7], new Vector3(2, 1, 2), this.basePosition))
      .then(new MoveAction(photons[8], new Vector3(2, 1, 3), this.basePosition))
      .then(new MoveAction(photons[9], new Vector3(2, 3, 3), this.basePosition))
      .then(new MoveAction(photons[10], new Vector3(2, 5, 3), this.basePosition))
      .then(new MoveAction(photons[11], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[12], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[13], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[14], new Vector3(0, 0, 0), this.basePosition))

      //////////////////////////////////////////////
      // C
      //////////////////////////////////////////////

      .then(new MoveAction(photons[0], new Vector3(2, 1, 1), this.basePosition))
      .then(new MoveAction(photons[1], new Vector3(2, 2, 1), this.basePosition))
      .then(new MoveAction(photons[2], new Vector3(2, 3, 1), this.basePosition))
      .then(new MoveAction(photons[3], new Vector3(2, 4, 1), this.basePosition))
      .then(new MoveAction(photons[4], new Vector3(2, 5, 1), this.basePosition))
      .then(new MoveAction(photons[5], new Vector3(2, 5, 2), this.basePosition))
      .then(new MoveAction(photons[6], new Vector3(2, 3, 2), this.basePosition))
      .then(new MoveAction(photons[7], new Vector3(2, 1, 2), this.basePosition))
      .then(new MoveAction(photons[8], new Vector3(2, 1, 3), this.basePosition))
      .then(new MoveAction(photons[9], new Vector3(2, 3, 3), this.basePosition))
      .then(new MoveAction(photons[10], new Vector3(2, 5, 3), this.basePosition))
      .then(new MoveAction(photons[11], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[12], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[13], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[14], new Vector3(0, 0, 0), this.basePosition))

      //////////////////////////////////////////////
      // E
      //////////////////////////////////////////////

      .then(new MoveAction(photons[0], new Vector3(2, 1, 1), this.basePosition))
      .then(new MoveAction(photons[1], new Vector3(2, 2, 1), this.basePosition))
      .then(new MoveAction(photons[2], new Vector3(2, 3, 1), this.basePosition))
      .then(new MoveAction(photons[3], new Vector3(2, 4, 1), this.basePosition))
      .then(new MoveAction(photons[4], new Vector3(2, 5, 1), this.basePosition))
      .then(new MoveAction(photons[5], new Vector3(2, 5, 2), this.basePosition))
      .then(new MoveAction(photons[6], new Vector3(2, 3, 2), this.basePosition))
      .then(new MoveAction(photons[7], new Vector3(2, 1, 2), this.basePosition))
      .then(new MoveAction(photons[8], new Vector3(2, 1, 3), this.basePosition))
      .then(new MoveAction(photons[9], new Vector3(2, 3, 3), this.basePosition))
      .then(new MoveAction(photons[10], new Vector3(2, 5, 3), this.basePosition))
      .then(new MoveAction(photons[11], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[12], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[13], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[14], new Vector3(0, 0, 0), this.basePosition))

      //////////////////////////////////////////////
      // N
      //////////////////////////////////////////////

      .then(new MoveAction(photons[0], new Vector3(2, 1, 1), this.basePosition))
      .then(new MoveAction(photons[1], new Vector3(2, 2, 1), this.basePosition))
      .then(new MoveAction(photons[2], new Vector3(2, 3, 1), this.basePosition))
      .then(new MoveAction(photons[3], new Vector3(2, 4, 1), this.basePosition))
      .then(new MoveAction(photons[4], new Vector3(2, 5, 1), this.basePosition))
      .then(new MoveAction(photons[5], new Vector3(2, 4, 2), this.basePosition))
      .then(new MoveAction(photons[6], new Vector3(2, 3, 2.5), this.basePosition))
      .then(new MoveAction(photons[7], new Vector3(2, 2, 3.5), this.basePosition))
      .then(new MoveAction(photons[8], new Vector3(2, 1, 4), this.basePosition))
      .then(new MoveAction(photons[9], new Vector3(2, 2, 4), this.basePosition))
      .then(new MoveAction(photons[10], new Vector3(2, 3, 4), this.basePosition))
      .then(new MoveAction(photons[11], new Vector3(2, 4, 4), this.basePosition))
      .then(new MoveAction(photons[12], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[13], new Vector3(0, 0, 0), this.basePosition))
      .then(new MoveAction(photons[14], new Vector3(0, 0, 0), this.basePosition))
  }
}