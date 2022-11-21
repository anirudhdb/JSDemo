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





