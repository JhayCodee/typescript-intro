// classic function
function addNumbers(a: number, b: number) {
    return a + b;
}

// arrow function
const addNumbersArrow = (a: number, b: number):string => `${a + b}`;

function multiply( firstNumber: number, secondNumber?: number, base: number = 5): number {
    return (secondNumber) 
                ? firstNumber * secondNumber 
                : firstNumber * base;
}

const result: number = addNumbers(1, 2);
const resultArrow: string = addNumbersArrow(1, 2);
const multiplyResult: number = multiply(3);

// console.log({result});
// console.log({resultArrow});
// console.log({multiplyResult});

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {

    (character.hp + amount > 100) 
        ? character.hp = 100 
        : character.hp = character.hp += amount;
}

const jhayco: Character = {
    name: 'Jhayco',    
    hp: 50,
    showHp() {
        console.log('Health Points:', this.hp);
    }
}

healCharacter(jhayco, 20);
healCharacter(jhayco, 20);

jhayco.showHp();

export {};