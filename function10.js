const arr =[10,20,30,40];
function largest(arr){
 const max=arr[0];
 for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
 }
 return max;
}
console.log("the max is ",(arr))