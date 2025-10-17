function secondlargest(arr){
    arr.sort((a,b)=>b-a);
    return arr[1];
}
let numbers=[12,35,1,10,34,1];
let second= secondlargest(numbers);
console.log("the second largest is",second)