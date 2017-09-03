var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    // Constructor
    function Animal() {
    }
    // MakeSound function
    Animal.prototype.makeSound = function () {
        console.log(' I am ' + this.name + ' and i make sound ' + this.sound);
    };
    // Move Function to track Speed
    Animal.prototype.move = function (distance) {
        console.log(' I move ' + distance + 'km per hour');
    };
    return Animal;
}());
// Cat Class Extending Animal Class
var Cat = (function (_super) {
    __extends(Cat, _super);
    // Constructor in which Super is called for Parent Class
    function Cat() {
        var _this = _super.call(this) || this;
        _this.sound = 'Meow';
        _this.name = 'Cat';
        return _this;
    }
    return Cat;
}(Animal));
// Dog Class Extending Animal Class
var Dog = (function (_super) {
    __extends(Dog, _super);
    // Constructor in which Super is called for Parent Class
    function Dog() {
        var _this = _super.call(this) || this;
        _this.sound = 'Woof !';
        _this.name = 'Dog';
        return _this;
    }
    return Dog;
}(Animal));
// Call of Cat Class
var cat = new Cat;
cat.makeSound();
cat.move(60);
// Call of Dog Class
var dog = new Dog;
dog.makeSound();
dog.move(20);
