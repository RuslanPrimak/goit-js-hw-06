"use strict";

import users from "./users.js";

const TASK_NAME = "========================= Task 4 =========================";
console.group(TASK_NAME);

const getInactiveUsers = (users) => users.filter((user) => !user.isActive);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

console.groupEnd(TASK_NAME);
