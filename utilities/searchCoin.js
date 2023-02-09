import getCoins from "./getCoins.js";
import coinCard from "../component/card/coinCard.js";

export default async function searchCoin(coinName) {
  let url = "https://api.coinranking.com/v2/coins";
  let array = [];
  let card = [];

  const options = {
    headers: {
      "Content-Type": "application/json",
      // 'x-access-token': 'your-access-token-here',
    }};
    const response = getCoins(url, options)
    .then((res) => {
      let data = res.data.coins;
      return data;
    })
    .then((coins) => {
      coins.map((coin) => {
        if (coin.name.toLowerCase().search(coinName) !== -1) {
          array.push(coin);
        }
      });
      return array;
    })
    .then((coins) => {
      coins.map((coin) => {
        let cardElement = coinCard(coin);
        card.push(cardElement)
      });
      return card
    });
    return response
}
