// import Taro, { Component } from "@tarojs/taro";
import { Component } from 'react'
import * as echarts from "./ec-canvas/echarts";

function setChartData(chart, data) {
  let option = {
    xAxis: {},
    yAxis: {},
    series: [{
      symbolSize: 20,
      data: data,
      type: 'scatter'
    }]
  };
  chart.setOption(option);
}

export default class ScatterCharts extends Component {
  config = {
    usingComponents: {
      "ec-canvas": "./ec-canvas/ec-canvas"
    }
  };

  constructor(props) {
    super(props);
  }

  state = {
    ec: {
      lazyLoad: true
    }
  };

  refresh(data) {
    // this.Chart.init((canvas, width, height) => {
      const chart = echarts.init(this.Chart, null, {
        width: 375,
        height: 750
      });
      setChartData(chart, data);
      return chart;
    // });
  }

  refChart = node => (this.Chart = node);

  render() {
    return (
      <ec-canvas
        ref={this.refChart}
        canvas-id='mychart-area'
        ec={this.state.ec}
      />
    );
  }
}
