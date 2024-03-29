
let a = [1, 2, 3, 4, 5];
let result = a.some((val) => {
  return val % 2 === 0;
});

console.log(result);


// Remove duplicates from an array

const a = [1, 2, 2, 3, 4, 5, 6, 7, 5, 8, 8];

const newArray = [...new Set(a)];

console.log(newArray);



const x = [null, , null];
console.log(x[1]);


let x = [1, 2, 3, 4];
let y = x.map((num) => num * 2);
let z = y.reduce((acc, curr) => acc + curr, 0);

console.log(z);

const x = 2.27;

console.log(parseFloat(x));



let calc = (x, y = 2) => {
  return x > 3 ? x + y : x * y;
};

console.log(calc(3));



const obj = { a: 5 };
delete obj.a;

console.log(obj.a);



let result = (function (x) {
  return x * 2;
})(5);

console.log(result);











let x = [1, 2];
let y = x.reverse();

console.log(x, y);

// Array.reverse reverses the original array also



let x = [3, 2, 4, 5, 1, 10];

let y = x.reduce((x, y) => {
  if (x > y) return x;
  return y;
});

console.log(y);





const x = [1, , 3];
console.log(x.length);



let a = [5, 6, 7, 8, 9];
let [, x, , y] = a;

console.log(x, y);

// Array destructuring










let x = [1, 2, 3];
let y = x.join("-");
let z = y.replaceAll("-", "");

console.log(typeof z);
console.log(z);
console.log(y);
console.log(typeof y);







let x = 1;

console.log(Boolean(x));
console.log(Boolean(!x));


let x = [1, 2, 3];

let y = x.indexOf(2) * 2;

console.log(y);





let x = 0;
let y = x++ + --x;
console.log(y);


let x = [1, 2, 3];

let y = x.join("-").split("-");

console.log(y);






let x = "HELLO";
let y = Array.from(x);

console.log(y[1]);





let x = { a: { b: 1 } };

let y = JSON.parse(JSON.stringify(x));

y.a.b = 10;

console.log(y);

console.log(x.a.b);
let x = "5";

let y = Number(x) + 1;

console.log(y);









let n = [1, 2, 3];

let x = n.map((val) => val ** val);

console.log(x);











let x = [1, 2, 3];

x[10] = 7;

console.log(x.length);



let x = [1, 2, 3];
let y = x.find((n) => n > 1);

console.log(y);







let a = [1, 2, 3, 4, 5];
let index = a.indexOf(3);

console.log(a[index]);





let x = new Promise((y, z) => {
  y("Hello");
  z("World");
});

x.then((res) => console.log(res));





let x = [1, 2, 3, 4, 5];
let y = x.every((val) => val > 0);

console.log(y);







let rollNum = 23;
let studentId = 6;

[studentId, rollNum] = [rollNum, studentId];

console.log(studentId);
console.log(rollNum);

// Swap two variables in javascript








let x = 12;
let y = typeof x;

console.log(typeof y);





let x = (a = "b") => {
  console.log(a);
};

x();
x("c");







let x = [1, 2, 3];

let y = x.filter((val) => val > 1);

x = [4, 5, 6];

y = y.map((val) => val * 2);

console.log(x, y);










let x = [
  [1, 2],
  [3, 4],
];

let y = x.flat();

console.log(x);
console.log(y);






const x = [1, 2, 3, 4];

x.unshift(0);

console.log(x);







let x = { b: 1, c: 2 };

let y = Object.keys(x);

console.log(y.length);




let x = [1, 2, 3];
let y = [...x];
let z = y.map((val) => val * 2);
z[1] = 8;

console.log(z);





let x = true;
let y = false;
let z = x + y && x * y;

console.log(z);





let x = [1, 2, 3];
let [, , y] = x;
console.log(y);






let x = [1, 2, 3];

let y = x.map((num) => {
  x.push(num + 3);
  return num + 1;
});

console.log(y);





let a = [1, 2, 3];
a.push(a[2]++);

console.log(a);






let x = {
  y: "z",
  print: () => {
    return this.y === "z";
  },
};

console.log(x.print());





setTimeout(() => {
  console.log(1);
}, 0);

console.log(2);






let x = [null, 0, "0", false, "a"];
let y = x.filter((val) => val);
console.log(y);





let x = 6;
let y = typeof (x == 6);
console.log(y);






let x = [31, 2, 8];

x.sort();
console.log(x);



let x = "one";
console.log(Number(x));


let x = "8";
let y = +x;

console.log(y);
console.log(typeof y);



const arr = [1, 2, 3];
arr.length = 0;
arr.push(4);

console.log(arr);

let x = [1, 2, 3];
let y = x.slice();
y.push(4);

console.log(x.length + y.length);




const str = "How are you ?";

console.log(str.startsWith("How"));
console.log(str.endsWith("you ?"));
console.log(str.endsWith("are", 7));






const sealedObject = {
  name: "Anshika Agarwal",
  age: "25",
};

Object.seal(sealedObject);
//Object.freeze(sealedObject);

sealedObject.age = "26";

console.log(sealedObject.age);









function multiply(factor) {
  return function (value) {
    return value * factor;
  };
}

const square = multiply(2);

console.log(square(5));




let { log } = console;
log("Hello");