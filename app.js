const sum = (a, b) => {
    return a + b
}
console.log(sum(7, 3))
let oneEuroIs = {
    "JPY" : 156.5,
    "USD" : 1.07,
    "GBP" : 0.87
}
const fromEuroToDollar = (euro) => {
    let dollar = euro * 1.07
    return dollar
}
const fromDollarToYen = (dollar) => {
    let yen = (dollar / oneEuroIs.USD) * oneEuroIs.JPY;
    return yen
}
const fromYenToPound = (yen) => {
    let pound = (yen / oneEuroIs.JPY) * oneEuroIs.GBP;
    return pound
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };