const apiKey = "ce678a1ab136ef46871798383c6d8d08"
let input = document.querySelector('#search-text')
let button = document.querySelector('#search-button')
let icon = document.querySelector("#icon-display")
function downloadImage(response){
    let iconCode = response.weather[0].icon
    icon.setAttribute("src", `http://openweathermap.org/img/wn/${iconCode}@4x.png`)
}





function getWeather(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&APPID=${apiKey}`,
    {mode:'cors'})
     .then((response) => {
        console.log (response)
        console.log (`Response Code: ${response.status}`)
        if (response.status == 200){
            return response.json();
        }
        
    })
    .then((response)=>{
        console.log (response)
        downloadImage(response)

    })
}

button.addEventListener("click",getWeather)