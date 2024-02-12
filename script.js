const citySelect = document.getElementById('citylist');
const weatherDetails = document.getElementById('WeatherDetails');

citySelect.addEventListener('change', function() {
    
    const selectedValue = this.value;

    fetch(`https://goweather.herokuapp.com/weather/${selectedValue}`)
    .then((response)=>{return response.json();})
        .then((json)=>{
            // console.log(json);
            const temperature = json.temperature;
            const temperatureLabel = document.createElement('p1');
            temperatureLabel.textContent = `Temperature : ${temperature}`;

            const wind = json.wind;
            const windLabel = document.createElement('p2');
            windLabel.textContent = `Wind Speed : ${wind}`;

            const description = json.description;
            const descriptionLabel = document.createElement('p3');
            descriptionLabel.textContent = `Atmosphere : ${description}`;


            weatherDetails.appendChild(temperatureLabel);
            weatherDetails.appendChild(document.createElement('br'));
            weatherDetails.appendChild(windLabel);
            weatherDetails.appendChild(document.createElement('br'));
            weatherDetails.appendChild(descriptionLabel);
        }); 
});


document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('citylist').value = 'SelectCity';
    weatherDetails.innerHTML = '';
});

