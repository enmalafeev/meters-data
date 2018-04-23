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

    var tbody = document.getElementsByTagName("TBODY")[0];
    var row = document.createElement("TR");
    var td1 = document.createElement("TD");
    var td2 = document.createElement("TD");
    var td3 = document.createElement("TD");
    var td4 = document.createElement("TD");
    
    tbody.appendChild(row);
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);

    var day_price = getValue("day-price");
    var night_price = getValue("night-price");

    var datePick = document.getElementById("datepicker").value;
    var value_month_day = getValue("value-month-day");
    var value_month_night = getValue("value-month-night");
    var res = document.querySelector("#result");

    td1.innerHTML = datePick;
    td2.innerHTML = value_month_day;
    td3.innerHTML = value_month_night;
    td4.innerHTML = getResult(day_price, value_month_day, night_price, value_month_night);
    res.innerHTML = getResult(day_price, value_month_day, night_price, value_month_night);

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
});

function delRowTable() {
    document.getElementsByTagName("TBODY")[0].deleteRow(-1);
}






