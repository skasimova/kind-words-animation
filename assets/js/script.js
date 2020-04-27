let form = document.getElementById('form');
let name = document.getElementById('name');

form.addEventListener('submit', event => {
    event.preventDefault();
    document.location = "finalpage.html?name-from-previous-page=" + name.value;
});

