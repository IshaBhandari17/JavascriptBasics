let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
let markBmi = markMass / (markHeight ** 2);
let johnBmi = johnMass / (johnHeight ** 2);
console.log(markBmi, johnBmi);
if (markBmi > johnBmi) {
    console.log("mark bmi is higher");
}
else {
    console.log("john bmi is higher");
}
console.log(`mark bmi ${markBmi} is heigher`);