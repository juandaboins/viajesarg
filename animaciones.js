/* menu */

function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}

/* slider */

(function(){
    const sliders = [...document.querySelectorAll('.slider-body')];
    const flechaAfter = document.querySelector('#after');
    const flechaBefore = document.querySelector('#before');
    let value;

    flechaAfter.addEventListener('click', ()=>changePosition(1));

    flechaBefore.addEventListener('click', ()=>changePosition(-1));
    
    function changePosition(change){
        const currentElement = Number(document.querySelector('.slider-body--show').dataset.id);

        value = currentElement;
        value+= change;

        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('slider-body--show');
        sliders[value-1].classList.toggle('slider-body--show');
    } 
})()

