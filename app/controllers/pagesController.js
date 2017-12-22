var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var pagesController = new Controller();

pagesController.main = function() {
  this.title = 'Gustavo Audio';
  this.render();
}

module.exports = pagesController;
