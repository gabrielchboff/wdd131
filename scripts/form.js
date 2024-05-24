const generateOptions = () => {
    const select = document.querySelector('select');

    const options = ['Word', 'Excel', 'PowerPoint', 'PowerBI', 'Da Vinci'];
    options.forEach(element => {
        const option = document.createElement('option');
        option.value = element;
        option.textContent = element;
        select.appendChild(option);
    });
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

document.getElementById('ratingForm').addEventListener('submit', function(event) {
    const selectedRating = document.querySelector('input[name="rating"]:checked');
    
    if (!selectedRating) {
        alert('Please select a rating.');
        event.preventDefault(); // Prevent form submission
    } else {
        console.log('Selected rating:', selectedRating.value);
    }
});
