function fetchTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
    });

    const date = now.toLocaleDateString('en-GB', {
        timeZone: 'Europe/London'
    });

    document.getElementById("time").textContent = time;
    document.getElementById("date").textContent = date;
};

document.addEventListener("DOMContentLoaded", function () {
    fetchTime();
    setInterval(fetchTime, 1000);
});

