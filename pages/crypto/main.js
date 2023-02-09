import searchCoin from "../../utilities/searchCoin.js"

let coinsList = document.querySelector(".coins-list")
let searchBar = document.querySelector("#search-input")

searchBar.addEventListener("keypress", (event) => {
    if(event.keyCode === 13){
        event.preventDefault()
        searchCoin(searchBar.value)
        .then(
            coins => {
                searchBar.value = ""
                coinsList.innerHTML = ""
                coins.map(coin => {
                    coinsList.appendChild(coin)
                })
            }
        )
    }
})