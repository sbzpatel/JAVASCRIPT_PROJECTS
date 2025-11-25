let countdown;

document.getElementById("startBtn").addEventListener("click", () => {
    const targetDate = document.getElementById("dateInput").value;

    // console.log(targetDate);

    if(!targetDate) {
        alert("Please select a date & time!!!");
        return;
    }

    const endTime = new Date(targetDate).getTime();
    // console.log(endTime);

    clearInterval(countdown);

    countdown = setInterval(() => {
        const now = new Date().getTime();
        const diff = endTime - now;

        if(diff <= 0) {
            clearInterval(countdown);
            document.getElementById("days").innerText = "00";
            document.getElementById("hours").innerText = "00";
            document.getElementById("minutes").innerText = "00";
            document.getElementById("seconds").innerText = "00";

            alert("⏰ CountDown Completed!!!");
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days.toString().padStart(2, "0");
        document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
    }, 1000);
})