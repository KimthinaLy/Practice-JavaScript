class Triangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  area() {
    return (this.width * this.height) / 2;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area(){
    return this.width * this.height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const geometry = {
  geoObject: null,

  createObject: function(shape){
    switch(shape){
      case "triangle":
        width = document.getElementById("width").value;
        height = document.getElementById("height").value;
        this.geoObject = new Triangle(width, height);
        break;
      case "rectangle":
        width = document.getElementById("width").value;
        height = document.getElementById("height").value;
        this.geoObject = new Rectangle(width, height);
        break;
      case "circle":
        radius = document.getElementById("radius").value;
        this.geoObject = new Circle(radius);
        break;
      default:
        this.geoObject = null;
    }
  },

  area: function(){
    return this.geoObject ? this.geoObject.area() : 0;
  }
}