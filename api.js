function displayresult() {
    var city = document.getElementById("city").value;
    var apikey='2654ac6815a21869ff875c3821197c2b';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city 
    + '&appid='+apikey+'&units=metric')
        .then(response => response.json())
        .then(data => {
            var t = data['main']['temp']
            var x = data['weather'][0]['main']
            var a = data['main']['temp_min']
            var b = data['main']['temp_max']
            var c = data['main']['pressure']
            var d = data['main']['humidity']
            var e = data['main']['sea_level']
            var f = data['main']['grnd_level']
            
        
            document.getElementById("output1").innerHTML=t;
            document.getElementById("output2").innerHTML=x;
            document.getElementById("output3").innerHTML=a;
            document.getElementById("output4").innerHTML=b;
            document.getElementById("output5").innerHTML=c;
            document.getElementById("output6").innerHTML=d;
            document.getElementById("output7").innerHTML=e;
            document.getElementById("output8").innerHTML=f;
        })
}