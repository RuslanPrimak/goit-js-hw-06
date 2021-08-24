"use strict";

import users from "./users.js";

const TASK_NAME = "========================= Task 3 =========================";
console.group(TASK_NAME);

const getUsersWithGender = (users, gender) =>
  users.filter((user) => user.gender === gender).map((user) => user.name);

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

console.groupEnd(TASK_NAME);
