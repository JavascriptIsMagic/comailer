# Ugly hack, why did you blackbox your class for no reason?!
createTransport = (require 'nodemailer').createTransport
Nodemailer = createTransport(yes).constructor

class Comailer extends Nodemailer
  @Nodemailer = Nodemailer
  @createTransport = (transport) ->
    new Comailer transport
  constructor: (transport) ->
    unless @ instanceof Comailer
      return new Comailer transport
    @__proto__ = @transport = transport = createTransport transport
    for name, method of transport when name isnt 'transport'
      if typeof method is 'function'
        do (name) =>
          @[name] = (args...) -> (callback) ->
              transport[name] args..., callback

module.exports = new Comailer()
