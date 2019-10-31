const orderTotal = require('./order-total');


it('calls vatapi.com correctly' , () => {
    let isFakedFetchCalled = false;
    const fakeProcess = {
        env : {
            VAT_API_KEY : 'key123'
        }
    }
    const fakeFetch = (url , opts) => {
        expect(opts.headers.apikey).toBe('key123')
        expect(url).toBe('https://vatapi.com/v1/country-code-check?code=DE')
        isFakedFetchCalled = true;
        return Promise.resolve({
            json: () => Promise.resolve({
                rates: {
                    standard: {
                        value : 19
                    }
                }
            })
        })
    }
     return orderTotal( fakeFetch , {
        country: 'DE',
        items: [
            { name : ' Dragon waffles' , price: 20 , quantity: 2}
        ]
    }).then(result => {
        expect(result).toBe(20*2*1.19);
        expect(isFakedFetchCalled).toBe(true);
    })
});



it('Check fail: Quantity' , () =>
    orderTotal(null , {
        items: [
            { name : 'Dragon candy' , price : 2 , quantity: 3}
        ]
    }).then(result => {
        expect(result).toBe(6)
    }));


it('Check fail: happy path (Example 1)' , () => 
    orderTotal(null ,{
        items: [
            { name : 'Dragon food' , price : 8 },
            { name : 'Dragon cage (small)' , price : 800 }
        ]
    }).then(result => {
        expect(result).toBe(808)
    }));


it('Check fail: happy path (Example 2)' , () =>
    orderTotal(null ,{
        items: [
            { name : 'Dragon collar' , price : 20 },
            { name : 'Dragon chew toy' , price : 40 }
        ]
    }).then(result => {
        expect(result).toBe(60)
    }));


it('Check fail: No quantity specified' , () =>
    orderTotal(null , {
        items: [
            {name : 'Dragon food' , price: 8 , quantity : 1},
            {name : 'Dragon cage (small)' , price: 800 , quantity : 1}
        ]
    }).then(result => {
        expect(result).toBe(808)
    }));

