class Shoes {
    constructor(brand, size, type, age){
    this.size = size;
    this.type = type;
    this.age = age;
    this.brand = brand;
    }

sent(){
    console.log('My beautiful new' + this.brand + 'are a size' + this.size +'The' + this.type + 'are' + this.age)
}
}

const Nike = new Shoes(' nike runners ', ' 9 ', ' sneakers ', ' 70 years old ');
const Gucci = new Shoes(' Gucci ', ' 9 ', ' loafers ', ' new as this season! ');

console.log(Nike.sent());
console.log(Gucci.sent());