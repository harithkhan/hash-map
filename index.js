import { HashMap } from "./hash-map.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(test);
console.log(JSON.stringify(test, null, 2));
console.log(`Length before reassignments: ${test.length()}`);
test.set("apple", "green");
test.set("lion", "brown");
console.log(test.entries());
console.log(`Length after reassignments: ${test.length()}`);
