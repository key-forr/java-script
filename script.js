//#region
{
  // Об'єкт це силочний тип даних, саме тому коли ми хочемо порівняти два проекта, в нас буде false

  let obj1 = { name: "Denys" };
  let obj2 = { name: "Denys" };
  console.log(obj1 == obj2); //false

  obj2 = obj1;
  console.log(obj1 === obj2); // true // тепер obj2 зсилається на obj1

  obj1.name = "newName";
  console.log(obj2.name); // newName, ми через obj1 змінили obj2, тому що силка

  const firstUser = {
    name: "zoe",
    age: 19,
    addres: {
      city: "Kiev",
      street: "Довбуша",
    },
  };

  const secondUser = {
    name: "zoe",
    age: 19,
    addres: {
      city: "Kiev",
      street: "Довбуша",
    },
  };

  const areObjectsEqual = (user1, user2) => {
    const keys1 = Object.keys(user1);
    const keys2 = Object.keys(user2);

    // console.log("keys1: ", keys1);
    // console.log("keys2: ", keys2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key in user1) {
      const value1 = user1[key];
      const value2 = user2[key];
      const areValueObject =
        typeof value1 === "object" && typeof value2 === "object";

      if (areValueObject) {
        return areObjectsEqual(value1, value2);
      }

      if (value1 !== value2) {
        return false;
      }
    }

    return true;
  };

  console.log(
    "user1 та user2 одинакові?: ",
    areObjectsEqual(firstUser, secondUser)
  );
}
//#endregion
