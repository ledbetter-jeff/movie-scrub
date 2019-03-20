
//test

var subTitleObject = new XMLHttpRequest();

subTitleObject.open('GET', //scripts/black_panther.json , true);

subTitleObject.send();

subTitleObject.onload = function () {

    var franklinWeatherInfo = JSON.parse(subTitleObject.responseText);
    console.log(franklinWeatherInfo);


    document.getElementById('fPlace').innerHTML = franklinWeatherInfo.current_observation.display_location.full;
    document.getElementById('fTemp').innerHTML = franklinWeatherInfo.current_observation.temp_f;
    document.getElementById('fw_icon').src = franklinWeatherInfo.current_observation.icon_url;
    document.getElementById('fCurrentDate').innerHTML = franklinWeatherInfo.current_observation.local_time_rfc822;

}; // End of onload

