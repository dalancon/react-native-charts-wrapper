package com.github.wuxudong.rncharts.charts;


import android.graphics.Color;
import android.graphics.Matrix;

import com.facebook.react.uimanager.ThemedReactContext;
import com.github.mikephil.charting.charts.LineChart;
import com.github.mikephil.charting.components.Legend;
import com.github.mikephil.charting.components.XAxis;
import com.github.mikephil.charting.data.Entry;
import com.github.mikephil.charting.data.LineData;
import com.github.mikephil.charting.data.LineDataSet;
import com.github.wuxudong.rncharts.data.DataExtract;
import com.github.wuxudong.rncharts.data.LineDataExtract;
import com.github.wuxudong.rncharts.listener.RNOnChartValueSelectedListener;

public class LineChartManager extends BarLineChartBaseManager<LineChart, Entry> {

    @Override
    public String getName() {
        return "RNLineChart";
    }

    @Override
    protected LineChart createViewInstance(ThemedReactContext reactContext) {
        LineChart lineChart = new LineChart(reactContext);
        initBarChat(lineChart);
        return lineChart;
    }

    @Override
    DataExtract getDataExtract() {
        return new LineDataExtract();
    }


    /**
     * 初始化柱状图的信息
     *
     * @param lineChart
     */
    private void initBarChat(LineChart lineChart) {
        lineChart.setOnChartValueSelectedListener(new RNOnChartValueSelectedListener(lineChart));
        // 设置图表的可滑动
        lineChart.invalidate();
        Matrix mMatrix = new Matrix();
        mMatrix.postScale(2.2f, 1f);
        lineChart.getViewPortHandler().refresh(mMatrix, lineChart, false);
        lineChart.animateX(3000);
        // 禁用放大
        lineChart.setScaleEnabled(false);
        // 设置背景色
        lineChart.setBackgroundColor(Color.WHITE);
        // 设置描述信息
        Legend legend = lineChart.getLegend();
        legend.setPosition(Legend.LegendPosition.ABOVE_CHART_LEFT);
        // 设置X轴的样式
        lineChart.getXAxis().setAxisLineWidth(1);
        lineChart.getXAxis().setAxisLineColor(Color.GREEN);
        lineChart.getXAxis().setDrawGridLines(true);
        lineChart.getXAxis().setGridColor(Color.parseColor("#e6e6e6"));
        // 设置X轴的显示在底部
        lineChart.getXAxis().setPosition(XAxis.XAxisPosition.BOTTOM);
        // 设置Y轴的样式
        lineChart.getAxisLeft().setAxisLineWidth(1);
        lineChart.getAxisLeft().setAxisLineColor(Color.GREEN);
        lineChart.getAxisLeft().setDrawGridLines(true);
        lineChart.getAxisLeft().setGridColor(Color.parseColor("#e6e6e6"));
        // 设置Y轴只显示一个
        lineChart.getAxisRight().setEnabled(false);
        // 设置显示的右下角的文字
        lineChart.getDescription().setEnabled(false);
        // 设置分割线
        lineChart.setDrawGridBackground(false);
    }
}
