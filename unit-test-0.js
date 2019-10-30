// testing 1 code
if(orderTotal({
    items: [
        { name : 'Dragon food' , price : 8 },
        { name : 'Dragon cage (small)' , price : 800 }
    ]
}) !== 808) {
    throw new Error('Check fail: happy path (Example 1)');
}

// testing 2 code
if(orderTotal({
    items: [
        { name : 'Dragon collar' , price : 20 },
        { name : 'Dragon chew toy' , price : 40 }
    ]
}) !== 60) {
    throw new Error('Check fail: happy path (Example 2)');
}


// testing 3 code 
if( orderTotal({
    items: [
        { name : 'Dragon candy' , price : 2 , quantity: 3}
    ]
}) !== 6) {
    throw new Error('Check fail: Quantity');
}

// testing 4 code 
if(orderTotal({
    items: [
        {name : 'Dragon food' , price: 8 , quantity : 1},
        {name : 'Dragon cage (small)' , price: 800 , quantity : 1}
    ]
}) !== 808) {
    throw  new Error('Check fail: No quantity specified');
}

// the code
function orderTotal(orders) {
    return orders.items.reduce((prev , cur) => cur.price * (cur.quantity || 1) + prev , 0);
}

