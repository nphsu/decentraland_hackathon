import { switchExplation } from "../game";

let score: number = 0
let records: number[] = new Array()
let tempEntites: Entity[] = new Array()
let recordBoardEntity: Entity
let hasStarted: boolean = false

export function getScore() {
  return score
}

export function addScore(point = 1) {
  score += point
}

export function saveRecord(score: number) {
  records.push(score)
}

export function getRecords(): number[] {
  log('check records')
  log(records)
  return records
}

export function getTempEntites(): Entity[] {
  return tempEntites
}

export function addTempEntity(entity) {
  tempEntites.push(entity)
}

export function deleteAllEntities() {
  tempEntites.forEach(e => engine.removeEntity(e))
}

export function addRecordBoardEntity(entity) {
  recordBoardEntity = entity
}

export function deleteRecordBoardEntity() {
  if (!!recordBoardEntity) {
    engine.removeEntity(recordBoardEntity)
  }
}

export function hasStartedGame(): boolean {
  return hasStarted
}

export function startGame() {
  score = 0
  hasStarted = true
  switchExplation(false)
}

export function finishGame() {
  hasStarted = false
  switchExplation(true)
}