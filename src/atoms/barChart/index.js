module.exports = {
  build: function(selector, data) {
    var typeConf = {};
    for (var i = 0; i < data.length; i++) {
      typeConf[data[i][0]] = 'bar';
    }
    return c3.generate({
      bindto: selector,
      data: {
        columns: data,
        types: typeConf,
      },
      color: {
        pattern: ['#595AB7','#A57706','#D11C24','#C61C6F','#BD3613','#2176C7','#259286','#738A05'],
      },
    });
  },
};
