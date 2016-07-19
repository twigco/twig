'use strict'

let expect = require('chai').expect
let MessageScheduler = require('../src/MessageScheduler')

describe('MessageScheduler', () => {
  describe('run', () => {
    it('should send scheduled message', done => {
      let messages = []
      let messageSender = {
        sendMessage: message => messages.push(message)
      }

      let messageScheduler = new MessageScheduler(messageSender)
      messageScheduler.schedules = [{ cron: '* * * * * *', message: 'test message' }]

      messageScheduler.run()

      setTimeout(() => {
        expect(messages).to.contain('test message')
        done()
      }, 1100)
    })
  })
})
