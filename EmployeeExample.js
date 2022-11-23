function Employee(name){
    this.name = name;
}

var emp1 = new Employee("Anirudh");
var emp2 = new Employee("Krishna");

Employee.prototype.playPrank = function(){
    console.log("Prank played");
}

emp1.playPrank();
emp2.playPrank();

var proto = Employee.prototype;
console.log(proto.constructor);
