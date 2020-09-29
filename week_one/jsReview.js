var my_var = "My name is Amanda";

console.log(my_var);

var num = 45;

if(num > 45){
    console.log("Wow that's a big number")
}
else if(num < 45){
    console.log("Not that big")
}
else{
    console.log(`it is just ${num}.`)
}

for(var i = 1; i < 11; i++){
    console.log(i);
}

var new_num = 1;

while(new_num < 11){
    console.log(new_num);
    new_num+=1;
}

function myFunction(){
    console.log("here is my function");
}

myFunction();

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
}

var william = new User("William Gilbreath", "wgilbreath@gmail.com");
console.log(william['email']);
// console.log(william.email) does the same thing
