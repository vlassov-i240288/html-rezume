let text = document.getElementsByClassName("footer__text");

function updateTime() {
    let date = new Date();

    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    text[0].innerHTML = "<span>\u00A9   </span>" + date.toLocaleString("ru", options);

} setInterval(updateTime, 1000);

