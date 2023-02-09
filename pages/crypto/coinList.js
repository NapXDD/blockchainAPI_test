import coinCard from "../../component/card/coinCard.js";
import getCoins from "../../utilities/getCoins.js";

function coinList(){
    let url = 'https://api.coinranking.com/v2/coins'

    const options = {
        headers: {
          'Content-Type': 'application/json',
          // 'x-access-token': 'your-access-token-here',
        },
      };
    
    let element = document.querySelector(".coins-list")

    getCoins(url, options)
    .then(res => {
        let data = res.data.coins
        return data
    })
    .then(datas => {
        datas.map(data => {
            let cardElement = coinCard(data)
            element.appendChild(cardElement)
        })
    })
}

coinList()