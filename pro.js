const products = [
    {name:'shirt', price: 300, qty: 3},
    {name:'pant', price: 400, qty: 4},
]

function carttotal(products){
    let total = 0;
    for(const product of products){
        const productcost = product.price*product.qty;
        total = total + productcost;
    }
    return total;
}
