class Triangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  area() {
    return ((this.width * this.height) / 2).toFixed(2);
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area(){
    return (this.width * this.height).toFixed(2);
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return (Math.PI * this.radius * this.radius).toFixed(2);
  }
}


const geometry = {

  //helper function
  _createObject: function(shape, dimensions) { 
    const { width, height, radius } = dimensions;
    switch(shape){
      case "triangle":
        return new Triangle(width, height);
      case "rectangle":
        return new Rectangle(width, height);
      case "circle":
        return new Circle(radius);
      default:
        return null;
    }
  },

  calculateArea(shape, dimensions) {
    const object = this._createObject(shape, dimensions);
    return object ? object.area() : 0;
  }
}