# js-timer


const durationInput = document.getElementById("duration");
    const startInput = document.getElementById("start");
    const endInput = document.getElementById("end");

    // Event listener for the start button
    document.querySelector("#startTimer").addEventListener("click", () => {
        const durationValue = parseInt(durationInput.value);
        const startValue = parseInt(startInput.value);
        const endValue = parseInt(endInput.value);

        // Validate input values
        if (isNaN(durationValue) || isNaN(startValue) || isNaN(endValue)) {
            console.error("Invalid input values. Please enter valid numbers.");
            return;
        }

        let now = new Date().getTime();
        let countdownTime = now + (durationValue * 60 * 1000);

        var myfunc = setInterval(() => {
            var now = startValue;
            // new Date().getTime()
            var timeleft = countdownTime - now;

            // Calculating the days, hours, minutes and seconds left
            var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

            // Result is output to the specific element
            document.getElementById("days").innerHTML = days + "d ";
            document.getElementById("hours").innerHTML = hours + "h ";
            document.getElementById("mins").innerHTML = minutes + "m ";
            document.getElementById("secs").innerHTML = seconds + "s ";

            // Display the message when countdown is over
            if (timeleft < 0) {
                clearInterval(myfunc);
                document.getElementById("days").innerHTML = "";
                document.getElementById("hours").innerHTML = "";
                document.getElementById("mins").innerHTML = "";
                document.getElementById("secs").innerHTML = "";
                document.getElementById("end").innerHTML = "TIME UP!!";
            }
        }, 1000);

        console.log(startValue);