
function addNumbers(a:number, b:number): number{
    return a + b;
}


const addNumersArrow = (a: number, b : number): string =>{
    return `${a + b}`;
}


function multiply( firsNumber: number, seconNumber?: number, base: number  = 2){
    return firsNumber * base;
}


const result: number  = addNumbers( 1, 2 );
const resul2: string  = addNumersArrow( 1, 2 );
const multiplyResult: number  = multiply(5);

console.log({ result, resul2, multiplyResult });







export {};