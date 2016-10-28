var Datamap = require('../../../node_modules/datamaps/dist/datamaps.all.min.js');
var popup = require('./templates/popup.pug');
module.exports = {
  build: function(element, data) {
    var cscheme = 'warm';
    var values = data.map(function(obj) {
      return obj[1];
    });
    var minVal = Math.min.apply(null, values);
    var maxVal = Math.max.apply(null, values);
    var colorScale = d3.scale.linear ()
      .domain ([minVal, maxVal])
      .range (D3Dash.GlobalConf.colorscale.twotone[cscheme]);
    var dataset = {};
    data.forEach(function(item) {
      var iso = item[0];
      var value = item[1];
      dataset[iso] = {fillColor: colorScale(value), numberOfThings: value};
    });

    var map = new Datamap({
      element: document.querySelector(element),
      responsive: true,
      scope: 'usa',
      fills: {
        defaultFill: D3Dash.GlobalConf.colorscale.twotone[cscheme][0],
      },
      data: dataset,
      geographyConfig: {
        borderColor: '#708284',
        highlightBorderWidth: 2,
        highlightFillColor: D3Dash.GlobalConf.highlight[cscheme],
        highlightBorderColor: '#819090',
        popupTemplate: function(geo, data) {
          var locals = {
            name:  geo.properties.name,
            value: data.numberOfThings || 0,
          };
          return popup(locals);
        },
      },
    });
    map.legend();
    window.addEventListener('resize', function() {
      map.resize();
    });
    return map;
  },
};
