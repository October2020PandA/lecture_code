//recursion continued
// Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:

// gcf(a,b) == a, if a == b;
// gcf(a,b) == gcf(a-b,b), if a>b;
    // gcf(12,3) has same result as gcf(9,3)
// gcf(a,b) == gcf(a,b-a), if b>a.
    // gcf(4,22) has same result as gcf(4,18)


// 4  1,4 2,2 -> 1, 2, 4
// 8 -> 1,8 2,4 -> 1, 2, 4, 8

//3, 32 -> GCF = 1  (3,29), (3,26), (3,23), (3,20), (3,17), (3,14), (3,11), (3,8), (3,5), (3,2), (1,2), (1,1)

// if the numbers are the same, then that number is the GCF
// if one or both numbers are prime, the GCF is 1
//if the smaller number is a factor of the larger number, the GCF is that smaller number


function rGCF(num1, num2){
    if(num1 == num2){
        return num1;
    }
    else if(num1 > num2){
        // we need to check if num2 is a factor of num1
        // 0 remainder when you divide -> returns a whole number
        if(num1%num2 == 0){
            return num2;
        }
        return rGCF(num1-num2, num2);
    }
    else{
        // we need to check if num1 is a factor of num2
        if(num2%num1 == 0){
            return num1;
        }
        return rGCF(num1, num2-num1);
    }
}

// console.log(rGCF(54,17)) //should be 1
// console.log(rGCF(54,21)) //should be 3
// console.log(rGCF(123456,987654)); //should be 6

// Recursive Binary Search
// Given a sorted array and a value, recursively determine whether value is found within array. 

// rBinarySearch([1,3,5,6], 4) = false; 

// rBinarySearch([4,5,6,8,12],5) = true.

//binary search runs by splitting arrays down the middle. Check if you're at the value
//if you are, great! if if is greater or less than where you are, you check again but only in the top or bottom half.
//repeat until found or doesn't exist.

function rBinarySearch(arr, value){
    //if the value is outside the bounds of the array max and min, it returns false
    // if value is less than 0 index value, or if value is greater than the last index value -> return false
    // if(value < arr[0] || value > arr[arr.length-1]){
    //     return false;
    // }
    var mid = Math.floor(arr.length/2) // find the middle index of the array
    //if the middle and value are the same, return true
    if(arr[mid] == value){
        return true;
    }
    else if(arr.length == 1){
        return false;
    }
    // if value is in the first half of the array, then check again but just the first half of the array
    else if(arr[mid] > value){
        //arr.splice(inclusive start point, exclusive stop point)
        return rBinarySearch(arr.splice(0,mid), value);
    }
    // if value is in the second half of the array
    else if(arr[mid] < value){
        return rBinarySearch(arr.splice(mid, arr.length), value);
    }

}

console.log(rBinarySearch([1,3,5,6],3));
console.log(rBinarySearch([4,5,6,8,12],5));
console.log(rBinarySearch([1,2,4,5,8,9,10],4));