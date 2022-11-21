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


function hoistingDemo()
{
    a = 10;
    console.log(b);
    c++;

    var a;
    var b;
    var c;
    

    
}

hoistingDemo();

