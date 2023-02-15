import coinCard from "../../component/card/coinCard.js";
import getCoins from "../../utilities/getCoins.js";

//when load the crypto page, the javascript fetch the api, turn it to element and add to crypto page
export default function coinList(){
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
        let tlcoinslist = gsap.timeline()
        tlcoinslist.to(".coins-list", {duration: 1, opacity: 1})
        .to(".crypto-footer-container", {duration: 1, opacity: 1})
    })
}
