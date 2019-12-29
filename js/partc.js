let daysContainer = document.getElementById("daysList");
let monthContainer = document.getElementById("month");
let yearContainer = document.getElementById("year");

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function clearCalendar() {
    daysContainer.innerHTML = "";
    monthContainer.innerHTML = "";
    yearContainer.innerHTML = "";
}

function populateCalendar(currentDate) {
    let lastDayOfCurrentMonth = new Date(currentYear, currentMonth + 1, 0);
    let numberOfDaysInCurrentMonth = lastDayOfCurrentMonth.getDate();

    let firstDayOfCurrentMonth = new Date(currentYear, currentMonth, 1);
    let dayOfWeekForFirst = firstDayOfCurrentMonth.getDay();

    for (let i = 0; i < dayOfWeekForFirst; i++) {
        var listElement = document.createElement("li");
        daysContainer.appendChild(listElement)
    }

    for (let date = 1; date <= numberOfDaysInCurrentMonth; date++) {
        var listElement = document.createElement("li");
        var content = document.createTextNode(date);
        listElement.appendChild(content);

        if (date == currentDate.getDate()) {
            var spanElement = document.createElement('span');
            spanElement.classList.add("active")
            spanElement.appendChild(content)
            listElement.appendChild(spanElement);
        }
        else {
            listElement.appendChild(content)
        }

        daysContainer.appendChild(listElement)
    }

    yearContainer.appendChild(document.createTextNode(currentYear));

    const monthNames = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    monthContainer.appendChild(document.createTextNode(monthNames[currentMonth]))
}

function previous() {
    clearCalendar();

    if (currentMonth > 0) {
        currentMonth -= 1;
    } else {
        currentMonth = 11;
        currentYear -= 1;
    }

    currentDate = new Date(currentYear, currentMonth);
    populateCalendar(currentDate);
}

function next() {
    clearCalendar();

    if (currentMonth < 11) {
        currentMonth += 1;
    } else {
        currentMonth = 0;
        currentYear += 1;
    }

    currentDate = new Date(currentYear, currentMonth);
    populateCalendar(currentDate);
}

populateCalendar(currentDate);