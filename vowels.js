function countVowels(str){
    let count = 0;
    const vowels = "aeiouAEIOU";
    for(let i=0;i,str.length;i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(countVowels("nalanda"));



function countvowel(str{
    return str.match(/[aeiou]/gi?.length ||)
})