var Datamap = require('../../../node_modules/datamaps/dist/datamaps.all.min.js');
var globalconf = require('../../conf/globalConf.js');
/*
 var config = require('./config.js');
 var template = require('./templates/barChart.ejs');
 require('./stylesheets/barChart.less');
 */
module.exports = {
  build: function(element, data) {
    var cscheme = 'cool';
    var values = data.map(function(obj){
      return obj[1];
    });
    var minVal = Math.min.apply(null, values);
    var maxVal = Math.max.apply(null, values);
    var colorScale = d3.scale.linear ()
      .domain ([minVal, maxVal])
      .range (globalconf.colorscale.twotone[cscheme]);
    var dataset = {};
    data.forEach(function(item){
      var iso = item[0];
      var value = item[1];
      dataset[iso] = {fillColor: colorScale(value), numberOfThings: value};
    });

    var map = new Datamap({
      element: document.querySelector(element),
      responsive: true,
      fills: {
        defaultFill: globalconf.colorscale.twotone[cscheme][0]
      },
      data: dataset,
      geographyConfig: {
        borderColor: '#708284',
        highlightBorderWidth: 2,
        highlightFillColor: globalconf.highlight[cscheme],
        highlightBorderColor: '#819090',
        // show desired information in tooltip
        popupTemplate: function(geo, data) {
          // don't show tooltip if country don't present in dataset
          if (!data) { return ['<div class="hoverinfo">',
            '<strong>', geo.properties.name, '</strong>',
            '<br>Count: <strong>0</strong>',
            '</div>'].join(''); }
          // tooltip content
          return ['<div class="hoverinfo">',
            '<strong>', geo.properties.name, '</strong>',
            '<br>Count: <strong>', data.numberOfThings, '</strong>',
            '</div>'].join('');
        },
      }
    });
    map.legend();
    window.addEventListener('resize', function() {
      map.resize();
    });
    return map;
  },
};
