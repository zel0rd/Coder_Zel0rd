const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1")

function getTime() {
    const christmas = new Date("2020/12/25")
    const date = new Date();
    
    let diff = Math.floor((christmas - date)/1000)
    let days = Math.floor(diff / 86400)
    let hours = Math.floor(diff % 86400 / 3600)
    let minutes = Math.floor(diff % 86400 % 3600 / 60)
    let seconds = Math.floor(diff % 86400 % 3600 % 60)

    clockTitle.innerText = `${
        days < 10 ? `0${days}` : days}d ${
            hours < 10 ? `0${hours}` : hours}h ${
                minutes < 10 ? `0${minutes}` : minutes}m ${
                    seconds < 10 ? `0${seconds}` : seconds}s `;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();