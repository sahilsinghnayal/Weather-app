// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=4dbc61664983076721104593c27625c5
let weather={
   "api_key":"4dbc61664983076721104593c27625c5",
   fetchweather:function(city){
       fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+ "&appid="+this.api_key
       )
       .then((response)=>response.json())
       .then((data)=>this.displayweather(data));

   },
   displayweather:function(data){
    const {name}=data;
    const{icon ,description}=data.weather[0];//in api it was in an array
    const{temp , humidity }=data.main; 
    const{speed}=data.wind;
    console.log(name,icon,description,temp,humidity,speed)
    document.querySelector(".city").innerText="Weather in "+name;
    document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText=description;
    document.querySelector(".temp").innerText= Math.floor(temp-273) +"°C"; //in kelvin so to change it into celcius minus 273
    document.querySelector(".humidity").innerText="Humidity :"+humidity+"%";
    document.querySelector(".wind").innerText= "wind Speed :"+speed+"km/hr";
    // document.querySelector(".weather").classList.remove("loading");
   },
   search:function(){
       this.fetchweather(document.querySelector(".search-bar").value);
   }
  
};
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key==="Enter"){
        weather.search();
    }
    

});
weather.fetchweather("delhi");
