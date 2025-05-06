//#region
// функції в js можуть приймати будь яку кількість параметрів
// наприклад функція
console.log(Math.max(2, 4, 6, 23, 636));

// та навіть така функція
function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3));
// ми можемо зробити навіть так, помилки не буде, але тільки перші два параметри будуть робочими
console.log(sum(2, 3, 5, 5, 5));
//#endregion

//#region
// тобто ми можемо всі передані параметри зберегти таким чином в args
function sum(...args) {
  let sum = 0;

  for (let arg of args) {
    sum += arg;
  }

  return sum;
}

console.log(sum(2, 24, 35));
//#endregion

//#region
// в даному прикладі перші два параметра підуть в змінні name та surname, всі інші перейдеть в other,
// ми можемо навіть звертатись за індексом і взагалі працювати як з простим масивом
function fullName(name, surname, ...other) {
  console.log(name + " " + surname);

  console.log(other);
  console.log(other.length);
  console.log(other[4]);
}

fullName("Denys", "Kifor", 1, 2, 3, 4, "Diana");

//!!!!! Важливо що spred має бути в кінці тому що в іншому випадку буде помилка
// function f(arg1, ...rest, arg2) { // arg2 після ...rest ?!
//   // помилка
// }!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//#endregion

//#region
// також в js є такий псевдомасив arguments
// arguments це старий спосіб, і в ньому є великий мінус, що він не підтримує методи масивів
// в той же час коли spread оператор підтримує методи масивів

/* також даний псевдомасив він містить абсолютно всі параметри а не ті що лишились,
 тобто в spred операторі може нічого не бути хоча ми передали параметри, але просто ті значення можуть забрати інші 
 параметри які знаходяться першими
 а в arguments абсолютно все */
function showMe() {
  console.log(arguments.length);
  console.log(arguments[1] * 2);
  console.log(arguments[0] + "Denys");
}
showMe("Kifor ", 4);

//#endregion

//#region
// стрілочні функції не мають свого this, так само і не мають свого arguments,
// тому arguments береться вище, в даному випадку з функції f
function f() {
  const showArg = () => console.log(arguments[0]);
  showArg(2);
}

f("We see zero");
//#endregion

//#region
const nums = [1, 2, 3];
const nums2 = [2, 3, 6];
console.log(Math.max(nums)); //Nan
// тому що очікується список, або елементи, а тут масив, та ми можемо зробити ось так:
console.log(Math.max(nums[0], nums[1], nums[2]));
// але що робити якщо елементів буде 1000000
// тут буде працювати оператор spred
console.log(Math.max(...nums));
// так ми навіть можемо передати декілька об'єктів
console.log(Math.max(...nums, ...nums2));
console.log(Math.max(...nums, 3555, ...nums2, 334)); // навіть так можна

const mergeArr = [1, ...nums, 4, ...nums2, 23];
console.log(mergeArr);

let str = "Привет";
console.log([...str]);
let str2 = "Привет";
// Array.from преобразует перебираемый объект в массив, результат аналогічний
console.log(Array.from(str2));

// Array працює з псевдомасивами, так і з інтерированими масивами
// а [...str] тільки з ітерированими, тому що він працює під капотом через for of який вимагає ітерування
//#endregion
