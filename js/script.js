//inserire le immagini in modo dinamico
const sliderImg = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
];

//prelevo tutti elementi html
const itemsContainer = document.querySelector(".items-container");

for (let i = 0; i < sliderImg.length; i++){
    const thisImg = sliderImg[i]
    const element = `
        <div class="item">
            <img src="${thisImg}" alt="">
        </div>`;
    itemsContainer.innerHTML += element;
}

//settare stato di partenza
const items = document.getElementsByClassName("item");
let sliderPosition = 0;
items[sliderPosition].classList.add("active"); // 0 o 1 o 2 ecc...


// navigazione
const nextBtn = document.querySelector(".next")
nextBtn.addEventListener("click", function(){

    if (sliderPosition < (items.length -1)){

        //cancellare active dall'elemnto attuale
        //rimuovo perchè se no vedo tutte le altre immagini insieme
        items[sliderPosition].classList.remove("active");

        // incremento slider sliderPosition di 1
        sliderPosition++;
        //aggiungiamo active al nuovo elemento attuale
        items[sliderPosition].classList.add("active");
    }
  

});

const prevBtn = document.querySelector(".prev")
prevBtn.addEventListener("click", function(){
    // Se la posizione attuale è > di 0 (il bootone funziona dalla seconda img in poi)
    if ( sliderPosition > 0 ){
        //rimuover la classe active
        items[sliderPosition].classList.remove("active");
        // decremntp la posizione
        sliderPosition--;
        //aggiungo classe active al nuovo elemento
        items[sliderPosition].classList.add("active");
    }


});


