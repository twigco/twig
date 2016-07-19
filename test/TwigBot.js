'use strict'

let expect = require('chai').expect
let TwigBot = require('../src/TwigBot')

describe('TwigBot', () => {
  describe('Constructor', () => {
    it('should throw error if token is not supplied', () => {
      expect(() => new TwigBot()).to.throw('Bot token should not be null')
    })
  })

  describe('sendMessage', () => {
    it('should send message', () => {
      let sentChannel, sentMessage

      let twigBot = new TwigBot(process.env.SLACK_TOKEN)
      twigBot.postMessageToChannel = (channel, message) => {
        sentChannel = channel
        sentMessage = message
      }

      twigBot.sendMessage('message')

      expect(sentChannel).to.equal('general')
      expect(sentMessage).to.equal('<!here>: message')
    })
  })
})
