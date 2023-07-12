interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Kobe En LA",
    details: {
        author: "Jhay Cortez",
        year: 2020
    } 
}

const { song, songDuration: duration, details } = audioPlayer; 
const { author } = details;

console.log('song:', song);
console.log('Duration:', duration);
console.log('Author:', author);


// arrays
const dbz = ['Goku', 'Vegeta', 'Trunks'];

const [p1] = dbz;
const [, , trunks = 'not found' ]: string[] = ['Goku', 'Vegeta'];

console.log('Personaje 1:', p1);
console.log('Personaje 1:', trunks);

export {};