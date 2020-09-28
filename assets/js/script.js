let form = document.getElementById('form');
let name = document.getElementById('name');

form.addEventListener('submit', event => {
    event.preventDefault();

    const trimmedName = name.value.trim();
    const letters = /^[а-яa-z]+$/i;

    if (trimmedName === "") {
        alert('Please enter something other than spaces ;)');
        return false;
    } else if (trimmedName.length > 25) {
        alert('Please enter a name shorter than 25 letters');
        return false;
    } else if (!trimmedName.match(letters)) {
        alert('Please only enter letters');
        return false;
    }

    document.location = "finalpage.html?name-from-previous-page=" + trimmedName;
});

