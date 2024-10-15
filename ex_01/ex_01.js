function display_weather_chart(longitude, latitude) {
    const img = document.createElement('img');
    img.src = `https://www.7timer.info/bin/civil.php?lon=${longitude}&lat=${latitude}`;
    img.alt = 'Weather Forecast Chart';
    document.body.appendChild(img);
}
display_weather_chart(113.17, 23.09);
