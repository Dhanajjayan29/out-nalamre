// Inject the header into the page
fetch('/header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('body').insertAdjacentHTML('afterbegin', data);
    })
    .catch(err => console.log('Error loading header:', err));

// Inject the footer into the page
window.addEventListener('DOMContentLoaded', () => {
    fetch('/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('beforeend', data);
        })
        .catch(err => console.log('Error loading footer:', err));
});
