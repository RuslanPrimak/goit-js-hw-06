"use strict";

import users from "./users.js";

const TASK_NAME = "========================= Task 5 =========================";
console.group(TASK_NAME);

const getUserWithEmail = (users, email) =>
  users.find((user) => user.email === email);

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

console.groupEnd(TASK_NAME);
