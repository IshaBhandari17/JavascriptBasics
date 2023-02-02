const callAvg = (a, b, c) => (a + b + c) / 3;
const scored = callAvg(44, 23, 72);
const kscore = callAvg(34, 54, 66);
console.log(scored, kscore);
const winner = function (avgDolphins, avgKwala) {
    if (avgDolphins >= avgKwala * 2) { console.log("dolphin wins"); }
    else if (avgKwala >= avgDolphins * 2) { console.log("kwala wins"); }
    else { console.log("no one wins"); }
}
winner(scored, kscore);


