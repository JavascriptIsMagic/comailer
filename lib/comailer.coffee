'use strict'

# Doing some wizardry to get the Nodemailer class constructor
createTransport = (require 'nodemailer').createTransport
Nodemailer = createTransport(yes).constructor

# Comailer class accepts a Nodemailer Transport, and wraps all functions to return thunks instead.
module.exports = class Comailer extends Nodemailer
  @Nodemailer = Nodemailer
  @createTransport = (transport) ->
    new Comailer transport
  constructor: (transport) ->
    unless @ instanceof Comailer
      return new Comailer transport
    transport = @transport = @__proto__ = createTransport transport
    for name, method of transport when name isnt 'transport'
      if typeof method is 'function'
        do (name) =>
          @[name] = (args...) -> (callback) ->
              transport[name] args..., callback
