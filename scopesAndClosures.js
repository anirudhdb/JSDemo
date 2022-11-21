var a = 10;
function outer(){
    var b = a;
    console.log(b);
    function inner(){
        var c = b;
        console.log(c);
        var b = 20;
    }
    inner();
}

outer()

console.log("hi");

