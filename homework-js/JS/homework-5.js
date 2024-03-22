// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind
// const student1 = {
//   name: "Валера",
//   specialization: "Механік",
//   middleRating: "4",
//   missedLessons: "7",
//   showInfo: function () {
//     console.log(
//       "Ім*я: " + this.name + ",",
//       "Спеціальність: " + this.specialization + ",",
//       "Середній бал: " + this.middleRating + ",",
//       "Кількість пропущених занять: " + this.missedLessons + "."
//     );
//   },
// };
// student1.showInfo();

// const student2 = {
//   name: "Віктор",
//   specialization: "Пілот",
//   middleRating: "5",
//   missedLessons: "2",
// };

// student1.showInfo.bind(student2)();
// student1.showInfo.call(student2);
// student1.showInfo.apply(student2);

// const student3 = {
//   name: "Юлія",
//   specialization: "Розробник",
//   middleRating: "3",
//   missedLessons: "10",
// };

// student1.showInfo.bind(student3)();
// student1.showInfo.call(student3);
// student1.showInfo.apply(student3);

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке
// const wikiInfo = {
//   showInfo: function () {
//     console.log(this.name + " це  - " + this.item);
//   },
// };
// const htmlInfo = {
//   name: "HTML",
//   item: "мова розмітки гіпертексту.",
// };
// const cssInfo = {
//   name: "CSS",
//   item: "каскадні таблиці стилів.",
// };

// document
//   .querySelector("#html-inf")
//   .addEventListener("click", wikiInfo.showInfo.bind(htmlInfo));
// document
//   .querySelector("#CSS-inf")
//   .addEventListener("click", wikiInfo.showInfo.bind(cssInfo));
// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4

// const shop = function (name, price, howMany) {
//   let totalPrice = price * howMany;
//   return { name: name, totalPrice: totalPrice };
// };
// console.log(shop);

// let fruit1 = shop("banana", 30, 4.5);
// console.log(fruit1);
// let fruit2 = shop("cherry", 58, 1.3);
// console.log(fruit2);
// let fruit3 = shop("orange", 89, 3.4);
// console.log(fruit3);
