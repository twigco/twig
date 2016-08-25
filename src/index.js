'use strict'

const TwigBot = require('./TwigBot')
const MessageScheduler = require('./MessageScheduler')
const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URI)

const app = koa()
const port = process.env.PORT || 3000
const token = process.env.SLACK_TOKEN

app.use(bodyParser())
app.use(function * () {
  this.body = { hello: 'world!' }
})
app.on('error', err => console.error('server error', err))
app.listen(port)

console.log(`Listening on port ${port}`)

let twigBot = new TwigBot(token)
let messageScheduler = new MessageScheduler(twigBot)
messageScheduler.run()
