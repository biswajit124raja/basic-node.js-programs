let arr = [15, 25, 26, 45, 66, 78, 11];
let x = 78;
let y = 15;

function linearSearch(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      console.log("Element found at index", i);
      return; // stop after finding the element
    }
  }
  console.log("Element not found");
}

