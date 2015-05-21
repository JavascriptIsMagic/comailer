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
    @__proto__ = @nodemailer = nodemailer = createTransport transport
    for own name, method of Nodemailer::
      do (name) =>
        @[name] = (args...) -> (callback) ->
            nodemailer[name] args..., callback

module.exports = new Comailer()
