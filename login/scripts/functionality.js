document.addEventListener('DOMContentLoaded', function() {
    let loginDisplay = 0;
    let datetime = document.querySelector(".datetime");
    let bg = document.querySelector(".screen")

    document.addEventListener('click', function(event) {
        if (loginDisplay === 0) {
            console.log('Login Open');
            datetime.classList.add("loginDate");
            bg.classList.add("blur");
        }
    });
});
