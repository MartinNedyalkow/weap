const dayOfTheWeek=(data)=>{
    switch(new Date(data).getDay()){
        case 0:
    day = "Sunday";
    return day;
    break;
  case 1:
    day = "Monday";
    return day;
    break;
  case 2:
     day = "Tuesday";
     return day;
    break;
  case 3:
    day = "Wednesday";
    return day;
    break;
  case 4:
    day = "Thursday";
    return day;
    break;
  case 5:
    day = "Friday";
    return day;
    break;
  case 6:
    day = "Saturday";
    return day;
    }
    }



const funk =function(city){
city=$('#search').val()
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ city+"&units=metric&appid=1e6d7c72e6293ab2397112f9121e9aec",
function(data){
let icon = 'https://openweathermap.org/img/w/'+ data.weather[0].icon + '.png';
$('.icon').attr('src',icon);
$('.temp').empty().append(Math.floor(data.main.temp));
$('.style').empty().append(data.weather[0].description);
$('.cityName').empty().append(data.name);
})
$(".text").html(`The weather in ${city} is`)
}

//Search Function 
$("#SearchButton").on("click",funk)

const fillfunk=()=>{
for (let i = 0; i < 5; i++) {
    city=$('#search').val()
    $.getJSON("https://api.weatherbit.io/v2.0/forecast/daily?city="+city+"&days=5&key=8630e3dba62a4c27a06acdf0652d034b",
function(data){
    $(`#Date-day-${i}`).empty().append(dayOfTheWeek(data.data[i].datetime));
    let icon1 = 'https://www.weatherbit.io/static/img/icons/'+ data.data[i].weather.icon + '.png';
    $(`#Icon-day-${i}`).attr('src',icon1);
    $(`#Temp-day-${i}`).empty().append(data.data[i].temp);

})}}
$("#SearchButton").on("click",fillfunk)


