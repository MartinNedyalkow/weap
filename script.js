



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
const fivedayfunk=()=>{
    city=$('#search').val()
$.getJSON("https://api.weatherbit.io/v2.0/forecast/daily?city="+city+"&days=5&key=8630e3dba62a4c27a06acdf0652d034b",
function(data){
    console.log(data)
})}
$("#SearchButton").on("click",funk)
$("#SearchButton").on("click",fivedayfunk)