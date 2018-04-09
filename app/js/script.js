$("#datepicker").datepicker();

var dateFormat = $("#datepicker").datepicker("option", "dateFormat");

$("#datepicker").datepicker("option", "dateFormat", "dd-mm-yy");

// Сохранение данных input в localstorage
var elements = document.querySelectorAll('input');

function checkValidity() {};

for (i = 0; i < elements.length; i++) {
    (function(element) {
        var id = element.getAttribute('id');
        element.value = localStorage.getItem(id); // обязательно наличие у элементов id
        element.oninput = function() {
            localStorage.setItem(id, element.value);
            checkValidity();
        };
    })(elements[i]);
}

function sum(num1, num2) {
    return num1 * num2;
}

function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function getValue(id) {
    var value = document.getElementById(id).value;
    return value;
}

function getResult(num1, num2, num3, num4) {
    var result = (num1 * num2) + (num3 * num4);
    return result;
}

function getValueDayMonth() {
    var prev = document.getElementById("value-day-prev").value;
    var cur = document.getElementById("value-day-current").value;
    var sub = cur - prev;
    document.getElementById("value-month-day").value = sub;
}

function getValueNightMonth() {
    var prev = document.getElementById("value-night-prev").value;
    var cur = document.getElementById("value-night-current").value;
    var sub = cur - prev;
    document.getElementById("value-month-night").value = sub;
}
  
var count = document.querySelector(".btn");

count.addEventListener('click', function () {
    var day_price = getValue("day-price");
    var night_price = getValue("night-price");

    var datePick = document.getElementById("datepicker").value;
    var value_month_day = getValue("value-month-day");
    var value_month_night = getValue("value-month-night");
    var res = document.querySelector("#result");

    var date = document.getElementsByClassName("date");
    var day = document.getElementsByClassName("day");
    var night = document.getElementsByClassName("night");
    var result = document.getElementsByClassName("res");
    
    
    res.innerHTML = getResult(day_price, value_month_day, night_price, value_month_night);

});






