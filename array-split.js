const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const part = nums.slice(2, 7); /*index, last index*/
console.log(part);

const remove = nums.splice(3, 6); /*index, delete count*/
console.log(remove);

const together = nums.join(" ami ");
console.log(together);