import { Product, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        descriptiom: 'Nokia A1',
        price: 150
    },
    {
        descriptiom: 'iPad Air',
        price: 350
    },   
    {
        descriptiom: 'Headphones',
        price: 15
    }
];

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log(`Total: ${total}, Tax: ${tax}`)