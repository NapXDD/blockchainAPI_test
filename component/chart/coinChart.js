import getCurrentURL from "../../utilities/getCurrentURL.js";
import getCoin from "../../utilities/getCoin.js"

const url = getCurrentURL()

//get the uuid of the coin from the url
const uuid = url.substring(url.indexOf('?') + 1)

let canvasElement = document.querySelector("#cookieChart")

let xValues = [];
let yValues = [];

let config = {
    type: "line",
    data: {
      labels: yValues,
      datasets: [{
        label: "Coin price",
        data: xValues,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    },
    options: {
      scales:{
        y: {
          grid: {
            color: '#fff',
          },
          ticks: {
            color: '#fff',
            font: {
              family: '"Fira Sans", sans-serif',
              weight: 600,
              size: 18,
            },
          }
        },
        x: {
          grid: {
            color: '#fff',
          },
          ticks: {
            color: '#fff',
            // display: false,
            font: {
                family: '"Fira Sans", sans-serif',
                weight: 600,
                size: 15,
            },
        },
        }
      },
      responsive: true,
      plugins: {
          legend: {
              labels: {
                  // This more specific font property overrides the global property
                  color: '#fff',
                  font: {
                      size: 20,
                  }
              },
          }
      }
  }
}

let cookieChart = new Chart(canvasElement, config)
cookieChart.destroy()

function coinChart(){
    console.log("lmao")
    getCoin(uuid)
    .then(res => {
        let data = res.data.coin
        return data
    })
    .then(data => {
      let date = new Date()
      let newTime = date.toLocaleTimeString().replace("AM","").replace("PM","")
      xValues.push(data.price)
      yValues.push(newTime)
      cookieChart.destroy()
      cookieChart = new Chart(canvasElement, config)
    })
}

//create an initial value for the chart
coinChart()
//update the price after 10s
setInterval(() => {coinChart()}, 10000) 