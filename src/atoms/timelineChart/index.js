module.exports = {
  build: function(selector, dates, data) {
    var dateset = ['x'];
    for (var i = 0; i < dates.length; i++) {
      dateset.push(dates[i]);
    }
    var dataset = [dateset];
    for (var j = 0; j < data.length; j++) {
      dataset.push(data[j]);
    }

    var conf = {
      bindto: selector,
      data: {
        x: 'x',
        columns: dataset,
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%Y-%m-%d',
          },
        },
      },
      color: {
        pattern: ['#595AB7','#A57706','#D11C24','#C61C6F','#BD3613','#2176C7','#259286','#738A05'],
      },
    };
    return c3.generate(conf);
  },
};
