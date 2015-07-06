var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
// var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  initialize: function(){
    this.on('creating', function(model, attrs, options){
      var newPass = bcrypt.hashSync(model.get('password'));
      model.set('password', newPass);
    });
  }
});

module.exports = User;

