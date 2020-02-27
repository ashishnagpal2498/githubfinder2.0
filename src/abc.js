let obj = {
    "a":"10",
    "b":5
}
let jsonObj= JSON.stringify(obj)
console.log(jsonObj)
console.log(JSON.parse(jsonObj))
let ab = new Object(obj);
console.log(ab)
let b = 1>2 ? 1 : (2>3?10:99)
console.log(b);