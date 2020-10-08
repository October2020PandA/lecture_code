#### Intro to Big O Notation, Singly Linked Lists Continued

## What is Big O Notation?
    - In computer science, big O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows.
        - a measure of efficiency and scalability
        - a fair bit of math here, but generally we can estimate and use our intuition
        - https://adrianmejia.com/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/

## Big O Notation Examples
    - O(1) describes an algorithm that will always execute in the same time (or space) regardless of the size of the input data set.
        Ex: 
            function simpleFunction(arr){
                console.log(arr[0]);
            }
        - note how it doesn't matter how large arr is. We only ever care what the first element in the array is and return it. Increasing the size of the array doesn't slow down this process.

    - O(N) describes an algorithm whose performance will grow linearly and in direct proportion to the size of the input data set.
        Ex: 
            function simpleFunction2(arr){
                for(var i=0; i<arr.length; i++){
                    console.log(arr[i]);
                }
            }
        - if the arr is very short, this will happen very quickly. As the arr gets larger, the function will take longer to complete. Each move takes approximately the same amount of time, so the time increase is the approximately the same for each additional element in the arr (it grow linearly)

    -O(N^2) represents an algorithm whose performance is directly proportional to the square of the size of the input data set. This is common with algorithms that involve nested iterations over the data set. Deeper nested iterations will result in O(N^3), O(N^4) etc.
        Ex: 
            function bubbleSort(arr) {
                for(var outer = 0; outer < arr.length; outer++){
                    var outerElement = arr[outer];

                    for(var inner = outer + 1; inner < arr.length; inner++){
                        var innerElement = arr[inner];

                        if(outerElement > innerElement) {
                            arr[outer] = innerElement;
                            arr[inner] = outerElement;
                            outerElement = arr[outer];
                            innerElement = arr[inner];
                        }
                    }
                }
                return arr;
            }
        - For every element in the arr, we have to touch it at least twice. One in the first loop as we progress through the arr, then we touch them again in the inner loop as we check each one for the need to sort.

    -Others include O(2^N), O(log N), and more. We'll be seeing examples as we go

## Let's practice some SLL Coding!
    - Review Previous work
    - contains
    - length
    - min/max/avg