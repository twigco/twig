'use strict'

const TwigBot = require('./TwigBot')
const MessageScheduler = require('./MessageScheduler')

const token = process.env.SLACK_TOKEN

try {
  let twigBot = new TwigBot(token)
  let messageScheduler = new MessageScheduler(twigBot)

  messageScheduler.run()
} catch (e) {
  console.log(e)
  process.exit(1)
}
