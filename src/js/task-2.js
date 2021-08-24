"use strict";

import users from "./users.js";

const TASK_NAME = "========================= Task 2 =========================";
console.group(TASK_NAME);

const getUsersWithEyeColor = (users, color) =>
  users.filter((user) => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

console.groupEnd(TASK_NAME);
