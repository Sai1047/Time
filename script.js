const countries = [
    { name: "Bangladesh", tz: "Asia/Dhaka" },
    { name: "India", tz: "Asia/Kolkata" },
    { name: "USA (New York)", tz: "America/New_York" },
    { name: "UK", tz: "Europe/London" },
    { name: "Japan", tz: "Asia/Tokyo" },
    { name: "Australia", tz: "Australia/Sydney" },
    { name: "Germany", tz: "Europe/Berlin" },
    { name: "Canada (Toronto)", tz: "America/Toronto" },
    { name: "Brazil", tz: "America/Sao_Paulo" },
    { name: "Russia", tz: "Europe/Moscow" },
    { name: "China", tz: "Asia/Shanghai" },
    { name: "France", tz: "Europe/Paris" },
    { name: "South Africa", tz: "Africa/Johannesburg" },
    { name: "Italy", tz: "Europe/Rome" },
    { name: "Mexico", tz: "America/Mexico_City" },
    { name: "Singapore", tz: "Asia/Singapore" },
    { name: "UAE", tz: "Asia/Dubai" },
    { name: "Turkey", tz: "Europe/Istanbul" },
    { name: "Pakistan", tz: "Asia/Karachi" },
    { name: "Indonesia", tz: "Asia/Jakarta" },
    { name: "South Korea", tz: "Asia/Seoul" },
    { name: "New Zealand", tz: "Pacific/Auckland" },
    { name: "Argentina", tz: "America/Argentina/Buenos_Aires" },
    { name: "Spain", tz: "Europe/Madrid" },
    { name: "Egypt", tz: "Africa/Cairo" }
];

const bigClock = document.getElementById('big-clock');
const timeContainer = document.getElementById('time-container');

function fmtTime(tz) {
  return new Date().toLocaleTimeString('en-US', {
    timeZone: tz,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
}

function updateTime() {
  // Bangladesh (big)
  const bd = countries[0];
  bigClock.innerHTML = `<h2>${bd.name}</h2><p id="bd-time">${fmtTime(bd.tz)}</p>`;

  // Others
  timeContainer.innerHTML = '';
  countries.slice(1).forEach(c => {
    const box = document.createElement('div');
    box.className = 'time-box';
    box.innerHTML = `<h3>${c.name}</h3><p>${fmtTime(c.tz)}</p>`;
    timeContainer.appendChild(box);
  });
}

// start
updateTime();
setInterval(updateTime, 1000);
