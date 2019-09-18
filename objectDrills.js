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