
let city='Sofia';
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=1e6d7c72e6293ab2397112f9121e9aec",
function(data){
console.log(data);
let icon = 'https://openweathermap.org/img/w/'+ data.weather[0].icon + '.png';
$('.icon').attr('src',icon);
let temp = Math.floor(data.main.temp);
$('.temp').append(temp);
let whetherName = data.weather[0].main;
let cityN=data.name;
$('.style').append(whetherName);
$('.cityName').append(cityN);

})