var orm = require("../config/orm.js");

var burgerQueries = {
  show: function (cb) {
    orm.showDaBurgers('tableName', function (res) {
      cb(res);
    });
  },
  add: function (burgerName, cb) {
    orm.addDaBurger(burgerName, function (res){
      cb(res);
    });
  },
  eat: function (burgerId, cb) {
    orm.eatDaBurger(burgerId, function (res){
      cb(res);
    })
  }
};

module.exports = burgerQueries;