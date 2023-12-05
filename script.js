/*Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
Creare un carosello come nella foto allegata. [vi ripasso quella completa di thumbnails ma quelle rimangono Bonus]*/


// Creiamo il nostro Array contenente le img e le descrizioni
const images = [ 
    { image: '01.webp', title: 'Marvel\'s Spiderman Miles Morale', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', }, 
    
    { image: '02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', }, 
    
    { image: '03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", }, 
    
    { image: '04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', }, 
    
    { image: '05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', } 
]; 

// Creiamo le variabili 

// Creo la variabile per lo slider
const slider = document.getElementById("slider");

// Creo la variabile per i titoli delle img
const infoTitle = document.getElementById("info-title");

// Creo la variabile per i text delle img
const infoText = document.getElementById("info-text");

// Inizializziamo il carosello
infoTitle.innerHTML = images[0].title;
infoText.innerHTML = images[0].text;

// Slider 

for (let i = 0; i < images.length; i++) {

// Creo la variabile per le img
  const singleImg = document.createElement("img");

// Prendo le img
  singleImg.src = `${images[i].image}`;

// Gli assegno una classe
  singleImg.classList.add("slider-img");

  if (i === 0) {
    singleImg.classList.add("active");
  }

  slider.append(singleImg);
}


let currentImg = 0;

// Assegniamo alla classe una variabile
const listImg = document.querySelectorAll(".slider-img");

// Assegno ai button delle variabili
const upButton = document.getElementById("up-button");
const downButton = document.getElementById("down-button");


// Creiamo la funzione next
function next() {
  listImg[currentImg].classList.remove("active");

  currentImg++;

  if (currentImg === images.length) {
    currentImg = 0;
  }

  listImg[currentImg].classList.add("active");
  infoTitle.innerHTML = images[currentImg].title;
  infoText.innerHTML = images[currentImg].text;
}


//Creiamo la funzione prev
function previous() {
  listImg[currentImg].classList.remove("active");

  if (currentImg === 0) {
    currentImg = images.length;
  }

  currentImg--;

  listImg[currentImg].classList.add("active");
  infoTitle.innerHTML = images[currentImg].title;
  infoText.innerHTML = images[currentImg].text;
}

// Aggiungiamo il click al button 'prev'
downButton.addEventListener("click", function () {
  next();
});

// Aggiungiamo il click al button 'prev'
upButton.addEventListener("click", function () {
  previous();
});

