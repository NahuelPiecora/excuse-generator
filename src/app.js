let who = ["The deer", "My bear", "My step-sister", "His hedgehod"];
let what = ["ate", "stomped on", "crushed", "pooped on"];
let when = [
  "while I was meditating",
  "right in time.",
  "when I finished",
  "during lunch",
  "before the class"
];

function getRandom(range) {
  return Math.floor(Math.random() * range);
}

function createExcuse() {
  var s =
    who[getRandom(4)] +
    " " +
    what[getRandom(4)] +
    " my homework " +
    when[getRandom(5)];
  document.getElementById("excuse").innerHTML = s;
}
