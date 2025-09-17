// // js - интерпретируемый, динамичный (1995)
// // var — устаревший, функциональная область видимости, подвержен hoisting.
// // let — блочная область видимости, можно менять значение.
// // const — блочная область, нельзя переопределить (но можно менять объект/массив внутри).

// // Примитивы: number, string, boolean, null, undefined, symbol, bigint.
// // Объекты: Object, Array, Function, Date, Map, Set и т.д

// // == — сравнивает с приведением типов ("5" == 5 → true).
// // === — строгое сравнение без приведения ("5" === 5 → false).

// // Глобальная
// // Функциональная (var)
// // Блочная (let, const)

// // forEach — просто перебор, ничего не возвращает.
// // map — возвращает новый массив с преобразованными элементами.
// // filter — возвращает массив, отфильтрованный по условию.
// // reduce — сводит массив к одному значению (сумма, объект и т.д.).

// // Функция-конструктор:
// function User(name) {
//   this.name = name;
// }
// let u = new User("Иван");


// // Класс (синтаксический сахар над прототипами):
// class User {
//   constructor(name) { this.name = name; }
// }
// let u = new User("Иван");

// // Классы более читаемы, поддерживают наследование через extends, методы и геттеры/сеттеры.



// let n = 42;           // number
// let s = "Привет";     // string
// let flag = true;      // boolean
// let empty = null;     // null
// let undef;            // undefined
// let big = 123n;       // bigint
// let sym = Symbol();   // symbol

// let msg = age > 18 ? "Взрослый" : "Ребенок";
// if (age > 18) {
//     console.log("Вход");
// }
// else {
//     console.log("Поки");
// }
// for (let i = 10; i < 5; i++){
//     console.log(i);
// }

// arr.forEach(element => console.log(element))

// function sum(a, b){
//     return a + b;
// }

// console.log(sum(2, 5));

// let user = {
//     name: "Ivan",
//     age: 20,
//     sayHi(){
//         console.log("Hi");
//     }

// };
// console.log(user.name);

// let arr = [1, 2, 5, 6, 78, 912];
// arr.push(9);
// arr.pop();
// arr.shift();
// arr.unshift(0);

// let el = document.getElementById("myDiv");
// el.textContent = "new message";
