<template>
    <div>
        <div class="col-md-12 shadow chart">
            <highcharts :options="options" ref="highcharts"></highcharts>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../main'

export default {
    props: ['parameters'],
    data() {
        return {
            options: {
                        title: {
                            text: this.parameters[0].chartTitle,
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
                                text: this.parameters[0].yAxisTitle
                            },
                            plotLines: [{
                                value: 0,
                                width: 1,
                                color: '#808080'
                            }]
                        },
                        tooltip: {
                            valueSuffix: this.parameters[0].valueSuffix
                        },
                        // legend: {
                        //     layout: 'vertical',
                        //     align: 'right',
                        //     verticalAlign: 'middle',
                        //     borderWidth: 0
                        // },
                        series: [{
                            name: this.parameters[0].name,
                            data: this.parameters[0].dataSensor
                        }]
            }
        }
    },
    created() {
        eventBus.$on('changeChart', (indexParameter) => {
            this.options.title.text = this.parameters[indexParameter].chartTitle;
            this.options.yAxis.title.text = this.parameters[indexParameter].yAxisTitle;
            this.options.tooltip.valueSuffix = this.parameters[indexParameter].valueSuffix;
            this.options.series[0].name = this.parameters[indexParameter].name;
            this.options.series[0].data = this.parameters[indexParameter].dataSensor;
        })
    }
}

// var options = {
//     title: {
//         text: 'Temperature Chart',
//         x: -20 //center
//     },
//     subtitle: {
//         text: "Source: NodeMCU Device",
//         x: -20
//     },
//     xAxis: {
//         categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
//     },
//     yAxis: {
//         title: {
//             text: 'Temperature (°C)'
//         },
//         plotLines: [{
//             value: 0,
//             width: 1,
//             color: '#808080'
//         }]
//     },
//     tooltip: {
//         valueSuffix: '°C'
//     },
//     // legend: {
//     //     layout: 'vertical',
//     //     align: 'right',
//     //     verticalAlign: 'middle',
//     //     borderWidth: 0
//     // },
//     series: [{
//         name: 'Temperature',
//         data: []
//     }]
// };
</script>

<style lang="scss" scoped>
    .chart {
        background-color: #fff;
        margin-left: -12px;
    }
</style>