const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function updateTime() {
    const currentDate = new Date();
    document.getElementById("time").innerText = currentDate.toLocaleTimeString('it-IT');
    document.getElementById("date").innerText = weekdays[currentDate.getDay()] + ", " + months[currentDate.getMonth()] + " " + currentDate.getUTCDate();
}

updateTime();

setInterval(updateTime, 1000);