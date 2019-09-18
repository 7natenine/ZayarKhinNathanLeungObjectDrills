let loaf = {
    flour : 300, 
    water : 210,
    hydration : () =>{
        return (loaf.water/loaf.flour)*100 
    }
};

console.log(loaf.flour, loaf.water);
console.log(loaf.hydration());

let obj = {
    foo : 'a',
    bar : 'b',
    fum : 'c',
    quux : 'd', 
    spam : 'e'
};

for(let item in obj){
    console.log(item, obj[item]);
}

let food = {
    meals : ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],

}

console.log(food.meals[3]);

let person1 = {
    name : 'Bob',
    jobTitle : 'builder' 
}

let person2 = {
    name : 'Thomas',
    jobTitle : 'train', 
    boss: person1.name
}

let person3 = {
    name : 'Dora',
    jobTitle : 'explorer',
    boss: person1.name 
}

let personList =[person1, person2, person3];
personList.forEach((person) => {
    if (person.boss) {
        console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}.`);
    } else {
        console.log(`${person.jobTitle} ${person.name} doesn't report to anybody.`);
    }
});

const encodedMessage = 'craft block argon meter bells brown croon droop'
let cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
}

function decode(str) {
    let result = [];
    let words = str.split(' ');
    for (let i=0; i < words.length; i++) {
        let firstLetter = words[i][0];
        for (let j=0; j< Object.keys(cipher).length; j++) {
            if (firstLetter == Object.keys(cipher)[j]) {
                result.push(words[i][cipher[Object.keys(cipher)[j]]-1]);
            }
        }
        result.push(' ');
    };
}
console.log(decode(encodedMessage));

// function decodeWords(messageString, decode) {

// }

