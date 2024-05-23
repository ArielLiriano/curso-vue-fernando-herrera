// function greetPerson (name: string){
// return `Hola ${name}`
// }

// const greetPerson = (name: string) => {
//     return `Hola ${name}`
// }

const greetPerson = (name: string) => `Hola ${name}`;

const getUser = (uid: string) => ({
  uid: uid,
  userName: "Tony001",
});

const heroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
        power: 'Super Fuerza',
    },
];

const hero = heroes.find((h) => h.id === 2);

console.log(hero?.power?.toUpperCase())