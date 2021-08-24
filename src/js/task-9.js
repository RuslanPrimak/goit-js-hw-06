"use strict";

import users from "./users.js";

const TASK_NAME = "========================= Task 9 =========================";
console.group(TASK_NAME);

const getNamesSortedByFriendsCount = (users) =>
  users
    .sort((userA, userB) => userA.friends.length - userB.friends.length)
    .map((user) => user.name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

console.groupEnd(TASK_NAME);
