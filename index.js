'use strict'

let TwigBot = require('./src/twig')

let token = process.env.BOT_TOKEN

if (!token) {
  console.log('Bot token not set')
  process.exit(1)
}

let twigBot = new TwigBot(token)
twigBot.run()