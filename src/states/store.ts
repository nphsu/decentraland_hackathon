let score: number = 0
let records: number[] = new Array()

export function getScore() {
  return score
}

export function addScore(point = 1) {
  score += point
}

export function saveRecord(score: number) {
  records.push(score)
}

export function getRecords() {
  log('check records')
  log(records)
  return records
}