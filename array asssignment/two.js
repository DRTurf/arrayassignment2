// Given array of student ages
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// 1. Sort the array
ages.sort((a, b) => a - b);

// 2. Find the minimum and maximum age
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);

// 3. Find the median age
let medianAge;
const mid = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
    
    medianAge = (ages[mid - 1] + ages[mid]) / 2;
} else {
    
    medianAge = ages[mid];
}

// 4. Find the average age
const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

// 5. Find the range of the ages
const rangeOfAges = maxAge - minAge;

// 6. Compare (min - average) and (max - average) using abs()
const minAvgDiff = Math.abs(minAge - averageAge);
const maxAvgDiff = Math.abs(maxAge - averageAge);

// Output the results
console.log(`Sorted Ages: ${ages}`);
console.log(`Minimum Age: ${minAge}`);
console.log(`Maximum Age: ${maxAge}`);
console.log(`Median Age: ${medianAge}`);
console.log(`Average Age: ${averageAge}`);
console.log(`Range of Ages: ${rangeOfAges}`);
console.log(`Absolute Difference (Min - Average): ${minAvgDiff}`);
console.log(`Absolute Difference (Max - Average): ${maxAvgDiff}`);
console.log(`Bigger: ${Math.max(maxAvgDiff,minAvgDiff)} and Smaller:${Math.min(maxAvgDiff,minAvgDiff)}`);
