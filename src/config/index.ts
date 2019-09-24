namespace Position {

  export const dome = new Vector3(25, 20, 7.5)
  export const staircase = new Vector3(-10, 0, 7.5)
  export const landing = new Vector3(33, 10, 7.5)
  export const recordBoard = new Vector3(40, 15, 7.5)
  export const recordBoardText = new Vector3(38, 15, 7.5)

  export const defaultPhoton = new Vector3(0, 0, 0)
  export const bluePhotonBase = new Vector3(30, 16, 4)
  export const redPhotonBase = new Vector3(35, 16, 7.5)
  export const greenPhotonBase = new Vector3(30, 16, 11)

  export const countdownBoard = new Vector3(40, 18, 7.5)
  // export const scoreBoard = new Vector3(40, )
}

namespace Rotate {
  export const recordBoardText = Quaternion.Euler(0, 90, 0)
}

namespace Scale {
  export const recordBoard = new Vector3(2, 2, 2)
  export const recordBoardText = new Vector3(0.8, 0.8, 0.8)
}