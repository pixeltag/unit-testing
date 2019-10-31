function orderTotal(fetch , orders) {
    if(orders.country) {
        return fetch('https://vatapi.com/v1/country-code-check?code=' + orders.country , {
            headers : {
                apikey: 'key123'
            }
        })
            .then(response => response.json())
            .then(data => data.rates.standard.value)
            .then(vat =>   orders.items.reduce((prev , cur) => 
            cur.price * (cur.quantity || 1) + prev , 0) * (1+vat/100))
    }
    return Promise.resolve(
        orders.items.reduce((prev , cur) => 
        cur.price * (cur.quantity || 1) + prev , 0)); 
}

module.exports = orderTotal;