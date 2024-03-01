const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('input', e => {
    const isChecked = e.target.checked;

    if (isChecked) {
        body.classList.add('dark-theme');
        createStars();
    } else {
        body.classList.remove('dark-theme');
        removeStars();
    }
});

function createStars() {
    const starContainer = document.createElement('div');
    starContainer.className = 'star-container';
    body.appendChild(starContainer);

    for (let i = 0; i < 50; i++) { // Increase the number of stars
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.backgroundColor = getRandomColor(); // Function to get a random color
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;
        starContainer.appendChild(star);
    }
}

function removeStars() {
    const starContainer = document.querySelector('.star-container');
    if (starContainer) {
        starContainer.remove();
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
