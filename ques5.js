// Creating a array of objects 
let product=[{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }];
function processProducts(){        // creating  a functions 
let  productName= product.map((product=>product.name)); // using map for the product names
product.forEach(product => { // using foreach to iterate products
    if(product.price>50){   // price is greater than 50 
        console.log(`${product.name} is above $50 `)
    } else{                 // price is less than 50
        console.log(`${product.name} is below $50`)
    }
});
}
processProducts(product)  //  calling function
