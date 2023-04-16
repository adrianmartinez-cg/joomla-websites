// Script for carousel-lab
const controls = document.querySelectorAll('.carousel-lab-control');
let currentItem = 0;
const items = document.querySelectorAll('.carousel-lab-gallery-item');
const numItems = items.length;

controls.forEach( control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('carousel-lab-left');
        const slideFactor = 1;
        if(isLeft){
            currentItem -= slideFactor;
        } else {
            currentItem += slideFactor;
        }

        if(currentItem >= numItems){
            currentItem = 0;
        }

        if(currentItem < 0 ){
            currentItem = numItems - 1;
        }

        items.forEach(item => {
            item.classList.remove('carousel-lab-gallery-current');
            items[currentItem].scrollIntoView({
                inline: "center",
                behavior: "smooth"
            });
            items[currentItem].classList.add('carousel-lab-gallery-current');
        })


    })
});