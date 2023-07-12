
export interface Product {
    descriptiom: string;
    price: number;
}

// const phone: Product = {
//     descriptiom: 'Nokia A1',
//     price: 150
// }

// const tablet: Product = {
//     descriptiom: 'iPad Air',
//     price: 350
// }


// this will be the function that we will refactor
interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// ussuall when you have function you should a max of 3 parameters
// according to the clean code book
// so we can use destructuring to pass the parameters
// options is an object that has 2 properties: tax and products
export function taxCalculation( options: TaxCalculationOptions ): [number, number] {

    let total = 0;
    const { products, tax } = options;

    products.forEach( ({ price }) => {
        total += price;
    });

    return [total, total * tax];
}


// const shoppingCart: Product[] = [phone, tablet];

// const tax = 0.15;

// const [totalAmount, taxAmount]  = taxCalculation({ 
//     products: shoppingCart, 
//     tax 
// });

// console.log(`Total: ${totalAmount}, Tax: ${taxAmount}`)

