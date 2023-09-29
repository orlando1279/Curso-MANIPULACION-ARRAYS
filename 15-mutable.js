const products = [
    {title: "Pizza", price: 121, id: "🍕"},  
    { name: "Burger", price: 121, id: '🍔' },
    { name: "Hot cakes", price: 121, id: '🥞' },
];
const myProducts = [];
console.log("Products:",products);
console.log("MyProducts:", myProducts);
console.log("-".repeat(10));
const productIndex = products.findIndex(item => item.id === "🍔");
if (productIndex !== -1) {
    myProducts.push(products[productIndex]); 
    Products.splice(productIndex, 1);

const productsV2 = [
    {title: "Pizza", price: 121, id: "🍕"},  
    { name: "Burger", price: 121, id: '🍔' },
    { name: "Hot cakes", price: 121, id: '🥞' },
];
const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}
const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
ProductsV2 = [productsIndexV2] = {
    ...productsV2[productIndexV2],
     ...update.changes,
    };
}
console.log(productsV2);
