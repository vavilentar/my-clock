const timeDiv = document.querySelector('.clock');
const weatherDiv = document.querySelector('.weather');
const bodyDiv = document.querySelector('.body_container');

timeUpd();
weatherUpd();
let updTime = setInterval(() => timeUpd(), 1000);


function timeUpd() {
	let time = new Date();
	let dayOfWeek = time.getDay();
	let date = time;

	switch (dayOfWeek) {
		case 1:
			dayOfWeek = 'Понедельник';
			break;
		case 2:
			dayOfWeek = 'Вторник';
			break;
		case 3:
			dayOfWeek = 'Среда';
			break;
		case 4:
			dayOfWeek = 'Четверг';
			break;
		case 5:
			dayOfWeek = 'Пятница';
			break;
		case 6:
			dayOfWeek = 'Суббота';
			break;
		case 7:
			dayOfWeek = 'Воскресенье';
			break;
		default:
			dayOfWeek = 'Ошибка даты';
			break;
	}

	let hour = time.getHours();
	if (hour < 10) {
		hour = '0' + hour;
	}
	let minute = time.getMinutes();
	if (minute < 10) {
		minute = '0' + minute;
	}
	let second = time.getSeconds();
	if (second < 10) {
		second = '0' + second;
	}
		timeDiv.innerHTML = `
		<h2>${date.toLocaleDateString()}</h2><h1 class="date-time">${dayOfWeek}, ${hour}:${minute}:${second}</h1>`;
}

function weatherUpd() {

	let temp;
	let location;
	let condition;
	let condIcon;
	fetch('https://api.weatherapi.com/v1/current.json?key=f1c58ace0a7b44a1b8b92424222206&q=Москва&aqi=no&lang=ru')
		.then((response) => response.json())
		.then(function (data) {
			location = data.location.name;
			temp = data.current.temp_c;
			condition = data.current.condition.text;
			condIcon = data.current.condition.icon;
			weatherDiv.innerHTML = `
			<h2 style="transform: translateX(10%);">${location}, +${temp}°<br>${condition}</h2><img style="transform: translateX(10%);" class="cond-icon" src="${condIcon}" alt=""></img>
		`;
		});
}