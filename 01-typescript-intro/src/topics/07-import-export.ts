import { taxCalculation, type Product } from "./06-function-destructuring";


const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100.0
    },
    {
        description: 'Ipad',
        price: 150.0
    }
];


const [ total, tax ] =  taxCalculation({products: shoppingCart, tax: 0.15});

console.log("Total : ", total);
console.log("Tax : ", tax);