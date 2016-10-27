var config = require('./config.js');
var template = require('./templates/lineChart.ejs');
require('./stylesheets/lineChart.less');

module.exports = {
  build: function(selector, data) {
    return c3.generate({
      bindto: selector,
      data: {
        columns: data,
      },
      color: {
        pattern: ['#595AB7','#A57706','#D11C24','#C61C6F','#BD3613','#2176C7','#259286','#738A05'],
      },
    });
  },
};
