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
test.set("moon", "silver");
test.set("moon", "white");

console.log(test);
console.log(JSON.stringify(test, null, 2));
console.log(test.get("hat"));
console.log(test.has("hat"));
console.log(test.remove("elephant"));
console.log(test.has("elephant"));
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
test.clear();
console.log(JSON.stringify(test, null, 2));
