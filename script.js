
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
$.getJSON("http://api.openweathermap.org/data/2.5/forecast?q="+ city + ",bg&appid=1e6d7c72e6293ab2397112f9121e9aec&units=metric",
function(fiveday){
console.log(fiveday);
let icon1 = 'https://openweathermap.org/img/w/'+ fiveday.list[7].weather[0].icon + '.png';
$('.icon1').attr('src',icon1);
let temp1 = Math.floor(fiveday.list[7].main.temp);
$('.temp1').append(temp1);
let whetherName1 = fiveday.list[7].weather[0].main;
let cityN1=fiveday.city.name;
$('.style1').append(whetherName1);
$('.cityName1').append(cityN1);

})

