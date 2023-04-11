"use strict"


// Problem 1:
function max(x, y) {
    if(x > y){
        return x;
    }else{
        return y;
    }
}
console.log("Problem 1: The largest number is: " + max(53, 42))

// Problem 2:
function maxOfThree(x, y, z){
    if(x>y){
        if(x>z){
            return x;
        }else{
            return z;
        }
    }else{
        if(y>z){
            return y;
        }else{
            return z;
        }
    }
}
console.log("Problem 2: The largest number is: " + maxOfThree(53, 42, 66))

// Problem 3:
function isVowel(str){
    if(str === "a" || str === 'e' || str === "i" || str === "o" || str === "u"){
        return true;
    }
    return false;
}
console.log("Problem 3: is the character given a vowel ? : " + isVowel("a"))

// Porblem 4:
function sum(arr){
    let answer = 0;
    for(let i=0; i<arr.length; i++){
        answer+= arr[i];
    }
    return answer;
}
function multiply(arr){
    let answer = 1;
    for(let i=0; i<arr.length; i++){
        answer*= arr[i];
    }
    return answer;
}
console.log("Problem 4: The sum of the array is : " + sum([1,2,3,4]) + ", And the multiply of the array is : " + multiply([1,2,3,4]))

// Problem 5
function reverse(str){
    let ans = "";
    for (let i = str.length-1; i >= 0; i--) {
        ans += str[i];
    }
    return ans;
}
console.log("Problem 5: The reverse of 'Marwan' is: " + reverse("Marwan"))

// Problem 6
function findLongestWord(arr){
    let ans = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i].length > ans.length){
            ans = arr[i];
        }
    }
    return ans;
}
console.log("Problem 6: The Longest Word is: " + findLongestWord(["Ba", "LaLaLa", "MoMo"]))

// Problem 7
function filterLongWords(arr, len){
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === len) {
            ans.push(arr[i]);
        }
    }
    return ans;
}
console.log("Problem 7: The words with required length are: " + filterLongWords(["Ba", "LaLaLa", "MoMo", "Da"], 2))

// Problem 8
let computeSumOfSquares = 
    (arr, ans) => {
        ans = 0;
        for (let i = 0; i < arr.length; i++) {
            ans += (arr[i]*arr[i]);
        }
        return ans;
} 
console.log("Problem 8: The sum of squares is: " + computeSumOfSquares([1, 2, 3]))

// Problem 9
function printOddNumbersOnly(arr){
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2 !== 0){
            ans.push(arr[i]);
        }        
    }
    return ans;
}
console.log("Problem 9: The odd numbers: " + printOddNumbersOnly([1, 2, 3, 4, 5]))

// Problem 10
function computeSumOfSquaresOfEvensOnly(arr){
    let ans=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 === 0) {
            ans += (arr[i]*arr[i]);
        }        
    }
    return ans;
}
console.log("Problem 10: The sum of squares of even numbers: " + computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]))

// Problem 11
function functionalSum(arr){
    var answer = arr.reduce((first, second) => first+second);
    return answer;
}
function functionalMultiply(arr){
    var answer = arr.reduce((first, second) => first*second);
    return answer;
}
console.log("Problem 11: The sum and multiply of numbers using functional programming style: " + functionalSum([1, 2, 3, 4, 5]) + ", " + functionalMultiply([1, 2, 3, 4, 5]))

// Problem 12
function findSecondBiggest(arr){
    let biggest = Math.max(...arr);
    let index = arr.indexOf(biggest);
    arr.splice(index, 1);
    return Math.max(...arr);
}
console.log("Problem 12: The second biggest number: " + findSecondBiggest([1, 2, 3, 4, 5]))

// Problem 13
function printFibo(n, a, b){
    let counter = 2;
    let ans = [a,b];
    while(counter < n){
        ans.push(ans[counter-1]+ans[counter-2]);
        counter++;
    }
    return ans.slice(0,n);
}
console.log("Problem 13: The Fibo is: " + printFibo(8, 1, 1))

// Problem 14 - Part 1
function functionalSumOver20(arr){
    var newArr = arr.filter(num => num>20);
    var answer = newArr.reduce((first, second) => first+second);
    return answer;
}
console.log("Problem 14 - Part 1: The sum of numbers over 20 is: " + functionalSumOver20([10, 20, 30, 40]))

// Problem 14 - Part 2
function getNewArray(arr){
    var answer = arr.filter(str => str.length>=5 && str.includes("a"));
    return answer;
}
console.log("Problem 14 - Part 2: The strings with length is greater than and equal to 5, and contains letter ‘a’ is: " + getNewArray(["lala", "lalal", "bobobo", "boboboa"]))