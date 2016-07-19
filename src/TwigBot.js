'use strict'

let Bot = require('slackbots')

class TwigBot extends Bot {
  constructor (token) {
    if (!token) {
      throw new Error('Bot token should not be null')
    }
    super({ token: token, name: 'twig' })

    this.on('start', () => this.sendMessage('I am on!'))
  }

  sendMessage (message) {
    this.postMessageToChannel('general', `<!here>: ${message}`)
  }
}

module.exports = TwigBot
