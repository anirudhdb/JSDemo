var i;

for(i = 0 ; i < 10 ; i++)
{
    (function(){
        var currentValueOfI = i;

        setTimeout(function(){
            console.log(currentValueOfI);
        }, 1000);
    })();
}