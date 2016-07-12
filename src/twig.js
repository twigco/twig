'use strict'

let Bot = require('slackbots')

class TwigBot extends Bot {
  constructor(token) {
    super({ token: token, name: 'Twig' })
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