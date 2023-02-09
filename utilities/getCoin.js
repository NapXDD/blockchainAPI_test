export default async function getCoin(uuid){
    const options = {
        headers: {
          'Content-Type': 'application/json',
          // 'x-access-token': 'your-access-token-here',
        },
      };
    let url = `https://api.coinranking.com/v2/coin/${uuid}`
    const response = await fetch(url, options)
    let data = await response.json()
    return data
}