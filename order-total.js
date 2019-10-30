function orderTotal(fetch , orders) {
    fetch('https://vatapi.com/v1/country-code-check?code=' + orders.country);
    return Promise.resolve(
        orders.items.reduce((prev , cur) => 
        cur.price * (cur.quantity || 1) + prev , 0)); 
}

module.exports = orderTotal;