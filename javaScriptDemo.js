(function (){
    var a = 10;
    var b = 20;
    console.log(a+b);    //IIFE
})();


var obj = {
    "name" : "abc",
    "age" : 55,
    "address" : {
        "street" : "JS street",
        "city" : "Bangalore",
        "state" : "Karnataka"
    }
}

var myState = "Karnataka";

if(myState === obj.address.state)
{
    console.log("States are equal");
}

var myArray = [10,20,30,"Hello",{}];
myArray.push(1000);
console.log(myArray)
myArray.shift()                                        //array methods
console.log(myArray)
myArray.pop()
console.log(myArray)
myArray.unshift("new")
console.log(myArray)


var arr = [10,20,30,"hello",{}];

var myFunction = function(item,index){
    console.log();("The element is : "+item+ " at Index : "+index);
}

arr.forEach(myFunction);


var a = 10;
function newFunction(){
    var b = a;
    console.log(a);
    c = 1000;
}

newFunction();
console.log(c);








