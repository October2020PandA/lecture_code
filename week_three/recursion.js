function simple1(num){
    //use a for loop to print statements
    for(var i=num; i>0; i--){
        console.log("for loops are fun")
    }
}
// simple1(5)

function simple2(num){
    //use a while loop to print statements
    while(num>0){
        console.log("while loops are fun");
        num--;
    }
}
// simple2(5)

function simple3(num){
    //break case to stop the loop
    if(num<=0){
        return;
    }
    //recursive function call
    console.log("Recursion is fun")
    return simple3(num-1)
}

// simple3(5)

function rSigma(num){
    //takes a number and adds all numbers from starting point down to 0
    //rSigma(5) = 5+4+3+2+1+0 = 15
    if(num<=0){
        return 0;
    }
    return num + rSigma(num-1);
}
console.log(rSigma(5))