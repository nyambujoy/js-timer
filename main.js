document.addEventListener("DOMContentLoaded", () => {
    let now = new Date().getTime()
    let christmas = new Date("Dec 25, 2024 23:59:59").getTime()

    let timeLeft = christmas - now
    console.log(timeLeft)


    // console.log(days.textContent = "hello")
    const myFunc = setInterval(function () {
        let now = new Date().getTime()
        let christmas = new Date("Dec 25, 2024 23:59:59").getTime()

        let timeLeft = christmas - now
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
        let hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        document.querySelector("#days").innerHTML = days + "d ";
        document.querySelector("#hours").innerHTML = hours + "h"
        document.querySelector("#mins").innerHTML = minutes + "m"
        document.querySelector("#secs").innerHTML = seconds + "s"


        if (timeLeft < 0) {
            document.querySelector("#days").innerHTML = '';
            document.querySelector("#hours").innerHTML = ''
            document.querySelector("#mins").innerHTML = ''
            document.querySelector("#secs").innerHTML = '';
            document.querySelector("startTimer").innerHTML = "MERRY CHRISTMAS!"
        }

    }, 1000)


});
