kelvin = document.getElementById('Kelvin');
celsius = document.getElementById('Celsius');
fahrenheit = document.getElementById('Fahrenheit');
kelvin.oninput = function ()
{
    celsius.value = (parseFloat(kelvin.value) - 273.15);
    fahrenheit.value = (((parseFloat(kelvin.value) - 273.15) * 9 / 5) + 32);
}    
celsius.oninput = function ()
{
    kelvin.value = (parseFloat(celsius.value) + 273.15);
    fahrenheit.value = (((parseFloat(celsius.value) * 9) / 5) + 32);     
}
fahrenheit.oninput = function () 
{
    kelvin.value = (((parseFloat(fahrenheit.value) - 32) * 5 / 9) + 273.15);
    celsius.value = (((parseFloat(fahrenheit.value) - 32) * 5) / 9);       l
} 
function reset()
{
    document.getElementById("Temperature").reset();
}