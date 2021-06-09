// array holding days of the week
var weekDaysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.addEventListener('DOMContentLoaded', function(){
    // get a reference to the template script tag
    var template = document.querySelector(".matchingDaysTemplate").innerHTML;

    // compile the template
    var weekDayTemplate = Handlebars.compile(template);

    // get a reference to tableBody where users is to be displayed
    var weekDayDisplay = document.querySelector(".weekDayData");

    //get reference to the first date input
    var eersteDatum = document.querySelector("#firstDate");

    //get reference to the second date input
    var tweedeDatum = document.querySelector("#secondDate");

    //displays the days of the week on screen using the compiled template
    weekDayDisplay.innerHTML = weekDayTemplate({ weekDays: weekDaysArr });

    var days = weekDayDisplay.children;

    //change event listener for the first date change
    eersteDatum.addEventListener("change", function (event) {
        var dateSelected1 = new Date(event.target.value);
        var daySelected1 = dateSelected1.getDay();

        for (var i = 0; i < days.length; i++) {
            let day = days[i];
            day.classList.remove("diffColour1");
            day.classList.remove("matchingColour");
    
            let yayDay = days[daySelected1];
            if (yayDay.classList.contains("diffColour2")) {
                yayDay.classList.add("diffColour1");
                yayDay.classList.add("matchingColour");
            } else {
                yayDay.classList.add("diffColour1");
            }
        }
    });
    
    //change event listener for the second date change
    tweedeDatum.addEventListener("change", function (event) {
        var dateSelected2 = new Date(event.target.value);
        var daySelected2 = dateSelected2.getDay();

        for (var i = 0; i < days.length; i++) {
            let day2 = days[i];
            day2.classList.remove("diffColour2");
            day2.classList.remove("matchingColour");
    
            let yayDay2 = days[daySelected2];
            if (yayDay2.classList.contains("diffColour1")) {
                yayDay2.classList.add("diffColour2");
                yayDay2.classList.add("matchingColour");
            } else {
                yayDay2.classList.add("diffColour2");
            }
        }
    });
});


