function Employee(name){
    this.name = name;
}

Employee.prototype.getName = function(){
    return this.name;
}

var emp1 = new Employee("jim");
console.log(emp1.getName());

function Manager(name, dept){
    this.name = name;
    this.dept = dept;
}

Manager.prototype.getDept = function(){
    return this.dept;
}

var mgr = new Manager("micheal", "Sales");
console.log(mgr.getDept());
mgr.__proto__ = Employee.prototype;
console.log(mgr.getName());

Employee.prototype.getSalary = function(){
    return 100;
}

console.log(emp1.getSalary());
console.log(mgr.getSalary());

