import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels';
// Chart.register(ChartDataLabels);

class GuessDistribution extends Component {

  // constructor(props) {
  //   super(props);
  // }

  static defaultProps = {
    keyValue: "a",
    status: "neutral",
    data: {
      labels: ["1", "2", "3", "4", "5", "6",],
      tentatives: [5, 0, 1, 0, 0, 0]
    },
    barsColor: "rgba(65,181,65,1)",
    fontColorForTicks: "rgb(255,255,255)",
    fontColorForBars: "rgb(255,255,255)"
  }



  render() {
    let options = {
      maintainAspectRatio: false,
      indexAxis: 'y',
      scales: {
        x: {
          display: false,
        },
        y: {
          grid: {
            display: false
          },
          ticks: {
            color: 'white',
            padding: 9
          }
        }
      },
      elements: {
        bar: {
          borderWidth: 1
        },
      },
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false
        },
        datalabels: {
          display: 'auto',
          color: this.props.fontColorForBars,
          anchor: 'end',
          align: 'start',
          clamp: true,
          offset: 7
        }
      }
    }

    return (
      <div className="px-4 max-h-[10rem] h-[10rem]">
        <Bar
          data={{
            labels: this.props.data.labels,
            datasets: [{
              barPercentage: 0.8,
              categoryPercentage: 1,
              minBarLength: "38",
              data: this.props.data.tentatives,
              backgroundColor: this.props.barsColor
            }]
          }}
          options={options}
          plugins={[ChartDataLabels]}
        />

      </div>
    )
  }

}

export default GuessDistribution;
