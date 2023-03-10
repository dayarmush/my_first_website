const h2 = document.createElement("h2");
h2.textContent = "Brought to you by Dovid and JavaScript";
document.querySelector("body").appendChild(h2);

const button = document.getElementById('infotag');
button.addEventListener('click', function() {
    button.style.display = 'none'
});