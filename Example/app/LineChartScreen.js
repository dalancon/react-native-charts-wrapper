import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, processColor
} from 'react-native';
import update from 'immutability-helper';

import { LineChart } from 'react-native-charts-wrapper';

class LineChartScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      data: {},
      animation: {
        easingX: 'Linear',
        durationX: 500,
      },
      legend: {
        enabled: true,
        textColor: processColor('blue'),
        textSize: 12,
        position: 'ABOVE_CHART_RIGHT',
        form: 'SQUARE',
        formSize: 14,
        xEntrySpace: 10,
        yEntrySpace: 5,
        formToTextSpace: 5,
        wordWrapEnabled: true,
        maxSizePercent: 0.5,
        // custom: {
        //   colors: [processColor('red'), processColor('blue'), processColor('green')],
        //   labels: ['Company X', 'Company Y', 'Company Dashed']
        // }
      },
      yAxis: {
        left: {
          textSize: 13,
          textColor: processColor('#CECECE'),
          // 控制y轴的数值线样式
          gridColor: processColor('#FDFBEF'),
          gridLineWidth: 1,
          // y轴左边线条样式
          // drawAxisLine: true,
          axisLineWidth: 1,
          axisLineColor: processColor('#3314BE4B'),
          spaceTop: 5,
          // 控制x轴文字
          spaceBottom: 5,
          // 控制x轴线的样式
          zeroLine: {
            lineColor: processColor('#14BE4B'),
            lineWidth: 1,
            enabled: true,
          },
          drawTopYLabelEntryEnabled: false,
          labelCount: 5,
        },
        right: {
          drawGridLines: false,
          enabled: false,
        },
      },
      xAxis: {
        position: 'BOTTOM',
        textSize: 12,
        textColor: processColor('#cecece'),
        drawGridLines: false,
        drawAxisLine: true,
        axisLineWidth: 1,
        axisLineColor: processColor('#3314BE4B'),
        spaceBetweenLabels: 1,
        // 控制X轴的数值线样式
        // gridColor: processColor('#FDFBEF'),
        // gridLineWidth: 1,
        valueFormatter: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7']
      },
      marker: {
        enabled: true,
        backgroundTint: processColor('teal'),
        markerColor: processColor('#F0C0FF8C'),
        textColor: processColor('white'),
      }
    };
  }

  componentDidMount() {
    this.setState(
      update(this.state, {
        data: {
          $set: {
            dataSets: [{
              values: [{ y: 100 }, { y: 110 }, { y: 105 }, { y: 115 }, { y: 50 }, { y: 65 }, { y: 105 }],
              label: 'Company X',
              config: {
                lineWidth: 2,
                drawCircles: true,
                //设置空心圆的大小
                // circleRadius: 3,
                circleColor: processColor('#14BE4B'),
                highlightColor: processColor('red'),
                color: processColor('#14BE4B'),
                // 空心圆的颜色
                circleHoleColor: processColor('white'),
                drawCircleHole: true,
                //线条模式 。可以设置为贝塞尔曲线 。LineDataSet.Mode  （LINEAR,STEPPED, CUBIC_BEZIER,HORIZONTAL_BEZIER）
                //mode: 'HORIZONTAL_BEZIER',
                // 阴影控制
                // drawFilled: true,
                // fillColor: processColor('#14BE4B'),
                fillAlpha: 60,
                // 设置折线图节点的数据是否显示
                drawValues: false,
                valueTextSize: 15,
                valueFormatter: "##.000",
                // dashedLine: {
                //   lineLength: 20,
                //   spaceLength: 20
                // }
              }
            }
              // , {
              //   values: [{y: 90}, {y: 130}, {y: 100}, {y: 105}],
              //   label: 'Company Y',
              //   config: {
              //     lineWidth: 1,
              //     drawCubicIntensity: 0.4,
              //     circleRadius: 5,
              //     drawHighlightIndicators: false,
              //     color: processColor('blue'),
              //     drawFilled: true,
              //     fillColor: processColor('blue'),
              //     fillAlpha: 45,
              //     circleColor: processColor('blue')
              //   }
              // }, {
              //   values: [{y: 110}, {y: 105}, {y: 115}, {y: 110}],
              //   label: 'Company Dashed',
              //   config: {
              //     color: processColor('green'),
              //     drawFilled: true,
              //     fillColor: processColor('green'),
              //     fillAlpha: 50
              //   }
              // }
            ],
          }
        },

      })
    );
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
      <View style={{ flex: 1 }}>

        <View style={styles.container}>
          <LineChart
            style={styles.chart}
            data={this.state.data}
            description={{ text: '' }}
            legend={this.state.legend}
            xAxis={this.state.xAxis}
            yAxis={this.state.yAxis}
            drawGridBackground={false}
            borderColor={processColor('blue')}
            borderWidth={1}
            drawBorders={false}
            touchEnabled={true}
            dragEnabled={true}
            scaleEnabled={false}
            scaleXEnabled={true}
            scaleYEnabled={false}
            pinchZoom={true}
            doubleTapToZoomEnabled={false}
            animation={this.state.animation}
            dragDecelerationEnabled={true}
            dragDecelerationFrictionCoef={0.99}

            keepPositionOnRotation={false}
            onSelect={this.handleSelect.bind(this)}
          />
        </View>

      </View>
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

export default LineChartScreen;
