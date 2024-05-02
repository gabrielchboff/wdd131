/*
<figure>
  <img src="example.jpg" alt="Example Image">
  <figcaption>This is an example image</figcaption>
</figure>*/

let date = new Date();
let currentyear = date.getFullYear();

let currentyearSpan = document.getElementById("currentyear");
currentyearSpan.innerText = currentyear;
let oLastModif = new Date(document.lastModified);

let lastModified = document.getElementById("lastModified");
lastModified.innerText = oLastModif.toLocaleDateString("en-UK");


const generateFigures = () => {
    const homeTemplesList = [
        "https://newsroom.churchofjesuschrist.org/media/960x540/Resized-pic.jpg",
        "https://newsroom.churchofjesuschrist.org/media/960x540/Resized-pic.jpg",
        "https://newsroom.churchofjesuschrist.org/media/960x540/Resized-pic.jpg",
        "https://newsroom.churchofjesuschrist.org/media/960x540/Resized-pic.jpg",
        "https://newsroom.churchofjesuschrist.org/media/960x540/Resized-pic.jpg",
        "https://newsroom.churchofjesuschrist.org/media/960x540/Resized-pic.jpg",
        "https://newsroom.churchofjesuschrist.org/media/960x540/Resized-pic.jpg",
        "https://newsroom.churchofjesuschrist.org/media/960x540/Resized-pic.jpg",
        "https://newsroom.churchofjesuschrist.org/media/960x540/Resized-pic.jpg"
    ];

    const homeFigures = document.querySelector('#homeFigures');
    const oldFigures = document.querySelector('#oldFigures');
    const newFigures = document.querySelector('#newFigures');
    const largeFigures = document.querySelector('#largeFigures');
    const smallFigures = document.querySelector('#smallFigures');

    const allFigures = [homeFigures, oldFigures, newFigures, largeFigures, smallFigures];
    allFigures.forEach((currentFigure) => {

        homeTemplesList.forEach(element => {
            const figure = document.createElement('figure');
            const img = document.createElement('img');
            img.src = element;
            img.alt = "LDS TEMPLE";

            const figcaption = document.createElement('figcaption');
            figcaption.textContent = "LDS TEMPLE";

            figure.appendChild(img);
            figure.appendChild(figcaption);

            currentFigure.appendChild(figure);

        });
        
           
        
    })



}

document.addEventListener('DOMContentLoaded', function() {
    generateFigures();
    const menuToggle = document.getElementById('menu-toggle');
    menuToggle.addEventListener('click', function() {
        const menu = document.querySelector('.menu');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
});

window.addEventListener('resize', function() {
    const menu = document.querySelector('.menu');
    if (window.innerWidth > 740) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
});
  

const menuToggle = document.getElementById('menu-toggle');
const menuIcon = document.querySelector('.menu-icon');



menuToggle.addEventListener('change', function() {
  if (this.checked) {
    menuIcon.textContent = '✕'; // Change text content to 'x' when checkbox is checked
  } else {
    menuIcon.textContent = '☰'; // Change text content back to hamburger icon when checkbox is unchecked
  }
});


