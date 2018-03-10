//console
console.log("hello world");

console.log('');

//strings
console.log('Strings-');
console.log('I want a smoothie');
console.log(':P' + ':0');

console.log('');

//numbers
console.log('Numbers-');
console.log(8);
console.log(8 + 8);
console.log(8 - 8);
console.log(8 * 8);
console.log(8 / 8);
console.log(8 % 3);

console.log('');

//strings & numbers
console.log('Strings & Numbers-');
console.log('8 * 8');
console.log('cheese' + 8);
console.log('I am' + (8 * 8) + ' years old');
console.log('8 * 8', 8 * 8);

console.log('');

//booleans
console.log('Booleans-');
console.log(true, false);
console.log('3 > 4:', 3 > 4); //comparison
console.log('2 <= 2:', 2 <= 2);
console.log('2 > 1 & 2 < 12:', 2 > 1 & 2 < 12); //'and' operator
console.log('5 > 12  || 6 <= 18', 5 > 12  || 6 <= 18); //'or' operator

console.log('');

//three basic types
console.log('Basic Types-');
console.log(typeof 'hello', typeof (8 - 7), typeof (2 > 1));

console.log('');

//variables
console.log('Variables-')

var five = 5;
console.log('five:', five);
var ten = 10;
console.log('five + ten:', five + ten);
console.log('five * ten:', five * ten);

console.log('');

//altering variables
console.log('Altering Variables-');

var myStudentDebt = 800;

console.log('myStudentDebt:', myStudentDebt);
myStudentDebt = myStudentDebt - 100;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt -= 100;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt += 100;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt++; //+1
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt--; //-1
console.log('myStudentDebt:', myStudentDebt);

console.log('');

//arrays
console.log('Arrays-');

var myLuckyNumbers = [3, 7, 8, 14, 21]; //[val, val, etc]
console.log('myLuckyNumbers:', myLuckyNumbers);
console.log(myLuckyNumbers[1]);

console.log('');

//objects
console.log('Objects-');

var me = {
  name: 'Bryant',
  age: 27,
  nativeNewYorker: false,
};
console.log('me:', me);
console.log("me['name']:", me['name']);
console.log("me.name:", me.name);

console.log('');

//functions
console.log('Functions-');

var sayHi = funtion() {
  console.log('hi!');
};

sayHi();

var sayHi = funtion() {
  console.log('hi!');
};
console.log('sayHi():');
sayHi();

var saySomeMessage = funtion(message) {
  console.log(message);
};
console.log('saySomeMessage('\hello\'):');
saySomeMessage('hello');
saySomeMessage('goodbye');

var addNumbers = function(num1, num2) {
  return num1 + num2
};
console.log(addNumbers(8,12));
