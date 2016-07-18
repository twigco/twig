'use strict'

let expect = require('chai').expect
let MessageScheduler = require('../src/MessageScheduler')

describe('MessageScheduler', function() {
  describe('run', function() {
    it('should send message in schedules', function(done) {
      let messages = []
      let messageSender = {
        sendMessage: message => {
          console.log(message)
          messages.push(message)
        }
      }

      let messageScheduler = new MessageScheduler(messageSender)
      messageScheduler.schedules = [{ cron: '* * * * * *', message: 'test message' }]

      messageScheduler.run()

      setTimeout(function() {
        expect(messages).to.contain('test message')
        done()
      }, 1500);
    })
  })
})
