// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.

// let value = 1;

// if (value > 0) {
//   console.log(true);
// } else if (value < 0) {
//   console.log(false);
// } else {
//   console.log(NaN);
// }

// let value = 0;

// if (value > 0) {
//   console.log(true);
// } else if (value < 0) {
//   console.log(false);
// } else {
//   console.log(NaN);
// }

// let value = -3;

// if (value > 0) {
//   console.log(true);
// } else if (value < 0) {
//   console.log(false);
// } else {
//   console.log(NaN);
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test', "qwerty", true

// const value = "test";

// if (value === "test") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// const value = "qwerty";

// if (value === "test") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// const value = true;

// if (value === "test") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

// const value = 1;

// if (value > 10) {
//   console.log(value - 5);
// } else if (value < 10) {
//   console.log(value + 5);
// } else {
//     console.log(NaN)
// }

// const value = 10;

// if (value > 10) {
//   console.log(value - 5);
// } else if (value < 10) {
//   console.log(value + 5);
// } else {
//   console.log(NaN);
// }

// const value = 13;

// if (value > 10) {
//   console.log(value - 5);
// } else if (value < 10) {
//   console.log(value + 5);
// } else {
//   console.log(NaN);
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const userNum = prompt("Введіть номер місяця");
// const num = Number(userNum);
// let month;

// switch (num) {
//   case 1:
//     month = "Січень";
//     alert(`Номер ${num} відповідає місяцю ${month} xD`);
//     break;
//   case 2:
//     month = "Лютий";
//     alert(`Номер ${num} відповідає місяцю ${month} xD`);
//     break;
//   case 3:
//     month = "Березень";
//     alert(`Номер ${num} відповідає місяцю ${month} xD`);
//     break;
//   case 4:
//     month = "Квітень";
//     alert(`Номер ${num} відповідає місяцю ${month} xD`);
//     break;
//   case 5:
//     month = "Травень";
//     alert(`Номер ${num} відповідає місяцю ${month} xD`);
//     break;
//   case 6:
//     month = "Червень";
//     alert(`Номер ${num} відповідає місяцю ${month} xD`);
//     break;
//   case 7:
//     month = "Липень";
//     alert(`Номер ${num} відповідає місяцю ${month} xD`);
//     break;
//   case 8:
//     month = "Серпень";
//     alert(`Номер ${num} відповідає місяцю ${month} xD`);
//     break;
//   case 9:
//     month = "Вересень";
//     alert(`Номер ${num} відповідає місяцю ${month} xD`);
//     break;
//   case 10:
//     month = "Жовтень";
//     alert(`Номер ${num} відповідає місяцю ${month} xD`);
//     break;
//   case 11:
//     month = "Листопад";
//     alert(`Номер ${num} відповідає місяцю ${month} xD`);
//     break;
//   case 12:
//     month = "Грудень";
//     alert(`Номер ${num} відповідає місяцю ${month} xD`);
//     break;

//   default:
//     alert("Такого номера місяця не існує");
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const userNum = prompt("Введіть тризначне число.");
// const num = Number(userNum);

// const firstNum = num % 10;
// const secNum = (num / 10) % 10;
// const secondNum = parseInt(secNum);
// const trdNum = num / 100;
// const thirdNum = parseInt(trdNum);
// const backupNum = firstNum + secondNum + thirdNum;

// alert(backupNum);
