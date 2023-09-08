// 1) Створіть дві змінні a та b. Виведіть у консоль результат їх множення.
let a;
let b;
console.log(a * b);

// 2) Створіть дві змінні c та d. Виведіть у консоль результат ділення першого на друге.
let c;
let d;
console.log(c / d);

// 3) Створіть дві змінні e та f. Виведіть у консоль результат додавання.
let e;
let f;
console.log(e + f);

// 4) Визначте змінні зі значеннями 11, true, "java script", "100" і виведіть їх в
let number = 11;
let boolean = true;
let string = "java script";
let string2 = "100";
console.log(number);
console.log(boolean);
console.log(string);
console.log(string2);

// 5) Переробіть наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --
// let num = 1;
// num = num + 11;
// num = num – 11;
// num = num * 11;
// num = num / 11;
// num = num + 1;
// num = num – 1;
let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num += 1;
num -= 1;
console.log(num);

// /************************************************* *****************/
// Таски на prompt (вводити з допомогою prompt, виводити з допомогою alert):

// 1) Запитати число у користувача, піднести його до квадрату і вивести результат.
let answer = prompt("Введіть число", "");
alert(answer ** 2);

// 2) Вивести середнє арифметичне двох чисел. Числа запитувати у користувача.
let firstNumber = prompt("Введіть перше число", "");
let secondNumber = prompt("Введіть друге число", "");
alert((firstNumber + secondNumber) / 2);

// 3) Перевести кількість хвилин на секунди та вивести результат. Число хвилин запитувати у користувача.
let answerOfUser = prompt("Введіть кількість хвилин", "");
alert(`${answerOfUser * 60} секунд `);

// 4) Створіть змінну greeting зі значенням 'Hello,' і оголосіть змінну userName. Запитайте ім'я користувача та внесіть це значення у змінну userName. Виведіть повідомлення з привітанням, наприклад, 'Hello, Vasya!'. (згадайте про конкатенацію)
const greeting = "Hello";
let userName = prompt("Input your name", "");
alert(`${greeting}, ${userName}!`);
