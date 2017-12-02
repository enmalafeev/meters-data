$("#datepicker").datepicker();

// Сохранение данных input в localstorage
// var elements = document.querySelectorAll('input');

// function checkValidity() {};

// for (i = 0; i < elements.length; i++) {
//     (function(element) {
//         var id = element.getAttribute('id');
//         element.value = sessionStorage.getItem(id); // обязательно наличие у элементов id
//         element.oninput = function() {
//             sessionStorage.setItem(id, element.value);
//             checkValidity();
//         };
//     })(elements[i]);
// }

$(document).ready(function() {
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


    var count = document.querySelector(".btn");

    var value_day_prev = getValue("value-day-prev");
    var value_night_prev = getValue("value-night-prev");

    var value_day_current = getValue("value-day-current");
    var value_night_current = getValue("value-night-current");

    $("#value-day-current").on('input', function() {
        var value_day_current = getValue("value-day-current");
        $("#value-month-day").val(sub(value_day_current, value_day_prev));
    });

    $("#value-night-current").on('input', function() {
        var value_night_current = getValue("value-night-current");
        $("#value-month-night").val(sub(value_night_current, value_night_prev));

        count.addEventListener('click', function() {
            var day_price = getValue("day-price");
            var night_price = getValue("night-price");

            var value_month_day = getValue("value-month-day");
            var value_month_night = getValue("value-month-night");

            $("#result").text(getResult(day_price, value_month_day, night_price, value_month_night));
        });


    });



});










// console.log(count);
// console.log(sum(3.5, 10));
// console.log(add(3.5, 10));
// console.log(getValue("day-price"));
// console.log(getValue("night-price"));
// console.log(getResult(2, 2, 3, 3));