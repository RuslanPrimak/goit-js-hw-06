"use strict";

import users from "./users.js";

const TASK_NAME = "========================= Task 7 =========================";
console.group(TASK_NAME);

const calculateTotalBalance = (users) =>
  users.reduce((totalBalance, user) => totalBalance + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916

console.groupEnd(TASK_NAME);
