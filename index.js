// script.js
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var latitude = position.coords.latitude;
    
    var longitude = position.coords.longitude;
    var result = document.getElementById("result");
    result.innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
}
