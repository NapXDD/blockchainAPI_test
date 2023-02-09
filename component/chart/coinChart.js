import getCurrentURL from "../../utilities/getCurrentURL.js";
import getCoin from "../../utilities/getCoin.js"

const url = getCurrentURL()

//get the uuid of the coin
const uuid = url.substring(url.indexOf('?') + 1)

let canvasElement = document.querySelector("#cookieChart")
console.log(canvasElement)
canvasElement.width = "250px"; 
canvasElement.height = "200px";
canvasElement.style = '';

function coinChart(){
    getCoin(uuid)
    .then(res => {
        let data = res.data.coin
        return data
    })
    .then(data => {
        console.log(data)
    })
}



let config = {
    type: "line",
    data: {label: ["bill", "jett", "michael", "tim", "zuck"], 
    datasets: [{labels: "Number of cookies", data: [5, 2, 12, 19 ,3]}]
}
}
let cookieChar = new Chart(canvasElement, config)


coinChart()