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
    jobTitle : 'train' 
}

let person3 = {
    name : 'Dora',
    jobTitle : 'explorer' 
}

let personList =[person1, person2, person3];
personList.forEach((person) => {
    console.log(person.jobTitle, person.name);
});