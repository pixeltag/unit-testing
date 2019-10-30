const orderTotal = require('./order-total');

const emptyFunction = () => {}

it('calls vatapi.com correctly' , () => {
    let isFakedFetchCalled = false;
    const fakeFetch = (url) => {
        expect(url).toBe('https://vatapi.com/v1/country-code-check?code=DE')
        isFakedFetchCalled = true;
    }
    orderTotal( fakeFetch , {
        country: 'DE',
        items: [
            { name : ' Dragon waffles' , price: 20 , quantity: 2}
        ]
    }).then(result => {
        expect(result).toBe(true);
    })
});

it('if country code specified' , () => {
    
});

it('Check fail: Quantity' , () =>
    orderTotal(emptyFunction , {
        items: [
            { name : 'Dragon candy' , price : 2 , quantity: 3}
        ]
    }).then(result => {
        expect(result).toBe(6)
    }));


it('Check fail: happy path (Example 1)' , () => 
    orderTotal(emptyFunction ,{
        items: [
            { name : 'Dragon food' , price : 8 },
            { name : 'Dragon cage (small)' , price : 800 }
        ]
    }).then(result => {
        expect(result).toBe(808)
    }));


it('Check fail: happy path (Example 2)' , () =>
    orderTotal(emptyFunction ,{
        items: [
            { name : 'Dragon collar' , price : 20 },
            { name : 'Dragon chew toy' , price : 40 }
        ]
    }).then(result => {
        expect(result).toBe(60)
    }));


it('Check fail: No quantity specified' , () =>
    orderTotal(emptyFunction , {
        items: [
            {name : 'Dragon food' , price: 8 , quantity : 1},
            {name : 'Dragon cage (small)' , price: 800 , quantity : 1}
        ]
    }).then(result => {
        expect(result).toBe(808)
    }));

