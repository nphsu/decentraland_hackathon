import { addScore, saveRecord, getRecords, addRecordBoardEntity, deleteRecordBoardEntity } from '../states/store'

/// <reference path="../config/index.ts" />
export class RecordBoardText extends Entity {

  constructor() {
    super()
    engine.addEntity(this)
    deleteRecordBoardEntity()
    addRecordBoardEntity(this)
    this.addComponent(new Transform({ 
      position: Position.recordBoardText, 
      rotation: Rotate.recordBoardText, 
      scale: Scale.recordBoardText }))
    this.addComponent(new TextShape())
  }

  saveRecord(score: number): void {
    // TODO: if the size of the array exceeds 3, then removing
    const oldRecords = getRecords()
    if (oldRecords.length >= 3) {
      const min = Math.min(...oldRecords)
      const index = oldRecords.indexOf(min)
      oldRecords.splice(index, 1)
    }
    saveRecord(score)
    this.refresh()
    log('SAVE RECORD')
  }

  refresh(): void {
    const recordStr = getRecords()
      .sort((a, b) => b - a)
      .map((r, i) => {
        switch (i) {
          case 0:
            return `1st : ${r} point \n`
          case 1:
            return `2nd : ${r} point \n`
          case 2:
            return `3rd : ${r} point`
          default:
            log('error')
            break
        }
      }).join(' ')
    
    this.getComponent(TextShape).value = recordStr
  }
}