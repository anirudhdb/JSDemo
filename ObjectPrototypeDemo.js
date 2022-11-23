function Employee(){}

var emp = new Employee();
emp.prop = "Employee";

emp.__proto__.parentProp = "Parent of employee";
console.log(emp.parentProp);

emp.__proto__.__proto__.grandParent = "Grand parent of Employe";

console.log(emp.grandParent);

console.log(emp.__proto__.__proto__ === Object.prototype);

console.log(Object.prototype.__proto__); // DUnder proto of object's prototype points to null.