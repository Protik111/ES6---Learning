const ages = [20, 30, 25, 18, 21];
const ages2 = [25,14, 26, 34];
const ages3 = [14,52, 52, 54];
// const allages = ages.concat(ages2).concat(ages3);
const allages = [...ages, ...ages2, 5, ...ages3]; // spread operator
console.log(allages);

const money = [100, 800, 400];
const max = Math.max(...money);
console.log(max);
