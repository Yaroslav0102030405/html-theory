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
