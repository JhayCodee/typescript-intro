
// Generics allow us to create reusable blocks of code that can be used with different types.
// The syntax is similar to function arguments. 
// We use angle brackets <> to declare a generic type T, then we can use T in place of a specific type.

export function whatsMyType<T>( argument: T ): T{
    return argument;
}

let amIString = whatsMyType<string>( 'hello world' );
let amINumber = whatsMyType<number>( 42 );
let amIArray = whatsMyType<number[]>( [1, 2, 3] );

// console.log( amIString.split( ' ' ) );
// console.log( amINumber.toFixed( 2 ) );
// console.log( amIArray.join( '-' ) );