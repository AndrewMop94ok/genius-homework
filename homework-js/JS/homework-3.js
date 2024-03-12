// -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
// const fruits = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];
// const nameFruit = fruits[0];
// const nameFruit1 = fruits[1];
// const nameFruit2 = fruits[2];
// const nameFruit3 = fruits[3];
// const nameFruits = [
//   nameFruit.name,
//   nameFruit1.name,
//   nameFruit2.name,
//   nameFruit3.name,
// ];
// console.log(nameFruits);
// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) console.log(i);
// }
// -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//   console.log(`цифра ${i}!`);
// }
// let i = 0;
// while (i <= 4) {
//   i++;
//   console.log(`цифра ${i - 1}!`);
// }
// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let num;
// do {
//   num = prompt("Введіть число більше 100");
//   if (num === null) {
//     alert("Дію скасовано!");
//     break;
//   } else num = parseFloat(num);

//   if (num < 100) {
//     alert("Спробуйте ще раз");
//   } else {
//     alert("Well done!");
//   }
// } while (num < 100 && num !== null);

// -- 5 --
// Вирахуйте середній вік
const girls = [
  { age: 23, name: "Оля" },
  { age: 29, name: "Аня" },
  { age: 10, name: "Юля" },
  { age: 20, name: "Катя" },
];

console.log(
  (girls[0].age + girls[1].age + girls[2].age + girls[3].age) / girls.length
);
