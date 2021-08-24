"use strict";

import users from "./users.js";

const TASK_NAME = "========================= Task 8 =========================";
console.group(TASK_NAME);

const getUsersWithFriend = (users, friendName) =>
  users
    .filter((user) => user.friends.some((friend) => friend === friendName))
    .map((user) => user.name);

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

console.groupEnd(TASK_NAME);
