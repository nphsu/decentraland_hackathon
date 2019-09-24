/// <reference path="../config/index.ts" />
import { Dome, Staircase, Landing, Corridor } from '../objects/index'
import { SmallStar } from '../particles/index'

export function CreateBaseScene() {
  new Dome()
  new Staircase()
  new Corridor()

  const landing = new Landing()
  landing.linkTrigger()

  new SmallStar(new Vector3(30, 35, 7.5))
  new SmallStar(new Vector3(40, 25, 6.5))
  new SmallStar(new Vector3(35, 20, 5.5))
  new SmallStar(new Vector3(40, 25, 8.5))
  new SmallStar(new Vector3(35, 20, 9.5))

  new SmallStar(new Vector3(15, 35, 12))
  new SmallStar(new Vector3(10, 30, 15))
  new SmallStar(new Vector3(20, 20, 1))
  new SmallStar(new Vector3(25, 25, 2))
  new SmallStar(new Vector3(15, 20, 3))

  new SmallStar(new Vector3(15, 20, 12))
  new SmallStar(new Vector3(10, 15, 15))
  new SmallStar(new Vector3(25, 44, 1))
  new SmallStar(new Vector3(21, 43, 2))
  new SmallStar(new Vector3(20, 40, 3))
}