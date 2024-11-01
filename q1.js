/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if either x or y is not numeric.
    - print the swapped values in the console if both x and y are numeric.
    
    Task 2
    - invoke the function "swap" using the following scenarios:
    - "Apple", 10
    - 9, 17
*/

function swap(x, y){
       // Task 1: Add code here
        if (typeof x !== 'number' || typeof y !== 'number') {
            return -1;
        }
        [x, y] = [y, x];
        console.log("Swapped values:", x, y);
        return [x, y];
}


// Task 2: Add code here
function swap(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return -1;
    }
    let result1 = swap("Apple", 10);
    console.log("Result for swap('Apple', 10):", result1);
}
// Scenario 2
function swap(x, y){
    if (typeof x !== 'number' || typeof y !== 'number') {
        return -1;
    }
    let result2 = swap(9, 17);
    console.log("Result for swap(9, 17):", result2);
}
