
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function () {

    var d = new Date();
    var mth = d.getMonth() + 1;
    var yr = d.getFullYear();

    $("#month").val(mth);
    $("#year").val(yr);
    showCalendar(mth, yr);

    $("#month,#year").change(function (e) {
        showCalendar($("#month").val(), $("#year").val());
    });
    $("#yes").click(function () {
        $('div.day').css("background-color", "green");
        });
    $("#no").click(function () {
        $('div.day').css("background-color", "red");
    });

});

function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth() + 1, 0).getDate();
}

function showCalendar(mth, yr) {


    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date(firstDayOfMonth);
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();

    /* this is where you'll generate the grid, for now I will just show first day of week */
    var str = '<div class="row">';

    var total = firstDayOfWeek + numberOfDaysInMonth;

    var totaldays = 1;
    for (var x = 1; x <= total; x++)
    {
        if (x > firstDayOfWeek)
        {
            str += '<div class="day">' + totaldays + '</div>';
            totaldays++;
        } else
        {
            str += '<div class="day"></div>';
        }
        if (x % 7 === 0)
        {
            str += '</div><div class="row">';
        }
    }
    str += "</div>";
    $("#results").html(str);


    $("div.day").click(checkDiv);

    function checkDiv() {

        var color = $(this).css("background-color");
        console.log(color);
        $(this).css("background-color", 'red');

        if (color === 'rgb(255, 0, 0)')
        {
            $(this).css("background-color", 'green');
        }
        if (color === 'rgb(0, 128, 0)')
        {
            $(this).css("background-color", 'white');
        }
//            if (color ==='rgb(128, 0, 0)' || color === 'rgb(255, 0, 0)')
//            {
//                $( this ).css( "background-color", 'rgb(255, 255, 255)' );
//            }
    }
}






