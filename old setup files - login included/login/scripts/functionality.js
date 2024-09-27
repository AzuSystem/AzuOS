document.addEventListener('DOMContentLoaded', function() {
    let loginDisplay = 0;
    let datetime = document.querySelector(".datetime");
    let bg = document.querySelector(".screen")
    var win = document.getElementById("window");
    var logWin = document.getElementById("login");

    document.addEventListener('click', function(event) {
        if (loginDisplay === 0) {
            let loginDisplay = 1;
            console.log(loginDisplay)
            console.log('Login Open');
            datetime.classList.add("loginDate");
            datetime.classList.remove("noLoginDate");
            bg.classList.add("blur");
            bg.classList.remove("noBlur");
            win.classList.add("fadeIn");
            win.classList.remove("fadeOut");
            logWin.classList.add("fadeIn");
            logWin.classList.remove("fadeOut");
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === " " || event.key === "Enter") {
            if (loginDisplay === 0) {
                let loginDisplay = 1;
                console.log(loginDisplay)
                console.log('Login Open');
                datetime.classList.add("loginDate");
                datetime.classList.remove("noLoginDate");
                bg.classList.add("blur");
                bg.classList.remove("noBlur");
                win.classList.add("fadeIn");
                win.classList.remove("fadeOut");
                logWin.classList.add("fadeIn");
                logWin.classList.remove("fadeOut");
            }
        }
    });
});

document.addEventListener('keydown', function(event) {
    let datetime = document.querySelector(".datetime");
    let bg = document.querySelector(".screen")
    var win = document.getElementById("window");
    var logWin = document.getElementById("login");
    if (event.key === "Escape") {
        datetime.classList.remove("loginDate");
        datetime.classList.add("noLoginDate");
        bg.classList.remove("blur");
        bg.classList.add("noBlur");
        win.classList.add("fadeOut");
        win.classList.remove("fadeIn");
        logWin.classList.add("fadeOut");
        logWin.classList.remove("fadeIn");
    }
});