function orderTotal(orders) {
    return orders.items.reduce((prev , cur) => cur.price * (cur.quantity || 1) + prev , 0);
}

module.exports = orderTotal;