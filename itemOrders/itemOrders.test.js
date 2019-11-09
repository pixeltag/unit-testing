const itemOrders = require('./itemOrders');

test('should 2 + 2 returns 4' , () => {
    expect(itemOrders.add(2 , 2)).toBe(4);
});