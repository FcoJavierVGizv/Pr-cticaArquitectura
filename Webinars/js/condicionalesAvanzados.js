let fruit = "lemon";
let avalaibleFruits = new Set(["lemon", "banana", "watermelon"]);

let isAvailable = (avalaibleFruits.has(fruit)) ? "available" : "not available";

console.log(isAvailable);