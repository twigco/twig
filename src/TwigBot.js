'use strict'

let Bot = require('slackbots')

class TwigBot extends Bot {
  constructor(token) {
    if (!token)
      throw new Error('Bot token must not be null')

    super({ token: token, name: 'twig' })
  }

  run() {
    this.on('start', this.onStart)
    this.on('message', this.onMessage)
  }

  onStart() {
    this.postMessageToChannel('general', 'Hey general!');
  }

  onMessage() {

  }
}

module.exports = TwigBot