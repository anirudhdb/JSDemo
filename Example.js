function createPerson(){
    var firstName = "Anirudh";
    var  lastName = "Bhargav";

    var returnObj = {
        "getFirstName" : function(){
            return firstName;
        },
        "getLastName" : function(){
                return lastName;
        },
        "setFirstName" : function(fname){
            firstName = fname;
        },
        "setLastName" : function(lname){
            lastName = lname;
        }
        };
        return returnObj;
    }

    var person = createPerson();
    console.log(person.getFirstName() +" "+ person.getLastName());
    person.setFirstName("Foo");
    person.setLastName("FIFA");
    console.log(person.getFirstName() + " "+person.getLastName());