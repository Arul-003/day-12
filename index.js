const letters = new Set();
const a = "a";
const b = "b";
const c = "c";
letters.add(a);
letters.add(b);
letters.add(c);
document.getElementById("demo0").innerHTML = "The set has " + letters.size + " values.";

const letterss = new Set(["a","b","c"]);
let text = "";
for (const x of letterss) {
  text += x + "<br>";
}
document.getElementById("demo1").innerHTML = text;

const lettersss = new Set(["a","b","c"]);
document.getElementById("demo2").innerHTML = "The type of the set is " + typeof letters;

const letter = new Set(["a","b","c"]);
document.getElementById("demo3").innerHTML = letters instanceof Set;