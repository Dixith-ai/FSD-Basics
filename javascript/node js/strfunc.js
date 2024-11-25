let word = "Hello";
console.log(`Original wording: `,word);
console.log("Uppercase: ",word.toUpperCase());
console.log("Lowercase: ",word.toLowerCase());
console.log("Length: ",word.length);
for(let i=word.length; i>=0;i--)
{
    console.log(word[i]);
}
console.log("reverse using inbuilt functions : ",word.split('').reverse().join(''))
console.log("Substring (first 5 chars): ",word.substring(0, 4));
