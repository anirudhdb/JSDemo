function createPerson(){
    var firstName = "Anirudh";
    var  lastName = "Bhargav";

    var returnObj = {
        "getFirstName" : function(){
            return firstName;
        },
        "getLastName" : function(){
                return lastName;
            }
        };
        return returnObj;
    }

    var person = createPerson();
    console.log(person.getFirstName() +" "+ person.getLastName());
