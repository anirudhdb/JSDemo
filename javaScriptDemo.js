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

