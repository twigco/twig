'use strict'

const mongoose = require('mongoose')

const WinSchema = mongoose.Schema({
  author: String,
  channel: String,
  win: String
})

module.exports = mongoose.model('Win', WinSchema)
