let a = 5;
{
  let a = "abc";
  console.log(a);
}
console.log(a);

var b = 5;
{
  var b = "abc";
  console.log(b);
}
console.log(b);

let a1 = 5;
let b1 = "abc";
let c = a1;
a1 = b1;
b1 = c;
console.log(a1, b1);

a = 5 ** 2;
console.log(a);
a = a ** (1 / 2);
console.log(a);

if (a > 5) {
  console.log("a es mayor que 5");
} else if (a < 5) {
  console.log("a es menor que 5");
} else {
  console.log("a es igual que 5");
}

console.log(a);
