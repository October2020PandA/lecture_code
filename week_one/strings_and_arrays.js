// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

//Only acceptable "built-ins"
// array.push()
// array.pop()
// array.length

function removeDups(arr){
    var newArr = [arr[0]];
    for(var i=1; i<arr.length; i++){
        if(arr[i] != newArr[newArr.length-1]){ //arr.length always returns one more than the last index
            newArr.push(arr[i])
        }
    }
    return newArr;
}

// console.log(removeDups([1,2,2,3,5,5,8,8,8,9]));

// var string = "Hello my name is Amanda"
// console.log(string.split(""))

// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

function removeSpaces(string){
    // return string.split(" ").join("");
    var newArr = [];
    for(var i = 0; i < string.length; i++){
        if(string[i] != " "){
            newArr.push(string[i])
        }
    }
    newStr = ""
    for(var i = 0; i < newArr.length; i++){
        newStr=newStr+newArr[i]
    }
    return newStr
}

// console.log(removeSpaces(" Pl ayTha tF u nkyM usi c "));

function revArray(arr){
    var temp = 0;
    for(var i = arr.length-1; i >= arr.length/2; i--){
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr
}
// console.log(revArray([4,5,7,3,68,3,-4]))

function filterRange(arr, min, max) {
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] <= min || arr[i] >= max) {
			for(let j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr.length = arr.length - 1;
			i--;
		}
    }
    return arr;
}

console.log(filterRange([1,2,3,4,5],1,5))