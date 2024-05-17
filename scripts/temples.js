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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Curitiba Brazil",
        location: "Curitiba, Brazil",
        dedicated: "2008, June, 1",
        area: 0000,
        imageUrl: "https://noticias-pt.aigrejadejesuscristo.org/media/640x360/CuritibaBrasil_templo.png"
    },
    {
        templeName: "Rio de Janeiro Brazil",
        location: "Rio de Janeiro, Brazil",
        dedicated: "2022, May, 8",
        area: 00000,
        imageUrl: "https://newsroom.churchofjesuschrist.org/media/960x540/5aa85fb6f20a17f629302687710142328a707d4d.jpg"
    },
    {
        templeName: "Sao Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 0000,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/249d5717cea3f67ba627819a9616a53f591fc9d7/full/1920%2C/0/default"
    }
  ];

const generateFiguresOld = () => {
    const oldFigures = document.querySelector('#oldFigures');

    let oldTemples = temples.filter(element => {
        return parseInt(element.dedicated.split(',')[0]) < 1900;
    });

    oldTemples.forEach(element => {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const ul = document.createElement('ul');
        img.src = element.imageUrl;
        img.alt = element.templeName;
        const figcaption = document.createElement('figcaption');
        ul.innerHTML = `<li>Name: ${element.templeName}</li><li>Location: ${element.location}</li><li>Dedicated: ${element.dedicated}</li><li>Area: ${element.area}</li>`

        figcaption.innerHTML = ul.innerHTML;
        img.loading = 'lazy';

        figure.appendChild(img);
        figure.appendChild(figcaption);

        oldFigures.appendChild(figure);

    })
};

const generateFiguresNew = () => {
    const newFigures = document.querySelector('#newFigures');
    let newTemples = temples.filter(element => {
        return parseInt(element.dedicated.split(',')[0]) > 2000;
    });

    newTemples.forEach(element => {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const ul = document.createElement('ul');
        img.src = element.imageUrl;
        img.alt = element.templeName;
        const figcaption = document.createElement('figcaption');
        ul.innerHTML = `<li>Name: ${element.templeName}</li><li>Location: ${element.location}</li><li>Dedicated: ${element.dedicated}</li><li>Area: ${element.area}</li>`
        figcaption.innerHTML = ul.innerHTML;
        img.loading = 'lazy';

        figure.appendChild(img);
        figure.appendChild(figcaption);

        newFigures.appendChild(figure);
    })



}

const generateFiguresLarge = () => {
    const largeFigures = document.querySelector('#largeFigures');
    let largeTemples = temples.filter(element => {
        return element.area > 90000;
    });

    largeTemples.forEach(element => {
        
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const ul = document.createElement('ul');
        img.src = element.imageUrl;
        img.alt = element.templeName;
        const figcaption = document.createElement('figcaption');
        ul.innerHTML = `<li>Name: ${element.templeName}</li><li>Location: ${element.location}</li><li>Dedicated: ${element.dedicated}</li><li>Area: ${element.area}</li>`
        figcaption.innerHTML = ul.innerHTML;
        img.loading = 'lazy';

        figure.appendChild(img);
        figure.appendChild(figcaption);
        largeFigures.appendChild(figure);
    })
}

const generateFiguresSmall = () => {
    const smallFigures = document.querySelector('#smallFigures');
    let smallTemples = temples.filter(element => {
        return element.area < 10000;
    });

    smallTemples.forEach(element => {

        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const ul = document.createElement('ul');
        img.src = element.imageUrl;
        img.alt = element.templeName;
        const figcaption = document.createElement('figcaption');
        ul.innerHTML = `<li>Name: ${element.templeName}</li><li>Location: ${element.location}</li><li>Dedicated: ${element.dedicated}</li><li>Area: ${element.area}</li>`
        figcaption.innerHTML = ul.innerHTML;
        img.loading = 'lazy';

        figure.appendChild(img);
        figure.appendChild(figcaption);
        smallFigures.appendChild(figure);
    })
}

const generateFigures = () => {
    const homeFigures = document.querySelector('#homeFigures');

    temples.forEach(element => {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const ul = document.createElement('ul');
        img.src = element.imageUrl;
        img.alt = element.templeName;

        const figcaption = document.createElement('figcaption');
        ul.innerHTML = `<li>Name: ${element.templeName}</li><li>Location: ${element.location}</li><li>Dedicated: ${element.dedicated}</li><li>Area: ${element.area}</li>`

        figcaption.innerHTML = ul.innerHTML;
        img.loading = 'lazy';

        figure.appendChild(img);
        figure.appendChild(figcaption);

        homeFigures.appendChild(figure);


    });
        

}

document.addEventListener('DOMContentLoaded', function() {
    generateFigures();
    generateFiguresOld();
    generateFiguresNew();
    generateFiguresLarge();
    generateFiguresSmall();

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



