function matchingDaysFactory() {
    var date1;
    var date2;
    var weekDaysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function setDate1(date) {
        date1 = new Date(date);
        return date1;
    }

    function getDate1() {
        if(date1){
        return weekDaysArr[date1.getDay()];
        }
    }

    function setDate2(date) {
        date2 = new Date(date);
        return date2;
    }

    function getDate2() {
        if(date2){
        return weekDaysArr[date2.getDay()];
        }
    }

    function matchDates() {
        if (date1.getDay() === date2.getDay()) {
            return true;
        } else {
            return false;
        }
    }

    function weekDaysArray() {
        return weekDaysArr;
    }

    return {
        setDate1,
        setDate2,
        getDate1,
        getDate2,
        matchDates,
        weekDaysArray,
    }
}