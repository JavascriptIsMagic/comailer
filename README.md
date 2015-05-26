# Comailer

A simple [CO](https://www.npmjs.com/package/co) wrapper around [![Nodemailer](https://raw.githubusercontent.com/andris9/Nodemailer/master/assets/nm_logo_200x136.png)](https://www.npmjs.com/package/nodemailer)

`yield` Nodemailer from co or koa!

CoffeeScript (is optional, see javascript below)
---
```coffeescript
    'use strict'
    co = require 'co'

    comailer = require 'comailer'
    transporter = comailer.createTransport
      service: 'gmail'
      auth:
        user: 'sender@gmail.com'
        pass: 'password'

    co ->
      # yielding can throw errors you could try/catch or bail out
      try

        result = yield transporter.sendMail
          from: 'sender@address'
          to: 'receiver@address'
          subject: 'hello'
          text: 'hello world!'

        console.log result
      catch error
        console.error error.stack

    # if you need to still need to call without yielding:
    thunkOfSendMail = transporter.sendMail
      from: 'sender@address'
      to: 'receiver@address'
      subject: 'hello'
      text: 'hello world!'
    #...
    thunkOfSendMail (error, result) ->
      if error
        console.error error.stack
      else
        console.log result
```

Javascript
---
```js
    'use strict'
    var co = require('co');

    var comailer = require('comailer');
    var transporter = comailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sender@gmail.com',
        pass: 'password'
      }
    });

    co(function* () {
      // yielding can throw errors you could try/catch or bail out
      try {

        var result = yield transporter.sendMail({
          from: 'sender@address',
          to: 'receiver@address',
          subject: 'hello',
          text: 'hello world!'
        });

        console.log(result);
      } catch (error) {
        console.error(error.stack);
      }
    });

    // if you need to still need to call without yielding using the returned thunk directly:
    thunkOfSendMail = transporter.sendMail({
      from: 'sender@address',
      to: 'receiver@address',
      subject: 'hello',
      text: 'hello world!'
    });
    //...
    thunkOfSendMail(function (error, result) {
      if (error) {
        console.error(error.stack);
      } else {
        console.log(result);
      }
    });
```
