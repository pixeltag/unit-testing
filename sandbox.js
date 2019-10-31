const fetch = require('node-fetch');
const orderTotal = require('./order-total');

const result = orderTotal(fetch , {
    country: 'DE',
    items: [
        { name : ' Dragon waffles' , price: 20 , quantity: 2}
    ]
})
/*
const result = 
    fetch('https://vatapi.com/v1/country-code-check?code=DE' , {
        headers : {
            'apikey': process.env.VAT_API_KEY
        }
    })
    .then(response => response.text());
*/
result