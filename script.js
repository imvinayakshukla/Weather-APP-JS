const api_url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const key="bee6ba8e9a8f793f3622cc005d2103a8";
const weather_icon=document.querySelector(".weather-icon");

async function checkWeather(city)
{
    const response =await fetch(api_url+city+`&appid=${key}`);
    var data=await response.json();
    console.log(data);
    if(data.weather[0].main=="Clouds")
    weather_icon.src="/images/clouds.png";
    else if(data.weather[0].main=="Clear")
    weather_icon.src="/images/clear.png";


    else if(data.weather[0].main=="Rain")
    weather_icon.src="images/rain.png";
    else if(data.weather[0].main=="Drizzle")
    weather_icon.src="images/drizzle.png";
    else if(data.weather[0].main=="Mist")
    weather_icon.src="images/mist.png";


    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp);
    document.querySelector(".wind").innerHTML=data.wind.speed;
    document.querySelector(".humidity").innerHTML=data.main.humidity;
}


document.querySelector(".search button").addEventListener("click",()=>{
    let city=document.querySelector(".search input").value;
    console.log(city);
    checkWeather(`${city}`);

    document.querySelector(".weather").style.display="block";
    
    
    

    // document.querySelector(".weather").style.display="block";
    
});

