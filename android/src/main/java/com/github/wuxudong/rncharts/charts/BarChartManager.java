package com.github.wuxudong.rncharts.charts;

import android.graphics.Color;
import android.graphics.Matrix;
import android.view.View;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.github.mikephil.charting.charts.BarChart;
import com.github.mikephil.charting.components.Legend;
import com.github.mikephil.charting.components.XAxis;
import com.github.mikephil.charting.data.BarEntry;
import com.github.wuxudong.rncharts.data.BarDataExtract;
import com.github.wuxudong.rncharts.data.DataExtract;
import com.github.wuxudong.rncharts.listener.RNOnChartValueSelectedListener;

public class BarChartManager extends BarLineChartBaseManager<BarChart, BarEntry> {

    @Override
    public String getName() {
        return "RNBarChart";
    }

    @Override
    protected View createViewInstance(ThemedReactContext reactContext) {
        BarChart barChart = new BarChart(reactContext);
        initBarChat(barChart);
        return barChart;
    }

    @Override
    DataExtract getDataExtract() {
        return new BarDataExtract();
    }

    @ReactProp(name = "drawValueAboveBar")
    public void setDrawValueAboveBar(BarChart chart, boolean enabled) {
        chart.setDrawValueAboveBar(enabled);
    }

    @ReactProp(name = "drawBarShadow")
    public void setDrawBarShadow(BarChart chart, boolean enabled) {
        chart.setDrawBarShadow(enabled);
    }

    /**
     * 初始化柱状图的信息
     *
     * @param barChart
     */
    private void initBarChat(BarChart barChart) {
        barChart.setOnChartValueSelectedListener(new RNOnChartValueSelectedListener(barChart));
        // 设置图表的可滑动
        barChart.invalidate();
        Matrix mMatrix = new Matrix();
        mMatrix.postScale(2.2f, 1f);
        barChart.getViewPortHandler().refresh(mMatrix, barChart, false);
        barChart.animateY(800);
        // 禁用放大
        barChart.setScaleEnabled(false);
        // 设置背景色
        barChart.setBackgroundColor(Color.WHITE);
        // 设置描述信息
        Legend legend = barChart.getLegend();
        legend.setPosition(Legend.LegendPosition.ABOVE_CHART_LEFT);
        // 设置X、Y轴的原点
        barChart.getXAxis().setXOffset(0);
        barChart.getAxisLeft().setAxisMinValue(0f);
        // 设置X轴的样式
        barChart.getXAxis().setAxisLineWidth(1);
        barChart.getXAxis().setAxisLineColor(Color.GREEN);
        barChart.getXAxis().setDrawGridLines(true);
        barChart.getXAxis().setGridColor(Color.parseColor("#e6e6e6"));
        // 设置X轴的显示在底部
        barChart.getXAxis().setPosition(XAxis.XAxisPosition.BOTTOM);
        // 设置Y轴的样式
        barChart.getAxisLeft().setAxisLineWidth(1);
        barChart.getAxisLeft().setAxisLineColor(Color.GREEN);
        barChart.getAxisLeft().setDrawGridLines(true);
        barChart.getAxisLeft().setGridColor(Color.parseColor("#e6e6e6"));
        // 设置Y轴只显示一个
        barChart.getAxisRight().setEnabled(false);
        // 设置显示的右下角的文字
        barChart.getDescription().setEnabled(false);
        // 设置分割线
        barChart.setDrawGridBackground(false);
    }
}
