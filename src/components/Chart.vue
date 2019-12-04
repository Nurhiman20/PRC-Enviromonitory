<template>
    <div>
        <div class="col-md-12 shadow chart">
            <highcharts :options="options" ref="highcharts"></highcharts>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: options
        }
    }
}

var options = {
    title: {
        text: 'Temperature Chart',
        x: -20 //center
    },
    subtitle: {
        text: "Source: NodeMCU Device",
        x: -20
    },
    xAxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },
    yAxis: {
        title: {
            text: 'Temperature (°C)'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: '°C'
    },
    // legend: {
    //     layout: 'vertical',
    //     align: 'right',
    //     verticalAlign: 'middle',
    //     borderWidth: 0
    // },
    series: [{
        name: 'Temperature',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3]
    }]
};
</script>

<style lang="scss" scoped>
    .chart {
        background-color: #fff;
        margin-left: -12px;
    }
</style>