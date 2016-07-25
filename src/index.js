'use strict'

let koa = require('koa')
let bodyParser = require('koa-bodyparser')

const app = koa()
const port = process.env.PORT || 3000
app.use(bodyParser())

app.use(function * () {
  this.body = { hello: 'world!' }
  console.log(this.request.body)
})

app.on('error', err => console.error('server error', err))
app.listen(port)
console.log(`Listening on port ${port}`)
