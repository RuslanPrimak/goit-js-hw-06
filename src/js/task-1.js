"use strict";

import users from "./users.js";

const TASK_NAME = "========================= Task 1 =========================";
console.group(TASK_NAME);

const getUserNames = (users) => users.map((user) => user.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

console.groupEnd(TASK_NAME);
