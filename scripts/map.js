window.onload = function(){ 
    document.getElementById('mapFrame').src = 'https://www.google.com/maps?q=Yliopistonkatu 36 Lappeenranta&output=embed';
}

function myFunction(){
let address = document.getElementById("address").value;
let city = document.getElementById("city").value;
let place = 'https://www.google.com/maps?q=' + address + city + '&output=embed';
document.getElementById("mapFrame").src = place;
}
