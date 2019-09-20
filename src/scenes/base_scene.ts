/// <reference path="../config/index.ts" />
import { Dome, Staircase, Landing, Corridor } from '../objects/index'

export function CreateBaseScene() {
  new Dome()
  new Staircase()
  new Corridor()

  const landing = new Landing()
  landing.linkTrigger()
}