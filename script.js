let searchValue = document.querySelector('#searchBox');
searchValue.addEventListener('keypress', setFunc);

function setFunc(e) {
    if (e.keyCode == 13) {
        getData(searchValue.value);
    }
}


function getData(value) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+value+'&appid=c7d0116d59f52703a9b4afabfa3d4258')
        .then(function (reponse) {
            return reponse.json();
        })
        .then(function (weather) {
            document.querySelector("#ville").innerHTML = weather.name;
            document.querySelector("#temp").innerHTML = weather.main.temp;
            document.querySelector("#min_max_temp").innerHTML = "Min. " + weather.main.temp_min + " / Max. " + weather.main.temp_max;
            document.querySelector("#weather").innerHTML = weather.weather[0].main;
            document.querySelector("#weather_desc").innerHTML = weather.weather[0].description;
            document.querySelector("#wind_dir_speed").innerHTML = "Direction de l'air: "+weather.wind.deg+" / Wind speed: "+weather.wind.speed;
        })
    .catch(function (err) {
        console.log(err);
    })
}