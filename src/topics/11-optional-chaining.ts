// Optional chaining
// is a new feature of TypeScript 3.7 that allows you to write code where TypeScript
//  can immediately stop running some expressions if they would throw an error.
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining


export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Mora'
}

const passenger2: Passenger = {
    name: 'Jhayco',
    children: ['Rauw', 'Alejandro']
}

// optional chaining is the question mark after the object property that may be undefined
// when ! is used, it means that the property will never be undefined

const returnChildrenNumber = (passenger: Passenger): number => {

    // if (!passenger.children) return 0;

    // const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children!.length;

    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}

returnChildrenNumber(passenger2);