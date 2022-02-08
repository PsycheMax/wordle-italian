import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto';
// eslint-disable-next-line
import { Chart } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Third party tools used here - even if react says the components above are not used, for some reason I still need to import them 
// https://www.chartjs.org/
// https://github.com/reactchartjs/react-chartjs-2
// https://chartjs-plugin-datalabels.netlify.app/

class GuessDistribution extends Component {

  static defaultProps = {
    data: {
      labels: ["1", "2", "3", "4", "5", "6",],
      tentatives: [5, 3, 1, 4, 8, 12]
    },
    barsColor: "rgb(106,170,100)",
    fontColorForTicks: "rgb(255,255,255)",
    fontColorForBars: "rgb(255,255,255)"
  }

  render() {
    // In the docs, it says that two elements must be passed - the key one is the OPTIONS one.
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
