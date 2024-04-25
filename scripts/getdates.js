let date = new Date();
let currentyear = date.getFullYear();

let currentyearSpan = document.getElementById("currentyear");
currentyearSpan.innerText = currentyear;
let oLastModif = new Date(document.lastModified);

let lastModified = document.getElementById("lastModified");
lastModified.innerText = oLastModif.toLocaleDateString("en-UK");

