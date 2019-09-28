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

  export const initBox01 = new Vector3(-8, 3, 5)
  export const initBox02 = new Vector3(-8, 3, 11)
  export const initBox03 = new Vector3(-8, 9, 5)
  export const initBox04 = new Vector3(-8, 9, 11)
  export const initBox05 = new Vector3(-2, 9, 5)
  export const initBox06 = new Vector3(-2, 9, 11)
  // export const initBox07 = new Vector3(-2, 3, 5)
  export const initBox07 = new Vector3(-1, 16, 5)
  export const initBox08 = new Vector3(-2, 3, 11)
  export const initBox09 = new Vector3(4, 3, 5)
  export const initBox10 = new Vector3(4, 3, 11)
  export const initBox11 = new Vector3(4, 9, 5)
  export const initBox12 = new Vector3(4, 9, 11)
  export const initBox13 = new Vector3(4, 9, -1)

  export const initBox51 = new Vector3(4, 16, 4.5)
  export const initBox52 = new Vector3(4, 16, 11.5)
  export const initBox53 = new Vector3(4, 16, 4.5)
  export const initBox54 = new Vector3(4, 16, 11.5)
  export const initBox55 = new Vector3(4, 16, 4.5)
  export const initBox56 = new Vector3(-2, 9, 11.5)
  export const initBox57 = new Vector3(-2, 3, 4.5)
  export const initBox58 = new Vector3(-2, 3, 11.5)
  export const initBox59 = new Vector3(4, 3, 4.5)
  export const initBox60 = new Vector3(4, 3, 11.5)
  export const initBox61 = new Vector3(4, 9, 11.5)
  export const initBox62 = new Vector3(4, 9, 11.5)
  export const initBox63 = new Vector3(4, 3, 11.5)

  export const box01 = new Vector3(7, 3, 0)
  export const box02 = new Vector3(13, 3, -6)
  export const box03 = new Vector3(7, 9, -6)
  export const box04 = new Vector3(19, 3, -12)
  export const box05 = new Vector3(1, 3, -12)
  export const box06 = new Vector3(31, 3, -12)
  export const box07 = new Vector3(37, 9, -12)
  export const box08 = new Vector3(43, 3, -6)
  export const box09 = new Vector3(13, 27, -12)
  export const box10 = new Vector3(19, 33, -12)
  export const box11 = new Vector3(49, 3, -6)
  export const box12 = new Vector3(55, 3, 0)
  export const box13 = new Vector3(-5, 3, 0)
  
  export const box51 = new Vector3(7, 3, 15)
  export const box52 = new Vector3(13, 3, 21)
  export const box53 = new Vector3(7, 9, 21)
  export const box54 = new Vector3(1, 15, 27)
  export const box55 = new Vector3(19, 3, 27)
  export const box56 = new Vector3(31, 3, 27)
  export const box57 = new Vector3(37, 9, 27)
  export const box58 = new Vector3(43, 3, 21)
  export const box59 = new Vector3(43, 15, 27)
  export const box60 = new Vector3(49, 21, 27)
  export const box61 = new Vector3(49, 9, 21)
  export const box62 = new Vector3(55, 3, 15)
  export const box63 = new Vector3(-5, 3, 15)
  
}

namespace Rotate {
  export const recordBoardText = Quaternion.Euler(0, 90, 0)
}

namespace Scale {
  export const recordBoard = new Vector3(2, 2, 2)
  export const recordBoardText = new Vector3(0.8, 0.8, 0.8)
}