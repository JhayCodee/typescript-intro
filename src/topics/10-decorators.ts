
// decorators are functions that are executed when a class is defined
// decorators are executed when the class is defined, not when the class is instantiated
// decorators modify the class definition (add properties, methods, etc)

function classDecorator<T extends { new ( ...args: any[] ): {} } >  ( 
    constructor: T
) {
    return class extends constructor {
        newProperty: string = 'new property';
        hello: string = 'override';
    }
}

@classDecorator
class SuperClass {

    public myProperty: string = 'ABC';

    print() {
        console.log( 'Hello World' );
    }
}

// console.log( SuperClass );

const myClass = new SuperClass();
// console.log( myClass );