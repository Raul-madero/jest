const {sum, fromDollarToYen, fromYenToPound, fromEuroToDollar} = require('./app.js');
test('adds 14 + 9 to equal 23', () => {

    let total = sum(14, 9);
    expect(total).toBe(23);
});
test('3.5 euro must be 3.745 dollars', () => {
    let dollars = fromEuroToDollar(3.5);
    expect(dollars).toBe(3.745);
});
test('3.745 dollars must be 547.75 yen', () => {
    let yen = fromDollarToYen(3.745);
    expect(yen).toBe(547.75);
});
test('547.75 yens must be 3.045 pounds', () => {
    let pound = fromYenToPound(547.75);
    expect(pound).toBe(3.045);
});