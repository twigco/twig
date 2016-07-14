'use strict'

let TwigBot = require('./TwigBot')

let token = process.env.BOT_TOKEN

try {
  let twigBot = new TwigBot(token)
  twigBot.run()
} catch (e) {
  console.log(e)
  process.exit(1)
}
