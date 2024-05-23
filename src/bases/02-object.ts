export const person = {
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 5236545,
        lat: 14.32361,
        lng: 34.5667
    }
} 
// as const;

const person2 = structuredClone(person);

person2.lastName = 'Parker';
person2.address.city = 'Miami'

console.log(person);
console.log(person2);