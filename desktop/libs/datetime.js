/*
    Date & Time Library for AzuOS
    Written by: MTSyntho @ AzuSystem 2024
*/

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
    // document.getElementById('time').innerText = hhmmtime;
    // document.getElementById('fulltime').innerText = hhmmsstime;
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
    
    // document.getElementById('date').innerText = formattedDate;
}

function fetchDateTime() {
    // Get the current date
    var currentDate = new Date();

    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Get month, date, and year
    var month = monthNames[currentDate.getMonth()];
    var date = currentDate.getDate();
    var year = currentDate.getFullYear();

    // Format the date
    var formattedDate = month + " " + date + ", " + year;
    
    // Extract individual components of the date and time
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    
    // Format the time nicely
    var time = hours + ":" + (minutes < 10 ? '0' : '') + minutes;

    return {
        date: formattedDate,
        time: time
    };
};

// Update the time & date every second
// setInterval(updateTime, 1000);
// setInterval(updateDate, 1000);

// let dateTaskMenu = document.querySelector(".taskbar-date");
// var dtmDiv = document.getElementById('taskbardate');

// function openTaskDate() {
//     console.log('Quick Date Menu Opened')
//     dateTaskMenu.classList.remove("close");
//     dateTaskMenu.classList.add("open");
// }

// function closeTaskDate() {
//     console.log('Quick Date Menu Closed')
//     dateTaskMenu.classList.remove("open");
//     dateTaskMenu.classList.add("close");
// }