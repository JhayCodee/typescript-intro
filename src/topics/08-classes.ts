export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public firstName: string,
        public lastName: string,
        private address: string = 'uknown'
    ) {}

}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {
//         super(realName, 'New York, USA');
//     }
// }

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        // this.person = new Person(realName, 'New York, USA');
    }
}

const tonny = new Person('Tonny ', 'Stark','New York, USA');
const ironman = new Hero('Tony Stark', 45, 'Tonny Stark', tonny);

// console.log(ironman);