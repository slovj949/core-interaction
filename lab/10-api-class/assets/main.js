
// Insert your actual API request URL below
fetch('http://api.openweathermap.org/data/2.5/weather?zip=33157&APPID=fec743e2b0e7bca489a1635c1572796d&units=imperial')
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        render(jsonData);
    });

var tempSpan = document.querySelector('.temp');
var windSpeedSpan = document.querySelector('.wind-speed');
var windDirSpan = document.querySelector('.wind-dir');
var weatherVaneWrapper = document.querySelector('.weather-vane-wrapper');
var weatherVane = document.querySelector('.weather-vane');

function render(data) {
    console.log('render');
    console.log(data);
    console.log(data.main.temp);
    tempSpan.innerText = data.main.temp;
    windSpeedSpan.innerText = data.wind.speed;
    windDirSpan.innerText = data.wind.deg;

    //set bkgrnd color based on temp
    //hsl=hue,sat,lightness (any number between 0-360, 2 percentages)
    document.body.style.backgroundColor = 'hsl(' + data.wind.deg + ', 50%, 50%)';

    //rotate the weather vane based on wind dir
    weatherVaneWrapper.style.transform = 'rotate(' + data.wind.deg + 'deg)';

    //set animation duration of vane based on wind windSpeedSpan
    weatherVane.style.animationDuration = 5 / data.wind.speed + 's'

}
