AOS.init();

const eventDate = new Date("Dec 12, 2023 19:00:00");
const EventTimeStamp = eventDate.getTime();

const countHours = setInterval(function() {
    const currDate = new Date();
    const currTimeStamp = currDate.getTime()

    const timeDistance = EventTimeStamp - currTimeStamp;

    const msDay = 1000 * 60 * 60 * 24;
    const msHour = 1000 * 60 * 60;
    const msMinute = 1000 * 60;
    const msSecond = 1000;


    const days = Math.floor(timeDistance / msDay);
    const hours = Math.floor((timeDistance % (msDay)) / msHour);
    const minutes = Math.floor((timeDistance % msHour) / msMinute);
    const seconds = Math.floor((timeDistance % msMinute) / msSecond);

    document.getElementById('counter').innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;

    if (timeDistance < 0 ){
        clearInterval(countHours);
        document.getElementById('counter').innerHTML = 'Evento expirado'
    }
}, 1000)