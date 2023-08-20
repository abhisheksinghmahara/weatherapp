const timeEl=document.getElementById("time");
const dateEl=document.getElementById('date');
const currentWeather=document.getElementById("current-weather-items");
const timeZone=document.getElementById('time-zone');
const countryEl=document.getElementById('country');
const currentTemp=document.getElementById('current-temp');
const weatherForecastEl=document.getElementById('weather-forecast');
const days=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

setInterval(()=>{
const time=new Date();
const year=time.getFullYear();
const month=time.getMonth();
const date=time.getDate();
var day=time.getDay();
const hour=time.getHours();
const hoursIn12HrFormat=(hour>=13)?(hour-12):hour;
const hrs=(hoursIn12HrFormat<10)?"0"+hoursIn12HrFormat:hoursIn12HrFormat;
const minutes=time.getMinutes();
const mins=(minutes<10)?"0"+minutes:minutes;
// console.log(minutes)
const ampm=(hour<12)?"AM":"PM";
timeEl.innerHTML=`${hrs} : ${mins} <span id="am-pm">${ampm}</span>`
dateEl.innerHTML=`${ days[day] }, ${date} ${months[month]} ${year}`;



},1000)


let getData=()=>{
    navigator.geolocation.getCurrentPosition((success)=>{
        let {longitude,latitude} =success.coords;
        // console.log(longitude,latitude);
        // https://api.openweathermap.org/data/2.5/weather?lat=28.6359552&lon&lon=28.6359552&lon&appid=98834078d1e7ab821963c0f6039d9925
        // https://api.openweathermap.org/data/2.5/onecall?lat=28.6359552&lon=28.6359552&lon&exclude=hourly,minutely&appid=98834078d1e7ab821963c0f6039d9925
        // https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${API_key}
        let key='98834078d1e7ab821963c0f6039d9925';
        
        fetch( `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`).then(res=>res.json()).then(data=>{
            console.log(data);
            showData(data);
        });
        // https://api.openweathermap.org/data/2.5/forecast/daily?lat=28.6359552&lon=28.6359552&cnt=7&appid=98834078d1e7ab821963c0f6039d9925
        // fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=7&appid=${key}&units=metric`).then(res=>res.json()).then(otherDaydatadata=>{
        //     console.log("other day data",otherDaydatadata)
        // })
    })
}
getData();
let otherDaydata=()=>{
    navigator.geolocation.getCurrentPosition()
   
}

function showData(data){
    const time=new Date();
var day=time.getDay();
timeZone.innerHTML=data.name;
countryEl.innerHTML=data.sys.country;
currentWeather.innerHTML=` <div class="weather-item">
<div>Temperature</div>
<div>${data.main.temp} &#176;</div>
</div>
<div class="weather-item">
<div>Feels like</div>
<div>${data.main.feels_like}&#176;</div>
</div>
<div class="weather-item">
<div>Humidity</div>
<div>${data.main.humidity} %</div>
</div>
<div class="weather-item">
<div>Pressure</div>
<div>${data.main.pressure} hPa</div>
</div>
<div class="weather-item">
<div>Wind speed</div>
<div>${data.wind.speed} km/h</div>
</div>
`
weatherForecastEl.innerHTML=`
<div class="weather-forecast-item">
<div class="day1">Today</div>
<img src=" https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon">
<div class="day">${days[day]}</div>
<div class="others" >
    <div class="temp">Night - ${data.main.temp_min} &#176;C</div>
    <div class="temp">Day- ${data.main.temp_max}&#176;C</div>
</div>
</div>
 <div class="weather-forecast-item">
<div class="day">${days[day+1]}</div>
<img src=" https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon">
<div class="temp">Night - ${data.main.temp_min} &#176;C</div>
    <div class="temp">Day- ${data.main.temp_max}&#176;C</div>
</div>
<div class="weather-forecast-item">
<div class="day">${days[day+2]}</div>
<img src=" https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon">
<div class="temp">Night - ${data.main.temp_min} &#176;C</div>
    <div class="temp">Day- ${data.main.temp_max}&#176;C</div>
</div>
<div class="weather-forecast-item">
<div class="day">${days[day+3]}</div>
<img src=" https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon">
<div class="temp">Night - ${data.main.temp_min} &#176;C</div>
    <div class="temp">Day- ${data.main.temp_max}&#176;C</div>
</div>
<div class="weather-forecast-item">
<div class="day">${days[day+4]}</div>
<img src=" https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon">
<div class="temp">Night - ${data.main.temp_min} &#176;C</div>
    <div class="temp">Day- ${data.main.temp_max}&#176;C</div>
</div>
<div class="weather-forecast-item">
<div class="day">${days[day+5]}</div>
<img src=" https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon">
<div class="temp">Night - ${data.main.temp_min} &#176;C</div>
    <div class="temp">Day- ${data.main.temp_max}&#176;C</div>
</div>
<div class="weather-forecast-item">
<div class="day">${days[day+6]}</div>
<img src=" https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon">
<div class="temp">Night - ${data.main.temp_min} &#176;C</div>
    <div class="temp">Day- ${data.main.temp_max}&#176;C</div>
</div>`
// currentTemp.innerHTML=`
// `;
}
