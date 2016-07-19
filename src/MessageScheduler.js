'use strict'

let cron = require('node-cron')

const schedules = [
  {
    cron: '0 8 * * 1-5',
    message: 'Bom dia pessoal! Quais são suas três vitórias de hoje?'
  },
  {
    cron: '30 17 * * 1-5',
    message: 'Bom tarde pessoal! Como foram suas três vitórias hoje?'
  }]

class MessageScheduler {
  constructor (messageSender) {
    this.schedules = schedules
    this.messageSender = messageSender
  }

  run () {
    this.schedules.forEach(schedule => {
      cron.schedule(schedule.cron, () => {
        this.messageSender.sendMessage(schedule.message)
      })
    })
  }
}

module.exports = MessageScheduler
