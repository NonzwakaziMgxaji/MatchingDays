document.addEventListener('DOMContentLoaded', function () {
    // get a reference to the template script tag
    var template = document.querySelector(".matchingDaysTemplate").innerHTML;

    // compile the template
    var weekDayTemplate = Handlebars.compile(template);

    // get a reference to tableBody where users is to be displayed
    var weekDayDisplay = document.querySelector(".weekDayData");

    var datesElem = document.querySelector(".dates");

    //get reference to the first date input
    var eersteDatum = document.querySelector("#firstDate");

    //get reference to the second date input
    var tweedeDatum = document.querySelector("#secondDate");

    //instantiation
    var matchDaysInstance = matchingDaysFactory();

    //displays the days of the week on screen using the compiled template
    weekDayDisplay.innerHTML = weekDayTemplate({ weekDays: matchDaysInstance.weekDaysArray() });
    var days = weekDayDisplay.children;

    //change event listener for the first date change
    datesElem.addEventListener("change", function () {
        var dateSelected1 = new Date(eersteDatum.value);
        var daySelected1 = dateSelected1.getDay();
        var dateSelected2 = new Date(tweedeDatum.value);
        var daySelected2 = dateSelected2.getDay();

        for (var i = 0; i < days.length; i++) {
            var day = days[i];
            day.classList.remove("diffColour1");
            day.classList.remove("diffColour2");
            day.classList.remove("matchingColour");
        }

        if (daySelected1 === daySelected2) {
            days[daySelected2].classList.add("matchingColour");
        } else if (daySelected1 != daySelected2) {
            if (daySelected1) {
                days[daySelected1].classList.add("diffColour1");
            }
            if (daySelected2) {
                days[daySelected2].classList.add("diffColour2");
            }
        }
    });
})
