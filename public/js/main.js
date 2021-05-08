const submitBtn = document.getElementById('submitBtn');
const tempStatus = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const dataHide = document.querySelector('.middle_layer');
const cityName = document.getElementById('cityName');
const icon = document.getElementById('icon');
const getInfo = async(e) => {

    e.preventDefault();
    const city = cityName.value;

    if (city == '') {
        cityName.innerText = "Please enter the correct city"
        dataHide.classList.add('data_hide')
    } else {

        try {

            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2ae71261c84b98954542a5c54ecad92a`
            const response = await fetch(url);
            //  console.log(response)
            const data = await response.json();
            const arrData = [data];
            console.log(arrData)
            cityName.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            tempStatus.innerText = arrData[0].weather[0].main;

            icon.innerHTML = `<img src="icons/${ arrData[0].weather[0].icon}.png"/>`;
            dataHide.classList.remove('data_hide')
        } catch {
            cityName.innerText = "Please enter the correct city"
            dataHide.classList.add('data_hide')
        }

    }
}
submitBtn.addEventListener('click', getInfo);