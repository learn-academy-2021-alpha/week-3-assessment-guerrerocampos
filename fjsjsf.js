var myarray = []

const addedNumsArray = myarray.concat();

for (var i = 1; i < myarray.length; i++) {
  addedNumsArray[i] = addedNumsArray[i-1] + myarray[i];
}

console.log(addedNumsArray);