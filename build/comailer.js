(function() {
  'use strict';
  var Comailer, Nodemailer, createTransport,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    slice = [].slice;

  createTransport = (require('nodemailer')).createTransport;

  Nodemailer = createTransport(true).constructor;

  module.exports = Comailer = (function(superClass) {
    extend(Comailer, superClass);

    Comailer.Nodemailer = Nodemailer;

    Comailer.createTransport = function(transport) {
      return new Comailer(transport);
    };

    function Comailer(transport) {
      var method, name;
      if (!(this instanceof Comailer)) {
        return new Comailer(transport);
      }
      transport = this.transport = this.__proto__ = createTransport(transport);
      for (name in transport) {
        method = transport[name];
        if (name !== 'transport') {
          if (typeof method === 'function') {
            (function(_this) {
              return (function(name) {
                return _this[name] = function() {
                  var args;
                  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
                  return function(callback) {
                    return transport[name].apply(transport, slice.call(args).concat([callback]));
                  };
                };
              });
            })(this)(name);
          }
        }
      }
    }

    return Comailer;

  })(Nodemailer);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWFpbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLEVBQUEsWUFBQSxDQUFBO0FBQUEsTUFBQSxxQ0FBQTtJQUFBOztvQkFBQTs7QUFBQSxFQUdBLGVBQUEsR0FBa0IsQ0FBQyxPQUFBLENBQVEsWUFBUixDQUFELENBQXNCLENBQUMsZUFIekMsQ0FBQTs7QUFBQSxFQUlBLFVBQUEsR0FBYSxlQUFBLENBQWdCLElBQWhCLENBQW9CLENBQUMsV0FKbEMsQ0FBQTs7QUFBQSxFQU9BLE1BQU0sQ0FBQyxPQUFQLEdBQXVCO0FBQ3JCLGdDQUFBLENBQUE7O0FBQUEsSUFBQSxRQUFDLENBQUEsVUFBRCxHQUFjLFVBQWQsQ0FBQTs7QUFBQSxJQUNBLFFBQUMsQ0FBQSxlQUFELEdBQW1CLFNBQUMsU0FBRCxHQUFBO2FBQ2IsSUFBQSxRQUFBLENBQVMsU0FBVCxFQURhO0lBQUEsQ0FEbkIsQ0FBQTs7QUFHYSxJQUFBLGtCQUFDLFNBQUQsR0FBQTtBQUNYLFVBQUEsWUFBQTtBQUFBLE1BQUEsSUFBQSxDQUFBLENBQU8sSUFBQSxZQUFhLFFBQXBCLENBQUE7QUFDRSxlQUFXLElBQUEsUUFBQSxDQUFTLFNBQVQsQ0FBWCxDQURGO09BQUE7QUFBQSxNQUVBLFNBQUEsR0FBWSxJQUFDLENBQUEsU0FBRCxHQUFhLElBQUMsQ0FBQSxTQUFELEdBQWEsZUFBQSxDQUFnQixTQUFoQixDQUZ0QyxDQUFBO0FBR0EsV0FBQSxpQkFBQTtpQ0FBQTtZQUFtQyxJQUFBLEtBQVU7QUFDM0MsVUFBQSxJQUFHLE1BQUEsQ0FBQSxNQUFBLEtBQWlCLFVBQXBCO0FBQ0UsWUFBRyxDQUFBLFNBQUEsS0FBQSxHQUFBO3FCQUFBLENBQUEsU0FBQyxJQUFELEdBQUE7dUJBQ0QsS0FBRSxDQUFBLElBQUEsQ0FBRixHQUFVLFNBQUEsR0FBQTtBQUFhLHNCQUFBLElBQUE7QUFBQSxrQkFBWiw0REFBWSxDQUFBO3lCQUFBLFNBQUMsUUFBRCxHQUFBOzJCQUNuQixTQUFVLENBQUEsSUFBQSxDQUFWLGtCQUFnQixXQUFBLElBQUEsQ0FBQSxRQUFTLENBQUEsUUFBQSxDQUFULENBQWhCLEVBRG1CO2tCQUFBLEVBQWI7Z0JBQUEsRUFEVDtjQUFBLENBQUEsRUFBQTtZQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBSCxDQUFJLElBQUosQ0FBQSxDQURGOztTQURGO0FBQUEsT0FKVztJQUFBLENBSGI7O29CQUFBOztLQURzQyxXQVB4QyxDQUFBO0FBQUEiLCJmaWxlIjoiY29tYWlsZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbiMgRG9pbmcgc29tZSB3aXphcmRyeSB0byBnZXQgdGhlIE5vZGVtYWlsZXIgY2xhc3MgY29uc3RydWN0b3JcclxuY3JlYXRlVHJhbnNwb3J0ID0gKHJlcXVpcmUgJ25vZGVtYWlsZXInKS5jcmVhdGVUcmFuc3BvcnRcclxuTm9kZW1haWxlciA9IGNyZWF0ZVRyYW5zcG9ydCh5ZXMpLmNvbnN0cnVjdG9yXHJcblxyXG4jIENvbWFpbGVyIGNsYXNzIGFjY2VwdHMgYSBOb2RlbWFpbGVyIFRyYW5zcG9ydCwgYW5kIHdyYXBzIGFsbCBmdW5jdGlvbnMgdG8gcmV0dXJuIHRodW5rcyBpbnN0ZWFkLlxyXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIENvbWFpbGVyIGV4dGVuZHMgTm9kZW1haWxlclxyXG4gIEBOb2RlbWFpbGVyID0gTm9kZW1haWxlclxyXG4gIEBjcmVhdGVUcmFuc3BvcnQgPSAodHJhbnNwb3J0KSAtPlxyXG4gICAgbmV3IENvbWFpbGVyIHRyYW5zcG9ydFxyXG4gIGNvbnN0cnVjdG9yOiAodHJhbnNwb3J0KSAtPlxyXG4gICAgdW5sZXNzIEAgaW5zdGFuY2VvZiBDb21haWxlclxyXG4gICAgICByZXR1cm4gbmV3IENvbWFpbGVyIHRyYW5zcG9ydFxyXG4gICAgdHJhbnNwb3J0ID0gQHRyYW5zcG9ydCA9IEBfX3Byb3RvX18gPSBjcmVhdGVUcmFuc3BvcnQgdHJhbnNwb3J0XHJcbiAgICBmb3IgbmFtZSwgbWV0aG9kIG9mIHRyYW5zcG9ydCB3aGVuIG5hbWUgaXNudCAndHJhbnNwb3J0J1xyXG4gICAgICBpZiB0eXBlb2YgbWV0aG9kIGlzICdmdW5jdGlvbidcclxuICAgICAgICBkbyAobmFtZSkgPT5cclxuICAgICAgICAgIEBbbmFtZV0gPSAoYXJncy4uLikgLT4gKGNhbGxiYWNrKSAtPlxyXG4gICAgICAgICAgICAgIHRyYW5zcG9ydFtuYW1lXSBhcmdzLi4uLCBjYWxsYmFja1xyXG4iXX0=