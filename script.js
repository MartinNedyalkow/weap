let city='Sofia'

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=1e6d7c72e6293ab2397112f9121e9aec",
function(data){
console.log(data);
$('.city').append(data.name)


})