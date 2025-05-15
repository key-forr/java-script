//#region

{
  const firstObject = {};
  const secondObject = new Object();

  const user = {
    name: "Denys",
    password: "denys123098",
    "register date": 12,
    sayHi: () => {
      console.log("Hello world");
    },
    "second Say Hi": () => {
      console.log("Hello world");
    },
  };

  console.log(user["name"]);
  console.log(user.name);
  console.log(user["register date"]); // тільки так
  user.sayHi();
  user["second Say Hi"]();
  console.log(user.sgsg); // undefined
}

//#endregion

//#region
{
  const user = {};

  user.name = "Denys Kifor";
  user["is developer"] = true;

  console.log(user);

  user.name = "Максим";

  console.log(user);

  delete user.name;
  delete user["is developer"];

  console.log(user);

  // хоть ми й об'явили user як константу, міняти властивості ми можемо, а сам об'єкт ні. Помилка:
  // user = {
  //   name: "Денис",
  // };

  // console.log(user);
}

//#endregion

//#region
{
  const myName = "Денис";
  const age = 19;
  {
    const user = {
      name: myName,
      age: age,
    };
  }
  // Такий запис можна скоротити до:
  const user = {
    myName,
    age,
  };
  console.log(user);
}
//#endregion

//#region
{
  const obj = {
    123: "Example",
  };

  console.log(obj["123"]);
  console.log(obj[123]);
  //console.log(obj.123); // error

  const example = {
    const: true,
    let: false,
  };

  console.log(example.const);
}
//#endregion

//#region
{
  //const propKey = prompt(
  //"Придумайте свою властивість, наприклад: вік або ім'я"
  //);
  //const propValue = prompt("Тепер введіть значення цієї властивості");
  //   const myObj = {
  //     [propKey]: propValue,
  //   };
  //console.log(myObj);
}
//#endregion

//#region
{
  const user = {
    name: "Denys",
    age: 19,
  };

  console.log("name" in user ? "name є" : "name нема");

  const obj = {
    [`value ${2 ** 3 - 0}`]: "ahahhaa",
  };

  console.log(obj);
}
//#endregion

//#region
{
  const user = {
    name: "Denys",
    age: 19,
    birthDay: "31.01.2006",
  };

  for (const key in user) {
    console.log("Prop: ", key);
  }

  for (const value in user) {
    console.log("Prop value: ", user[value]);
  }

  const nums = {
    2: "Другий",
    1: "Перший",
    3: "Третій",
  };

  // вивід буде 1,2,3. Це пояснюється тим що перед ітерацією по масиві, об'єкт сортує елементи якщо це можливо, точніше якщо це числа
  // Навіть якщо ми позначимо ключі як '2' '1' '3', відбудеться приведення до типу number
  for (const num in nums) {
    console.log(nums[num]);
  }

  const secondNums = {
    name: "Denys",
    2: "Другий",
    1: "Перший",
    3: "Третій",
    age: 19,
  };

  console.log(secondNums); // В даному випадку посортується те що можна посортувати
}
//#endregion
