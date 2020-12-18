const student = [
    {id: 21, name: 'Omar Sunuy'},
    {id: 31, name: 'Maannaaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'DeepJol'},
]

// const output = [];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     const result = element.name;
//     output.push(result);
// }
// console.log(output);

const names = student.map(element => element.name);
console.log(names);
const ids = student.map(element => element.id);
console.log(ids);

const bigger = student.filter(element => element.id > 40);
console.log(bigger);
