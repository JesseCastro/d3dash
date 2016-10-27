var config = require('./config.js');
var template = require('./templates/gaugeChart.ejs');
require('./stylesheets/gaugeChart.less');

module.exports = {
  build: function(selector, data, titleText) {
    return c3.generate({
      bindto: selector,
      data: {
        columns: data,
        type: 'gauge',
      },
      gauge: {},
      color: {
        pattern: ['#595AB7','#A57706','#D11C24','#C61C6F','#BD3613','#2176C7','#259286','#738A05'],
      },
    });
  },
};
