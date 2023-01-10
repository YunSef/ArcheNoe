var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, color) {
        var _this = _super.call(this, name) || this;
        _this.species = "cat";
        _this.paws = 4;
        _this.color = color;
        return _this;
    }
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, color) {
        var _this = _super.call(this, name) || this;
        _this.species = "dog";
        _this.paws = 4;
        _this.color = color;
        return _this;
    }
    return Dog;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, color) {
        var _this = _super.call(this, name) || this;
        _this.species = "bird";
        _this.paws = 2;
        _this.color = color;
        return _this;
    }
    return Bird;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name) {
        var _this = _super.call(this, name) || this;
        _this.species = "fish";
        _this.paws = 0;
        return _this;
    }
    return Fish;
}(Animal));
var Invertebrate = /** @class */ (function (_super) {
    __extends(Invertebrate, _super);
    function Invertebrate(name) {
        var _this = _super.call(this, name) || this;
        _this.species = "invertebrate";
        _this.paws = 0;
        return _this;
    }
    return Invertebrate;
}(Animal));
function takePicture(animal) {
    console.log("You take a picture of a ".concat(animal.name));
}
function meow(animal) {
    console.log("".concat(animal.name, " says meeeEEOOOooow"));
}
function bark(animal) {
    console.log("".concat(animal.name, " says WHOUFF"));
}
function swim(animal) {
    console.log("".concat(animal.name, " disapear under water"));
}
function fly(animal) {
    console.log("".concat(animal.name, " flies away"));
}
function caress(animal) {
    if (animal.paws === 4) {
        console.log("You try to caress a ".concat(animal.species));
    }
    else {
        console.log('What are you trying to do?');
    }
}
function feed(animal) {
    if (animal.color === "noir") {
        console.log("You are feeding a ".concat(animal.name));
    }
}
var animal1 = new Cat("Chat Européen", "noir");
var animal2 = new Cat("Chat chartreux");
var animal3 = new Dog("Chien Terre-neuve", "noir");
var animal4 = new Dog("Chien Moon Moon");
var animal5 = new Bird("Mésange");
var animal6 = new Bird("Merle", "noir");
var animal7 = new Fish('Requin');
var animal8 = new Fish('Thon');
var animal9 = new Invertebrate('Lombric');
