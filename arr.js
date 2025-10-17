let numbers=[10,20,4,556,4891,1,12,46]
let max=[0];
for(let i =1;i<numbers.length;i++){
    if(numbers[i]> max){
        max=numbers[i];
    }
}
console.log("the greatest element is the array is ",max)
