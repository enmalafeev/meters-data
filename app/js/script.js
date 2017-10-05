function sum(num1, num2) {
    return num1 * num2;
}

function add(num1, num2) {
    return num1 + num2;
}

function getValue(id) {
    var value = document.getElementById(id).value;
    return value;
}

function getResult(num1, num2, num3, num4) {
    var result = (num1 * num2) + (num3 * num4);
    return result;
}
var count = document.querySelector(".btn");

count.addEventListener('click', function() {
    var day_price = getValue("day-price");
    var night_price = getValue("night-price");
    var value_day = getValue("value-day");
    var value_night = getValue("value-night");
    $("#result").text(getResult(day_price, value_day, night_price, value_night));
});



// console.log(count);
// console.log(sum(3.5, 10));
// console.log(add(3.5, 10));
// console.log(getValue("day-price"));
// console.log(getValue("night-price"));
// console.log(getResult(2, 2, 3, 3));