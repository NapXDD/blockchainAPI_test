import searchCoin from "../../utilities/searchCoin.js"

let coinsList = document.querySelector(".coins-list")
let searchBar = document.querySelector("#search-input")
let footerElement = document.querySelector(".crypto-footer-container")

searchBar.addEventListener("keypress", (event) => {
    if(event.keyCode === 13){
        event.preventDefault()
        searchCoin(searchBar.value)
        .then(
            coins => {
                if(coins.length !== 0 ){
                    footerElement.classList.remove("crypto-footer-empty")
                    footerElement.classList.add("crypto-footer-container")
                    searchBar.value = ""
                    coinsList.innerHTML = ""
                    coins.map(coin => {
                        coinsList.appendChild(coin)
                    })
                }
                else{
                    coinsList.innerHTML = `"${searchBar.value}" is not exist`
                    footerElement.classList.remove("crypto-footer-container")
                    footerElement.classList.add("crypto-footer-empty")
                }
            }
        )
    }
})
