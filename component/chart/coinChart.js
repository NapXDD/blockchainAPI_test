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
      labels: xValues,
      datasets: [{
        backgroundColor: "rgba(0,0,0,1.0)",
        borderColor: "rgba(0,0,0,0.1)",
        data: yValues
      }]
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
        xValues.push(data.price)
        yValues.push(Date.now())
        cookieChart.destroy()
        cookieChart = new Chart(canvasElement, config)
    })
}

//create an initial value for the chart
coinChart()
//update the price after 10s
setInterval(() => {coinChart()}, 10000) 