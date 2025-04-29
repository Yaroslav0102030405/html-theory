// об`ект -  це впорядкована колекція значень, яка може містити елементи
// будь-якого типу даних (числа, рядки, об'єкти, інші масиви тощо
// Об'єкт у JavaScript – це центральна структура даних мови,
// яка дозволяє зберігати дані в парах ключ/значення.

// Масив це набір якіхось едементі
const playlist = {
  name: 'Мщй супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2'],
  trackCount: 1,
  changeName(newName) {
    this.name = newName;
  },
  addTracks(newTracks) {
    this.tracks.push(newTracks);
  },
  updateRating(newRating) {
    this.rating = newRating;
    this.trackCount = this.tracks.length;
  },
};

playlist.changeName('Нове ім`я');
playlist.addTracks('трек-3');
playlist.updateRating(7);

console.log(playlist);

// const propertyName = 'tracks';

// console.log(playlist[propertyName]);

// const inutName = 'color';
// const inputValue = 'red';

// const colorData = { [inutName]: inputValue };
// console.log(colorData);

const feedback = {
  a: 1,
  b: 2,
  c: 3,
};

let total5 = 0;

const keys = Object.keys(feedback);

for (const key of keys) {
  console.log(key);
  console.log(feedback[key]);
  //   total5 += feedback[key];
}

// console.log(total5);

const values = Object.values(feedback);

for (const value of values) {
  total5 += value;
}
console.log(total5);

const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

// const findFriendsName = (allFriends, name) => {
//   for (const friend of allFriends) {
//     if (friend.name === name) {
//       return 'Знайшли';
//     }
//   }
//   return 'Не знайшли';
// };

// console.log(findFriendsName(friends, 'Poly'));

// const findFriendsName = (allFriends) => {
//   const names = [];
//   for (const friend of allFriends) {
//     names.push(friend.name);
//   }
//   return names;
// };

// console.log(findFriendsName(friends));

// const findFriendsName = (allFriends) => {
//   const online = [];
//   for (const friend of allFriends) {
//     if (friend.online) {
//       online.push(friend.name);
//     }
//   }
//   return online;
// };

// console.log(findFriendsName(friends));

const findFriendsName = (allFriends) => {
  const friendsByStatus = { online: [], offline: [] };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend.name);
      continue;
    }
    friendsByStatus.offline.push(friend.name);
  }
  return friendsByStatus;
};

console.log(findFriendsName(friends));

const s = {
  a: 1,
  b: 2,
  c: 3,
};

// spread - бере колекцію та зробить її на окреми елементи

console.log(Object.keys(s).length);

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
console.log(allTemps);

const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

console.log(finalSettings);

const playlist2 = {
  name: 'Мщй супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2'],
  trackCount: 1,
};

const { name, rating, tracks, trackCount } = playlist;
console.log(name);

const rgb = [255, 100, 200];

const [red, , blue] = rgb;
console.log(red, blue);

const doMatch = (a, b, callback) => {
  const result = callback(a, b);
  console.log(result);
};

const add = (x, y) => {
  return x + y;
};

const sub = (x, y) => {
  return x - y;
};

doMatch(2, 3, add);
doMatch(20, 10, sub);

// Функція фільтр

const filter = (array, callback) => {
  const filteredArray = [];

  for (const ar of array) {
    const passed = callback(ar);

    if (passed) {
      filteredArray.push(ar);
    }
  }
  return filteredArray;
};

const callback1 = (value) => {
  return value > 3;
};

console.log(filter([1, 2, 3, 4, 5], callback1));
console.log(filter([5, 6, , 7, 8], callback1));

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 100, isFresh: true },
  { name: 'bananes', quantity: 300, isFresh: true },
];

const getFryitsQuantity = (fruit) => {
  return fruit.quantity > 100;
};

console.log(filter(fruits, getFryitsQuantity));

// замикання — це здатність функції пам'ятати та мати доступ до змінних
// зі своєї лексичної області видимості
// (тобто області видимості, де функція була оголошена),
// навіть після того, як зовнішня функція,
// в якій вона була оголошена, завершила своє виконання.

// замикання - функцію, яка оголошена всередині іншої функції.
// Внутрішня функція має доступ до змінних зовнішньої функції,
// навіть після того, як зовнішня функція вже завершила своє виконання.
// Ось ця "пам'ять" внутрішньої функції
// про змінні зовнішньої області видимості і називається замиканням.

// використовується щоб створювати приватні змінні та методи
// Збереження стану між викликами функцій

const makeSheff = (name) => {
  const makeDish = function (dish) {
    console.log(`${name} готує ${dish}`);
  };

  return makeDish;
};

const mango = makeSheff('Mango');
const kiwi = makeSheff('Kiwi');

mango('котлети');
kiwi('пироги');
console.dir(mango);

const myLibFactory = () => {
  let value = 0;

  const add = function (number) {
    value += number;
  };

  return {
    add,
    getValue() {
      return value;
    },
  };
};

const myLib = myLibFactory();

myLib.add(10);

console.dir(myLib.getValue);

// В стрілочних функціях не має свого аргумент зміної та this
// В стрілочних функція діз запам'ятовую контекст при об'яві (контект сроліки не можливо змінити)

// Можливість зв'язати об'ект по силці

const objC = {
  z: 3,
};

const objB = Object.create(objC);
objB.x = 2;
// console.log(objB);

const objA = Object.create(objB);
objA.a = 1;
console.log(objA);
console.log(objA.x);
console.log(objA.z);

// Прототипне наслідування в JavaScript — це механізм,
//   за допомогою якого об'єкти можуть успадковувати властивості
//   та методи від інших об'єктів.На відміну від класичного наслідування
// в інших мовах програмування,
//   JavaScript використовує прототипи для створення зв'язку між об'єктами.

// Уяви собі, що кожен об'єкт в JavaScript має внутрішній приватний зв'язок з іншим об'єктом,
// який називається його прототипом.Коли ти намагаєшся отримати доступ до властивості об'єкта,
// JavaScript спочатку шукає цю властивість у самому об'єкті.
// Якщо він її не знаходить, то він переходить до прототипу цього об'єкта і шукає там.
// Цей процес продовжується вгору по ланцюжку прототипів до тих пір,
//   поки властивість не буде знайдена або не буде досягнуто кінець ланцюжка(зазвичай null).

// Властивість __proto__ в JavaScript — це спосіб отримати доступ до внутрішнього прототипу об'єкта.
// Як я вже згадував раніше, кожен об'єкт має внутрішню приватну властивість [[Prototype]],
// яка вказує на його прототип — об'єкт, від якого він успадковує властивості та методи.

// Класи в JavaScript — це свого роду "шаблони" для створення об'єктів.
// Уяви собі, що клас — це креслення будинку,
// а об'єкт — це вже побудований будинок за цим кресленням.

// класи в JavaScript є синтаксичним цукром над прототипним успадкуванням,
//   яке вже існувало в JavaScript.Це означає, що під капотом все ще працюють прототипи,
//   але синтаксис класів робить роботу з об'єктами більш зрозумілою
//     та схожою на інші об'єктно - орієнтовані мови програмування.

// Класи визначаються за допомогою ключового слова class, за яким слідує назва класу.
// Зазвичай назви класів пишуться з великої літери.
// Тіло класу міститься у фігурних дужках { }.
// class МійКлас {
//   // Тіло класу
// }

// Конструктор(constructor): Спеціальний метод constructor()
// використовується для створення та ініціалізації об'єктів, створених на основі класу.
// Він викликається автоматично при створенні нового об'єкта за допомогою ключового слова new.
// У конструкторі зазвичай визначаються початкові значення властивостей об'єкта.
// class Автомобіль {
//     constructor(марка, модель) {
//         this.марка = марка;
//         this.модель = модель;
//     }
// }

// let мояМашина = new Автомобіль("Toyota", "Camry");
// console.log(мояМашина.марка); // Виведе: Toyota

// Методи: Класи можуть містити методи — функції, які пов'язані з об'єктами
// цього класу і можуть виконувати певні дії.
// Методи визначаються всередині тіла класу як звичайні функції.
// class Собака {
//     constructor(ім'я) {
//         this.ім'я = ім'я;
//     }

//     гавкнути() {
//         console.log("Гав-гав!");
//     }
// let мійПес = new Собака("Бобик");
// мійПес.гавкнути(); // Виведе: Гав-гав!

// Властивості: Властивості об'єктів зазвичай визначаються в конструкторі
// за допомогою ключового слова this, яке посилається на поточний об'єкт, що створюється.

// Успадкування(extends ): Класи можуть успадковувати властивості
// та методи від інших класів за допомогою ключового слова extends.
// Клас, що успадковує, називається підкласом або похідним класом,
//   а клас, від якого відбувається успадкування, називається суперкласом або базовим класом.
// class Тварина {
//     constructor(назва) {
//         this.назва = назва;
//     }

//     звук() {
//         console.log("Якийсь звук");
//     }
// }

// class Кіт extends Тварина {
//     звук() {
//         console.log("Мяу!");
//     }
// }

// let мійКіт = new Кіт("Мурчик");
// мійКіт.звук(); // Виведе: Мяу!

// super(): У конструкторі підкласу для виклику конструктора
// суперкласу використовується ключове слово super().
// Це необхідно для ініціалізації властивостей, успадкованих від суперкласу.
// Також super може використовуватися для виклику методів суперкласу з підкласу.

// Статичні методи та властивості(static): Статичні методи та властивості
// належать самому класу, а не окремим об'єктам, створеним на його основі.
// Вони викликаються безпосередньо через ім'я класу.
// class Математика {
//     static pi = 3.14159;

//     static додати(a, b) {
//         return a + b;
//     }
// }

// console.log(Математика.pi); // Виведе: 3.14159
// console.log(Математика.додати(5, 3)); // Виведе: 8
// Класи в JavaScript є потужним інструментом для організації коду,
//   створення багаторазово використовуваних компонентів та реалізації
//   об'єктно-орієнтованих принципів програмування.

class Car {
  static Add = 'asds';

  static logInfo(carObj) {
    console.log(carObj);
  }

  #test = 'test';

  constructor({ brand, model, price } = {}) {
    this.brand = brand;
    this._model = model;
    this.price = price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }

  updateModel(newModel) {
    this.model = newModel;
  }

  get model() {
    return this._model;
  }

  set model(newModel) {
    this._model = newModel;
  }
}

const carInstance = new Car({ brand: 'Audi', model: 'Q3', price: '2500' });

Car.logInfo(carInstance);
