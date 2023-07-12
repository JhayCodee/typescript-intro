
const name: string = 'Jhayco';
let hpPoints: number | 'FULL' = 95;
const isAlive: boolean = true;

hpPoints = 'FULL'; // Error

console.log({
    name,
    hpPoints,
    isAlive
});

export {}; // This file is a module