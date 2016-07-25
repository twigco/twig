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
      'text': 'Como foram suas *wins* ?',
      'attachments': [
        {
          'text': 'Jogar xadrez com o papa',
          'fallback': 'Você não poderá interagir com suas daily wins.',
          'callback_id': 'daily_win_1',
          'color': '#3AA3E3',
          'attachment_type': 'default',
          'actions': [
            {
              'name': 'ok',
              'text': 'Ok',
              'style': 'primary',
              'type': 'button',
              'value': 'ok'
            },
            {
              'name': 'no',
              'text': 'Não rolou',
              'type': 'button',
              'value': 'no',
              'style': 'danger'
            }
          ]
        },
        {
          'text': 'Não quebrar a build',
          'fallback': 'Você não poderá interagir com suas daily wins.',
          'callback_id': 'daily_win_2',
          'color': '#3AA3E3',
          'attachment_type': 'default',
          'actions': [
            {
              'name': 'ok',
              'text': 'Ok',
              'style': 'primary',
              'type': 'button',
              'value': 'ok'
            },
            {
              'name': 'no',
              'text': 'Não rolou',
              'type': 'button',
              'value': 'no',
              'style': 'danger'
            }
          ]
        },
        {
          'text': 'Comer almoço',
          'fallback': 'Você não poderá interagir com suas daily wins.',
          'callback_id': 'daily_win_3',
          'color': '#3AA3E3',
          'attachment_type': 'default',
          'actions': [
            {
              'name': 'ok',
              'text': 'Ok',
              'style': 'primary',
              'type': 'button',
              'value': 'ok'
            },
            {
              'name': 'no',
              'text': 'Não rolou',
              'type': 'button',
              'value': 'no',
              'style': 'danger'
            }
          ]
        }
      ]
    }
    this.postMessageToChannel('general', `<!here>: ${message}`, params)
  }
}

module.exports = TwigBot
