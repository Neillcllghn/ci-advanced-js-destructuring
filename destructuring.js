/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let John = ages[0];
// let Mary = ages[1];
// let Joe = ages[2];
let [John, Mary, Joe] = ages;
console.log(John, Mary, Joe);
// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};

let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);


// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLaguage: "english",
    secondLanguage: "french",
    thirdLangauage: "german",
    fourthlanguage: "japanese",
}

let {firstLaguage, thirdLangauage} = languages2;
console.log(firstLaguage, thirdLangauage);
// Using rest parameter syntax
let fruits = ["apple", "oramge", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};

let {brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);