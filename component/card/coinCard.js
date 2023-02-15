export default function coinCard(data){
    //create all element for the card
    let coinCardContainer = document.createElement("div")
    let coinCardContent = document.createElement("div")
    let aElement = document.createElement("a")
    let cardHeader = document.createElement("div")
    let coinName = document.createElement("div")
    let lastestPrice = document.createElement("div")
    let coinLogo = document.createElement("div")
    let coinInfosContainer = document.createElement("div")
    let coin24hrChange = document.createElement("div")
    let changeContainer = document.createElement("div")
    let marketCapContainer = document.createElement("div")
    let marketInfoTitle = document.createElement("p")
    let marketInfoValue = document.createElement("p")
    let coin24hInfoTitle = document.createElement("p")
    let coin24hInfoValue = document.createElement("p")
    let changeInfoTitle = document.createElement("p")
    let changeInfoValue = document.createElement("p")

    //add class to the element
    coinCardContainer.classList.add("coin-card-container")
    coinCardContent.classList.add("coin-card-content")
    cardHeader.classList.add("card-header")
    coinName.classList.add("coin-name")
    lastestPrice.classList.add("lastest-price")
    coinLogo.classList.add("coin-logo")
    coinInfosContainer.classList.add("coin-infos-container")

    coin24hrChange.classList.add("coin-24hr-change-container", "info-box")
    changeContainer.classList.add("Total-supply-container", "info-box")
    marketCapContainer.classList.add("Market-cap-container", "info-box")

    marketInfoTitle.classList.add("info-title")
    marketInfoValue.classList.add("info-value")
    coin24hInfoTitle.classList.add("info-title")
    coin24hInfoValue.classList.add("info-value")
    changeInfoTitle.classList.add("info-title")
    changeInfoValue.classList.add("info-value")
    //end add class

    //add info to element
    let price = Number(data.price)
    price = price.toFixed(5)
    aElement.href = `/pages/chart/chart.html?${data.uuid}` //create a link to access to the chart of each coin
    coinName.innerHTML = data.name 
    lastestPrice.innerHTML = `Lastest price: ${price}$`
    coin24hInfoTitle.innerHTML = "24 Hour Price Change:"
    coin24hInfoValue.innerHTML = data["24hVolume"]
    marketInfoTitle.innerHTML = "Market cap:"
    marketInfoValue.innerHTML = `${data.marketCap}`
    changeInfoTitle.innerHTML = "Change:"
    changeInfoValue.innerHTML = data.change
    coinLogo.style.backgroundImage = `url(${data.iconUrl})`
    //end add info

    //combine all the element to create the card component
    marketCapContainer.append(marketInfoTitle, marketInfoValue)
    changeContainer.append(changeInfoTitle, changeInfoValue)
    coin24hrChange.append(coin24hInfoTitle, coin24hInfoValue)
    coinInfosContainer.append(coin24hrChange, changeContainer, marketCapContainer)

    cardHeader.append(coinName, lastestPrice)

    aElement.append(cardHeader, coinLogo, coinInfosContainer)

    coinCardContent.appendChild(aElement)

    coinCardContainer.appendChild(coinCardContent)

    return coinCardContainer
}
