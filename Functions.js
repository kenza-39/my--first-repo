function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(8));
function largestNumber(a, b, c) {
    return Math.max(a, b, c);
}
console.log(largestNumber(10, 25, 15));

function reverseString(text) {
    return text.split('').reverse().join('');
}
console.log(reverseString("hello"));