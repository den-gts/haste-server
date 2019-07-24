var winston = require('winston');

var AppHandler = function(store) {
  this.store = store;
};


AppHandler.prototype.health = function(response) {
      this.store.getConnected(function(ret) {
      	response.writeHead(200, { 'content-type': 'application/json' });
      	response.end(JSON.stringify({ connected: ret }));
      });

};

module.exports = AppHandler;