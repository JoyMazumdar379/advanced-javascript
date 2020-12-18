let bonus = 20; /*global scope*/

function sum(first, second) {
    let result = first + second + bonus; /*local scope*/
    console.log(result); /*local scope*/
    console.log(bonus); /*global scope*/
    if(result > 10){
        const mood = "happy"
        console.log(mood);
    }
    return result;
}
const output = sum(5, 10);
// console.log(result); /*local scope*/
console.log(bonus); /*global scope*/
console.log(output);