describe('GaugeChart Atom Module', () => {
  it('should exist', () => {
    expect(D3Dash.GaugeChart).not.to.eql(undefined);
  });
  describe('build', () => {
    var div = document.createElement('div');
    div.className = 'gaugeChart';
    document.getElementsByTagName('body')[0].appendChild(div);
    var lineChart = D3Dash.GaugeChart.build('.gaugeChart', [['data1', 10]]);

    it('should generate a chart object', () => {
      expect(typeof lineChart).to.eql('object');
    });

    it('should generate chart html', () => {
      // Later expect(lineChart.element).to.eql(expectedHtml);
    });

  });

});
