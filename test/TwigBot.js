'use strict'

let expect = require('chai').expect
let TwigBot = require('../src/TwigBot')

describe('TwigBot', () => {
  describe('Constructor', () => {
    it('should throw error if token is null', () => {
      expect(() => new TwigBot()).to.throw('Bot token must not be null or empty')
    })

    it('should throw error if token is empty string', () => {
      expect(() => new TwigBot('')).to.throw('Bot token must not be null or empty')
    })
  })
})