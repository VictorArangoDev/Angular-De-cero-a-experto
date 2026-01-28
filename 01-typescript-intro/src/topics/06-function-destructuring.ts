interface Product {
    description: string;
    price:number;

}

const phone: Product ={
    description: 'Nokia A1',
    price: 150.0
}

const table: Product ={
    description: 'Ipad Air',
    price: 250.0
}

interface taxCalculationOptions{
    tax: number;
    products: Product[];
}


function taxCalculation(options: taxCalculationOptions):[number, number]{
    let total = 0;
    const { tax, products } = options;

    products.forEach( ({ price }) => {
        total += price;
    });

    return [total, total * tax];
    
}


const shoppingCart = [phone, table ];
const tax = 0.15;


const [ total, taxTotal ] = taxCalculation({
    products: shoppingCart,
    tax,
})



console.log("total :", total , "Impuesto :", taxTotal);
