/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          11345,
          12483,
          9020,
          13489,
          14092,
          12034
        ],
      label: 'Steps',
        lineTension: 0,
         yAxisID: 'steps',
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      },{
        data: [
          0.5,
          0.3,
          0.35,
          0.2,
          0.4,
          0.45,
          0.35
        ],
      label: 'Earnings',
        lineTension: 0,
         yAxisID: 'money',
        backgroundColor: 'transparent',
        borderColor: '#359E3D',
        borderWidth: 4,
        pointBackgroundColor: '#359E3D'
      }]
    },
    options: {
      title: {
        text: "Steps this week",
        display: true
      },
      scales: {
        yAxes: [{
          id: 'steps',
          ticks: {
            beginAtZero: false
          }
        },{
          id: 'money',
          position: 'right',
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: true
      }
    }
  })
}())
