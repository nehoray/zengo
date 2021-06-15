import { dateValitaion, coinsValidation } from "./middlewares.js";
import { getCryptoData } from "./crypto.controller.js"

export function applyRoutes(app) {
    app.get('/', [dateValitaion, coinsValidation], async (req, res, next) => {
        const cryptoData = await getCryptoData(req.body.date, req.body.coins)
        res.send(cryptoData)

    })
}

