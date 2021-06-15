import { getCoinData } from "./crypto.service.js"

export async function getCryptoData(date, coins) {
    const pastConvertedDate = parseInt((new Date(date).getTime() / 1000).toFixed(0))
    const todayConvertedDate = parseInt((new Date().getTime() / 1000).toFixed(0))
    const resultPromises = coins.map(async (coin) => {
        return {
            [coin]: (await Promise.all([
                getCoinData(coin, pastConvertedDate),
                getCoinData(coin, todayConvertedDate)
            ]))
                .map(c => c["data"][coin][process.env.CURRENCY])
                .reduce((prev, curr) =>
                    prev > curr ? Math.round(-(1 - curr / prev) * 100) + "%" : Math.round((curr / prev - 1) * 100) + "%"
                )
        };
    });

    return (async () => {
        const results = await Promise.all(resultPromises);
        const union = results.reduce((prev, curr) => Object.assign(prev, curr), {});
        return union
    })();
}