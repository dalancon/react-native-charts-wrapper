import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, processColor
} from 'react-native';

import { BarChart } from 'react-native-charts-wrapper';

class StackedBarChartScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      chartDescription: {
        text: '本周工时',
        textColor: '#7f7f7f',
        textSize: 12,
        positionX: 10,
        positionY: 0,
      },
      animation: {
        easingX: 'Linear',
        easingY: 'Linear',
        durationX: 1000,
        durationY: 1000,
      },
      legend: {
        enabled: true,
        textSize: 14,
        form: "SQUARE",
        formSize: 14,
        xEntrySpace: 5,
        yEntrySpace: 5,
        wordWrapEnabled: true,
        position: 'ABOVE_CHART_RIGHT',
        xOffset: 0,
        formToTextSpace: 5,
      },
      yAxis: {
        left: {
          textSize: 13,
          textColor: processColor('#CECECE'),
          // 控制y轴的数值线样式
          gridColor: processColor('#FDFBEF'),
          gridLineWidth: 1,
          drawAxisLine: false,
          spaceTop: 5,
          // 控制x轴文字
          spaceBottom: 5,
          // 控制x轴线的样式
          zeroLine: {
            lineColor: processColor('#e5e5e5'),
            lineWidth: 1,
            enabled: false,
          },
          drawTopYLabelEntryEnabled: false,
          labelCount: 5,
        },
        right: {
          drawGridLines: false,
          enabled: false,
        },
      },
      data: {
        dataSets: [{
          values: [{ y: [0, 0, 2] }, { y: [1, 0, 8] }, { y: [3, 0, 5] }, { y: [0, 0, 10] }, { y: [0, 0, 10] }, { y: [0, 0, 10] }, { y: [0, 5, 0] }],
          label: '',
          config: {
            colors: [processColor('#14BE4B'), processColor('#F9BF13'), processColor('#129CF5')],
            stackLabels: ['Engineering', 'Sales', 'Marketing'],
            // 柱子上的文字样式
            valueTextSize: 6,
            valueTextColor: processColor('#FFFFFF'),
            //筛选本地数据0 的显示屏蔽
            valueFormatter: '###,###,###,##0.0',
          }
        }],
        config: {
          barWidth: 0.5,
        }
      },
      xAxis: {
        position: 'BOTTOM',
        textSize: 12,
        textColor: processColor('#cecece'),
        drawGridLines: false,
        drawAxisLine: false,
        spaceBetweenLabels: 1,
        valueFormatter: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisLineWidth: StyleSheet.hairlineWidth,
        axisLineColor: processColor('#e5e5e5'),
        gridLineWidth: 1,
      }

    };
  }

  handleSelect(event) {
    let entry = event.nativeEvent
    if (entry == null) {
      this.setState({ ...this.state, selectedEntry: null })
    } else {
      this.setState({ ...this.state, selectedEntry: JSON.stringify(entry) })
    }
  }

  render() {
    return (
        <BarChart
          style={styles.chart}
          chartDescription={this.state.chartDescription}
          xAxis={this.state.xAxis}
          yAxis={this.state.yAxis}
          data={this.state.data}
          legend={this.state.legend}
          doubleTapToZoomEnabled={false}
          touchEnabled={false}
          chartBackgroundColor={processColor('#eeeeee')}
          scaleXEnabled={false}
          scaleYEnabled={false}
          drawValueAboveBar={false}
          animation={this.state.animation}
          
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  chart: {
    height: 220,
  }
});


export default StackedBarChartScreen;
