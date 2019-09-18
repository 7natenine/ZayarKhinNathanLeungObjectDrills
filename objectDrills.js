'use strict';

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
    let result = '';
    let words = str.split(' ');
    for (let i=0; i < words.length; i++) {
        let firstLetter = words[i][0];
        if(cipher[firstLetter]){
            result += words[i][cipher[firstLetter]-1];
        }
        else
            result +=' ';
        
    };
    return result;
}


function decodeWords(messageString, decode) {
    return decode(messageString);
}

console.log(decodeWords(encodedMessage,decode));


function createCharacter(name, nickName, race, origin, attack, defense, weapon){

    return {
        name : name, 
        nickname : nickName, 
        race : race, 
        origin : origin,
        attack : attack, 
        defense : defense, 
        weapon : weapon,
        describe : () => {
            console.log(`${name} is a ${race} from ${origin} ${weapon}`);
        },
        evaluateFight : (character) => {
            let x = this.attack - character.defense;
            let y = character.attack - this.defense;
            if (x < 0 ){
                x = 0;
            }
            if (y < 0){
                y = 0;
            }
            console.log(`Your opponent takes ${x} damage and you receive ${y} damage`);
        }
    };
}

let characters = [createCharacter('Gandalf the white', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
                  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
                  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
                  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedian', 6, 8),
                  createCharacter('Legolas', 'logolas', 'Elf', 'Woodland Realm', 8, 5)];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half - Elf', 'Rivendell', 10, 10 ));

characters.find((character) => { return character.nickname === 'aragorn'}).describe();
let hobbits = characters.filter((character) =>{
    return character.race ==='Hobbit'
});

console.log(hobbits[0],hobbits[1]);

let aboveFive = characters.filter((character) => {
    return character.attack > 5 
});

console.log(aboveFive[0],aboveFive[1],aboveFive[2]);

// characters[0].weapon = 'Wizard staff';
// characters[0]['race'] = 'elf';

let gandalf = characters.find((character) => { return character.nickname === 'gandalf'});

gandalf.race = 'elf';

console.log(characters[0].race);