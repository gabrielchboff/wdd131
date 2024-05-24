
const generateOptions = () => {
    const select = document.querySelector('select');

    const options = [
        {
          id: "fc-1888",
          name: "flux capacitor",
          averagerating: 4.5
        },
        {
          id: "fc-2050",
          name: "power laces",
          averagerating: 4.7
        },
        {
          id: "fs-1987",
          name: "time circuits",
          averagerating: 3.5
        },
        {
          id: "ac-2000",
          name: "low voltage reactor",
          averagerating: 3.9
        },
        {
          id: "jj-1969",
          name: "warp equalizer",
          averagerating: 5.0
        }
      ];
    options.forEach(element => {
        const option = document.createElement('option');
        option.value = element.name;
        option.textContent = element.name;
        option.id = element.id;
        select.appendChild(option);
    });
}

const reviewCounter = () => {

    let counter = localStorage.getItem('counter');
    if (counter === null) {
        counter = 0;
    }
    counter++;
    localStorage.setItem('counter', counter);
}




document.addEventListener('DOMContentLoaded', () => {
    generateOptions();
    let date = new Date();
    let currentyear = date.getFullYear();

    let currentyearSpan = document.getElementById("currentyear");
    currentyearSpan.innerText = currentyear;
    let oLastModif = new Date(document.lastModified);

    let lastModified = document.getElementById("lastModified");
    lastModified.innerText = oLastModif.toLocaleDateString("en-UK");


});

document.getElementById('form').addEventListener('submit', function(event) {
    reviewCounter();
});
