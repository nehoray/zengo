import axios from "axios";

export function getCoinData(coin, date) {
    const coinData = axios.get(process.env.CRYPTO_API, {
        params: {
            fsym: coin,
            ts: date,
            tsyms: process.env.currency,
        }
    })
    return coinData
}
