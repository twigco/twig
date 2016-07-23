'use strict'

const CronJob = require('cron').CronJob

const schedules = [
  {
    cron: '00 08 * * 1-5',
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
      new CronJob(schedule.cron, () => { // eslint-disable-line no-new
        this.messageSender.sendMessage(schedule.message)
      }, null, true, 'America/Sao_Paulo')
    })
  }
}

module.exports = MessageScheduler
