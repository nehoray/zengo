
export function dateValitaion(req, res, next) {
    let today = new Date()
    let yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    let chosenDate = new Date(req.body.date)
    if (!isDateFormat(req.body.date)) {
        res.send("date must be in a date format")
    } else if (chosenDate >= yesterday) {
        res.send("date must be in the past")
    } else {
        next()
    }
}

export function coinsValidation(req, res, next) {
    req.body.coins.forEach(coin => {
        if (coin.length > 6 || !coin.match(/^[A-Z]*$/)) {
            res.send('one or more coins format are worng')
        }
    })
    next()
}
function isDateFormat(date) {
    var timestamp = Date.parse(date);
    if (isNaN(timestamp) == false) {
        return true
    } else {
        return false
    }
}