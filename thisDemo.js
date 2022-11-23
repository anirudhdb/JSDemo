  var obj = { "prop" : "This is the object itself"};

  obj.foo = function(){
    console.log("Hello");
    console.log(this);
  };

  obj.foo(); 

  