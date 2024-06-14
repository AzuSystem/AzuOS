function updateTime() {
    // Get the current time
    var currentDate = new Date();
    
    // Extract individual components of the date and time
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    
    // Format the time nicely
    var hhmmtime = hours + ":" + (minutes < 10 ? '0' : '') + minutes;
    var hhmmsstime = hours + ":" + (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    
    // Display the time in an element with id "time"
    document.getElementById('time').innerText = hhmmtime;
    document.getElementById('fulltime').innerText = hhmmsstime;
}

// Array of month names
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function updateDate() {
    // Get the current date
    var currentDate = new Date();

    // Get month, date, and year
    var month = monthNames[currentDate.getMonth()];
    var date = currentDate.getDate();
    var year = currentDate.getFullYear();

    // Format the date
    var formattedDate = month + " " + date + ", " + year;
    
    document.getElementById('date').innerText = formattedDate;
}

// Update the time & date every second
setInterval(updateTime, 1000);
setInterval(updateDate, 1000);

let dateTaskMenu = document.querySelector(".taskbar-date");
var dtmDiv = document.getElementById('taskbardate');

function openTaskDate() {
    console.log('Quick Date Menu Opened')
    dateTaskMenu.classList.remove("close");
    dateTaskMenu.classList.add("open");
}

function closeTaskDate() {
    console.log('Quick Date Menu Closed')
    dateTaskMenu.classList.remove("open");
    dateTaskMenu.classList.add("close");
}

document.addEventListener('click', function(event) {
    var dtmComputedStyle = window.getComputedStyle(dtmDiv);
    var dtmOpacity = dtmComputedStyle.getPropertyValue('opacity');
    if (dtmOpacity === '1') {
        closeTaskDate();
    } else {
        console.log("dtmOpacity (Click): " + dtmOpacity);
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        var dtmComputedStyle = window.getComputedStyle(dtmDiv);
        var dtmOpacity = dtmComputedStyle.getPropertyValue('opacity');
        if (dtmOpacity === '1') {
            closeTaskDate();
        } else {
            console.log("dtmOpacity (Key): " + dtmOpacity);
        }
    }
});