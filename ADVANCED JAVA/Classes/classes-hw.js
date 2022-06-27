class Rectangle extends Shape {
    constructor(name, sides, height, width, length){
        super(name, sides, height, width)
        this.length = length;
    }
    calculateRectangleArea(){
        return this.height * this.width
    }
    calculateRectangleVolume(){
        return this.height * this.length * this.width
    }
    printStatement() {
        console.log("Given a " + this.name + " with a height of " + this.height + " and a width of " + this.width + ", it will have a volume of " + this.calculateRectangleVolume() + " and a surface area of " + this.calculateRectangleArea())
    }
}
const rec1 = new Rectangle('rectangle', 4, 12, 5, 3)
console.log(rec1.calculateRectangleArea())
console.log(rec1.calculateRectangleVolume())
rec1.printStatement();

class Triangle extends Shape {
    constructor(name, sides, height, width, base){
        super(name, sides, height, width)
        this.base = base;
    }
    calculateTriangleArea(){
        return (this.base * this.height)/2
    }
}
const tri2 = new Triangle('triangle', 3, 4, 6, 7);

console.log("The area of our new triangle is " + tri2.calculateTriangleArea())

// extend trapezoid class from shape class
// add methods to calculate area and print a statement to the console

class Trapezoid extends Shape{
    constructor(name, sides, height, width, base1, base2){
        super(name, sides, height, width)
        this.base1 = base1
        this.base2 = base2
    }
    calculateTrapArea(){
        return ((this.base1 + this.base2)*this.height)/2
    }
    printStatement(){
        console.log("Given a " + this.name + " with bases of " + this.base1 + " and " + this.base2 + " and a height of " +this.height + ", it will have an area of " + this.calculateTrapArea())
    }
}

const trap1 = new Trapezoid("trapezoid", 4, 12, 7, 9, 5);
trap1.printStatement()