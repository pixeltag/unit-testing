function orderTotal(fetch , orders) {
    const sumOrderItems = orders => 
        orders.items.reduce((prev , cur) => 
        cur.price * (cur.quantity || 1) + prev , 0);

    if(orders.country) {
        return fetch('https://vatapi.com/v1/country-code-check?code=' + orders.country , {
            headers : {
                apikey: 'key123'
            }
        })
            .then(response => response.json())
            .then(data => data.rates.standard.value)
            .then(vat =>   sumOrderItems(orders) * (1+vat/100))
    }
    return Promise.resolve(sumOrderItems(orders)); 
}

module.exports = orderTotal;