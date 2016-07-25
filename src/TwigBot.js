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
    var params = {
      'text': 'Would you like to play a game?',
      'attachments': [
        {
          'text': 'Choose a game to play',
          'fallback': 'You are unable to choose a game',
          'callback_id': 'wopr_game',
          'color': '#3AA3E3',
          'attachment_type': 'default',
          'actions': [
            {
              'name': 'chess',
              'text': 'Chess',
              'type': 'button',
              'value': 'chess'
            },
            {
              'name': 'maze',
              'text': "Falken's Maze",
              'type': 'button',
              'value': 'maze'
            },
            {
              'name': 'war',
              'text': 'Thermonuclear War',
              'style': 'danger',
              'type': 'button',
              'value': 'war',
              'confirm': {
                'title': 'Are you sure?',
                'text': "Wouldn't you prefer a good game of chess?",
                'ok_text': 'Yes',
                'dismiss_text': 'No'
              }
            }
          ]
        }
      ]
    }
    this.postMessageToChannel('general', `<!here>: ${message}`, params)
  }
}

module.exports = TwigBot
