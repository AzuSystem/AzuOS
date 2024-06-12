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
    
    // Display the time in an element with id "clock"
    document.getElementById('time').innerText = hhmmtime;
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