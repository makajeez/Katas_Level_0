const celciusToFahrenheit = celcius => {
    return (celcius * 9.0) / 5 + 32;
}

const fahrenheitToCelcius = fahrenheit => {
    return (5 / 9) * (fahrenheit - 32);   
}
