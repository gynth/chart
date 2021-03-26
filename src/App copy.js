import './App.css';
import Basic from './Basic';
import { useState } from 'react';
import Test from './test';
import { useSelector } from 'react-redux';

function App() {
  const male = useSelector((e) => e.TEST_REDUCER.mOption);
  const female = useSelector((e) => e.TEST_REDUCER.wOption);

  let option = {
    title: {
        text: 'Male and female height and weight distribution',
        subtext: 'Data from: Heinz 2003'
    },
    grid: {
        left: '3%',
        right: '7%',
        bottom: '7%',
        containLabel: true
    },
    tooltip: {
        // trigger: 'axis',
        showDelay: 0,
        formatter: function (params) {
            if (params.value.length > 1) {
                return params.seriesName + ' :<br/>'
                + params.value[0] + 'cm '
                + params.value[1] + 'kg ';
            }
            else {
                return params.seriesName + ' :<br/>'
                + params.name + ' : '
                + params.value + 'kg ';
            }
        },
        axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
                type: 'dashed',
                width: 1
            }
        }
    },
    toolbox: {
        feature: {
            dataZoom: {},
            brush: {
                type: ['rect', 'polygon', 'clear']
            }
        }
    },
    brush: {
    },
    legend: {
        data: ['Female', 'Male'],
        left: 'center',
        bottom: 10
    },
    xAxis: [
        {
            type: 'value',
            scale: true,
            axisLabel: {
                formatter: '{value} cm'
            },
            splitLine: {
                show: false
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            axisLabel: {
                formatter: '{value} kg'
            },
            splitLine: {
                show: false
            }
        }
    ],
    series: [
        {
            name: 'Female',
            type: 'scatter',
            emphasis: {
                focus: 'series'
            },
            data: male,
            markArea: {
                silent: true,
                itemStyle: {
                    color: 'transparent',
                    borderWidth: 1,
                    borderType: 'dashed'
                },
                data: [[{
                    name: 'Female Data Range',
                    xAxis: 'min',
                    yAxis: 'min'
                }, {
                    xAxis: 'max',
                    yAxis: 'max'
                }]]
            },
            markPoint: {
                data: [
                    {type: 'max', name: 'Max'},
                    {type: 'min', name: 'Min'}
                ]
            },
            markLine: {
                lineStyle: {
                    type: 'solid'
                },
                data: [
                    {type: 'average', name: 'AVG'},
                    { xAxis: 160 }
                ]
            }
        },
        {
            name: 'Male',
            type: 'scatter',
            emphasis: {
                focus: 'series'
            },
            data: female,
            markArea: {
                silent: true,
                itemStyle: {
                    color: 'transparent',
                    borderWidth: 1,
                    borderType: 'dashed'
                },
                data: [[{
                    name: 'Male Data Range',
                    xAxis: 'min',
                    yAxis: 'min'
                }, {
                    xAxis: 'max',
                    yAxis: 'max'
                }]]
            },
            markPoint: {
                data: [
                    {type: 'max', name: 'Max'},
                    {type: 'min', name: 'Min'}
                ]
            },
            markLine: {
                lineStyle: {
                    type: 'solid'
                },
                data: [
                    {type: 'average', name: 'Average'},
                    { xAxis: 170 }
                ]
            }
        }
    ]
  };

  return (
    <div className="App" style={{width:1000, height:1000}}>
      <Basic option={option}/>
    </div>
  );
}

export default App;
