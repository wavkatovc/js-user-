let obj = {}
let num = +prompt("foydalanuvchilarni sonini kiriting")
let id = 1;

for (let i = 0; i < num; i++) {

    let getName = prompt("ismingiz", "Name")
    let getAge = +prompt("yoshingiz", "Age")

    obj[id] = {name: getName, age: getAge}

    console.log("foydalanuvchi " + id + "\nIsm: " + getName + "\nyosh: " + getAge);
    id++
}

console.log(obj);