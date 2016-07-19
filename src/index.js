'use strict'

let TwigBot = require('./TwigBot')
let MessageScheduler = require('./MessageScheduler')

const token = process.env.BOT_TOKEN

try {
  let twigBot = new TwigBot(token)
  let messageScheduler = new MessageScheduler(twigBot)

  messageScheduler.run()
} catch (e) {
  console.log(e)
  process.exit(1)
}
