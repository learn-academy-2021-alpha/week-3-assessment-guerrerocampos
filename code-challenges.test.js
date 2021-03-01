// ASSESSMENT 3: Coding practical questions with Jest

const { test, expect, it } = require("@jest/globals");


// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.
test('when nums is called, you should get an array containing the fibonacci numbers for number that you input', () => {
    let fibNumbers = [1, 1, 2, 3, 5, 8]
    expect(nums).toEqual(fibNumbers)
})

// Example input: 6
let nums1= 6
// b) Create the function that makes the test pass.
// declare a function that will store the array
const nums = [1, 1];
// // created a for loop that went through the array and extended and added numbers as long as the length was less than 10
for(var i=nums.length; i<nums1; i++) {
//     // add numbers starting from the next position then adding it to the previous
    nums[i] = nums[i-2] + nums[i-1];
}
console.log(nums); 
// Expected output: [1, 1, 2, 3, 5, 8]

test('when nums is called, you should get an array containing the fibonacci numbers for number that you input', () => {
    let fibNumbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(numsArray).toEqual(fibNumbers)
})

// Example input: 10
  let nums2= 10
// b) Create the function that makes the test pass.
// declare a function that will store the array
const numsArray = [1, 1];
// // created a for loop that went through the array and extended and added numbers as long as the length was less than 10
for(var i=numsArray.length; i<nums2; i++) {
//     // add numbers starting from the next position then adding it to the previous
    numsArray[i] = numsArray[i-2] + numsArray[i-1];
}
console.log(numsArray); 
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

test('when newArray is called, you should get a new array with only odd numbers and they should be sorted from least to greatest as a return', () => {
    let fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    let sortedArray = newArray(fullArr1)
    expect(sortedArray).toEqual([-9, 7, 9, 199])
})

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
const newArray = (array) => {
    let findingNums = array.filter(function(value) {
    return (typeof value === "number" && value %2 !== 0)
    })
    function sortNumber(a, b) {
        return a - b;
     }
     
    return findingNums.sort(sortNumber)
}
console.log(newArray(fullArr1))

// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]

test('when newArray is called, you should get a new array with only odd numbers and they should be sorted from least to greatest as a return', () => {
    let fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    let sortedArray = newArray2(fullArr2)
    expect(sortedArray).toEqual([-823, 7, 23])
})


// b) Create the function that makes the test pass.
const newArray2 = (array) => {
    let findingNums = array.filter(function(value) {
    return (typeof value === "number" && value %2 !== 0)
    })
    function sortNumber(a, b) {
        return a - b;
     }
    return findingNums.sort(sortNumber)
}
console.log(newArray2(fullArr2))

// Expected output: [-823, 7, 23]




// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

// a) Create a test with expect statements for each of the variables provided.

var middleLetters1 = "alpha"



test('when middleletter is called, the return should be the middle letter or letters of a string', () => {
    let randomString = "alpha"
    let middleLetters = middleLetter(randomString)
    expect(middleLetters).toEqual('p')
})
// Expected output: “p”

var middleLetters2 = "rhinoceros"

test('when middleletter is called, the return should be the middle letter or letters of a string', () => {
    let randomString = "rhinoceros"
    let middleLetters = middleLetter(randomString)
    expect(middleLetters).toEqual('oc')
})
// Expected output: “oc”



// b) Create the function that makes the test pass.

const middleLetter = (str) => {

    var position;
    var length;

    if(str.length % 2 == 1) {
        position = str.length / 2;
        length = 1;
    } else {
        position = str.length / 2 - 1;
        length = 2;
    }

    return str.substring(position, position + length)
}

console.log(middleLetter(middleLetters2));


// --------------------4) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
test('when addedNumsArray is called, should return [2,6,51,60]', () => {
        var myArray = [2, 4, 45, 9]
        var numbersAdded1 = addedNumsArray(myArray)
        expect(numbersAdded1).toEqual([2, 6, 51, 60])
        // Excpected output: [2, 6, 51, 60]

    })

    const addedNumsArray = myarray.concat();

for (var i = 1; i < myarray.length; i++) {
  addedNumsArray[i] = addedNumsArray[i-1] + myarray[i];
}

console.log(addedNumsArray);


    var myArray = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

test('when addedNumsArray is called, should return [0, 7, -1, 11', () => {
    var myArray = [0, 7, -8, 12]
    var numbersAdded2 = addedNumsArray(myArray)
    expect(numbersAdded2).toEqual([0, 7, -1, 11])
})

const addedNumsArray = myarray.concat();

for (var i = 1; i < myarray.length; i++) {
  addedNumsArray[i] = addedNumsArray[i-1] + myarray[i];
}

console.log(addedNumsArray);


var numbersToAdd3 = []
// Expected output: []
test('when addedNumsArray is called, should return []', () => {
    var myArray = []
    var numbersAdded3 =addedNumsArray(myArray)
    expect(numbersAdded3).toEqual([])
})

const addedNumsArray = myarray.concat();

for (var i = 1; i < myarray.length; i++) {
  addedNumsArray[i] = addedNumsArray[i-1] + myarray[i];
}

console.log(addedNumsArray);





// b) Create the function that makes the test pass


