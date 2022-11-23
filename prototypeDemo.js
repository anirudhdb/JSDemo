function foo(){

}

foo.prototype.test = "This is the prototype object of foo";
foo.__proto__.abc = "Coming from protoype of foooooooo";
console.log(foo.prototype.test);

var newFoo = new foo();
console.log(newFoo.__proto__.test);

console.log(foo.prototype === newFoo.__proto__);

newFoo.__proto__.hello = "This value is from the prototype";
console.log(newFoo.hello);
console.log(foo.abc);



 