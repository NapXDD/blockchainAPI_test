export default async function getCoins(url, options){
  const response = await fetch(url, options)
  let data = await response.json()
  return data
}



