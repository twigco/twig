'use strict'

let expect = require('chai').expect;
let TwigBot = require('../src/TwigBot')

describe("TwigBot", function() {
  describe("Constructor", function() {
    it("should throw error if token is null", function() {
      expect(() => new TwigBot()).to.throw('Bot token must not be null or empty')
    })

    it("should throw error if token is empty string", function() {
      expect(() => new TwigBot('')).to.throw('Bot token must not be null or empty')
    })
  })
})