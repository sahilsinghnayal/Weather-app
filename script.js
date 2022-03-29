let weather={
   "api_key":"4dbc61664983076721104593c27625c5",
   fethweather:function(city){
       fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+ "&appid="+this.api_key
       )
       .then((response)=>response.json())
       .then((data)=>console.log(data));

   },
   displayweather:function(data){

   }
};


