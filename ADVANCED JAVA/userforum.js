class Shapes {
    constructor(name, sides, height, base){
        this.name = name;
        this.sides = sides;
        this.height = height;
        this.base = base;

    } myShape(){
        console.log('I am a,' + this.name + 'I have,' + this.sides + 'My height is,' + this.height + 'My base is' + this.base)
    }

}


class Rectangle extends Shapes {
    constructor(name, sides, height, base, area){
        super(name, sides, height, base);
        this.area = area;

    } 
    
    getArea(base, height){
        this.area = base * height
        return this.area
    }
    

}
 
const myRectangle = new Rectangle(' rectangle. ', ' 4 sides. ' , ' 12. ' , ' 5 ' , this.area )

console.log(myRectangle.myShape());

class Triangle extends Shapes {
    constructor(name, sides, height, base, area){
        super(name, sides, height, base);
    }
}