// False Value: null, NaN, "", 0, undefined, false
// True Value: " ", 1, "0", {}, []
let name = [];
console.log(name);
if (name) {
    console.log("condition true");
}
else{
    console.log("condition false");
}