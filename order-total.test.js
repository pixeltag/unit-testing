const orderTotal = require('./order-total');

it('works' , () => {
    expect(1).toBe(1);
})

it('Check fail: Quantity' , () =>
    expect(orderTotal({
        items: [
            { name : 'Dragon candy' , price : 2 , quantity: 3}
        ]
    })).toBe(6));


it('Check fail: happy path (Example 1)' , () => 
    expect(orderTotal({
        items: [
            { name : 'Dragon food' , price : 8 },
            { name : 'Dragon cage (small)' , price : 800 }
        ]
    })).toBe(808))


it('Check fail: happy path (Example 2)' , () =>
    expect(orderTotal({
        items: [
            { name : 'Dragon collar' , price : 20 },
            { name : 'Dragon chew toy' , price : 40 }
        ]
    })).toBe(60));

    
it('Check fail: No quantity specified' , () =>
    expect(orderTotal({
        items: [
            {name : 'Dragon food' , price: 8 , quantity : 1},
            {name : 'Dragon cage (small)' , price: 800 , quantity : 1}
        ]
    })).toBe(808));

