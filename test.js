const { removeNulls, removeValues } = require('./src/index');

const testObj = {
    name: "John",
    age: null,
    isActive: false,
    address: {
        city: "New York",
        zip: null,
        country: "USA"
    },
    hobbies: [null, "sports", false, undefined, ""]
};

// Test removeNulls (removes only null values)
console.log("Remove nulls:");
console.log(removeNulls(testObj));

// Test removeValues with a single value (undefined)
console.log("Remove undefined:");
console.log(removeValues(testObj, undefined));

// Test removeValues with an array of values (undefined and false)
console.log("Remove undefined and false:");
console.log(removeValues(testObj, [undefined, false]));

// Test removeValues with a single value (empty string)
console.log("Remove empty strings:");
console.log(removeValues(testObj, ""));
