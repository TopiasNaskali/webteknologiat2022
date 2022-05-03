let indexi;
let pics_arrays = [{"name":"kuu", "src":"images/moon.jpg"}, {"name":"tähdet", 
"src":"images/stars.jpg"}, {"name":"aurinko", "src":"images/sun.jpg"}];

if(localStorage.hasOwnProperty('indexi'))
{
    indexi = parseInt(localStorage.getItem('indexi'));
}
else
{
    indexi = 0;
}

function carusel() {
    document.getElementById('karuselli').src = pics_arrays[indexi].src;
    document.getElementById('name').textContent = pics_arrays[indexi].name
}


window.onload = function() {
    carusel();
}

function lefti(){
    if (indexi <= 0)
    {
        indexi = 2;
        carusel();
        localStorage.setItem('indexi', indexi);

    }
    else
    {
        indexi = indexi - 1;
        carusel();
        localStorage.setItem('indexi', indexi);
    }

}
function righti(){
    if (indexi >= 2)
    {
        indexi = 0;
        carusel();
        localStorage.setItem('indexi', indexi);

    }
    else
    {
        indexi = indexi + 1;
        carusel();
        localStorage.setItem('indexi', indexi);
    }

}
    let painahdus = false;
    let intervallihdus;
function pauseNappi(){
    
    if(painahdus == false)
    {
        intervallihdus = window.setInterval(righti, 2000);
        painahdus = true;
        localStorage.setItem('indexi', indexi);
    }
    else
    {
        painahdus = false;
        clearInterval(intervallihdus);
        localStorage.setItem('indexi', indexi);
    }
}