let a="London"



const funk =function(city){
    city=$('#search').val()
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ city+"&units=metric&appid=1e6d7c72e6293ab2397112f9121e9aec",
function(data){
console.log(data);
let icon = 'https://openweathermap.org/img/w/'+ data.weather[0].icon + '.png';
$('.icon').attr('src',icon);
let temp = Math.floor(data.main.temp);
$('.temp').empty().append(temp);
let whetherName = data.weather[0].description;
let cityN=data.name;
$('.style').empty().append(whetherName);
$('.cityName').empty().append(cityN);

})
$(".text").html(`The weather in ${city} is`)
}



$("#SearchButton").on("click",funk)