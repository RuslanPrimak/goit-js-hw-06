"use strict";

import users from "./users.js";

const TASK_NAME = "========================= Task 10 =========================";
console.group(TASK_NAME);

const getSortedUniqueSkills = (users) =>
  users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .sort()
    .reduce((uniqueSkills, skill, index, array) => {
      if (index === 0 || array[index - 1] !== skill) {
        uniqueSkills.push(skill);
      }
      return uniqueSkills;
    }, []);

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

console.groupEnd(TASK_NAME);
