// import Taro, { Component } from "@tarojs/taro";
import { Component } from 'react'
import * as echarts from "./ec-canvas/echarts";

function setChartData(chart, data) {
  let option = {
    series: [
      {
        name: '访问来源',
        type: 'pie',
        center: ['50%', '50%'],
        radius: [0, '60%'],
        data: data,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  chart.setOption(option);
}

export default class PieChart extends Component {
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
    // console.log(this, ';this')
    // console.log(this.Chart, data, 'this.Chart')
    // this.Chart.init((canvas, width, height) => {
    const chart = echarts.init(this.Chart, null, {
      width: this.Chart.width || 375,
      height: this.Chart.height || 750
    });
    setChartData(chart, data);
    return chart;
    // });
  }


  refChart = node => {
    this.Chart = node
  };

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
