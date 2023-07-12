// const are slightly more performant than let

// const skils: string[] = ['Bash', 'Counter', 'Healing'];

// to strict the type of the object we can use the interface
// interface is not represented in the compiled code

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; // optional property
}

const jhayco: Character = {
    name: 'Jhayco',
    hp: 100,
    skills: ['Bash', 'Counter'],
};

const mora: Character = {
    name: 'Mora',
    hp: 100,
    skills: ['Healing'],
}

mora.hometown = 'PR';

console.table(jhayco);
console.table(mora);

export {}; // This file is a module