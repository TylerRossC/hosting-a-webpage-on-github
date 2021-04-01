const h2 = document.createElement('h2');
    h2.textContent = "Let's get to it!";
        document.querySelector('body').appendChild(h2);
document.getElementById("header").addEventListener("mouseover", function() {
    document.getElementById("header").style.backgroundColor = "yellow";
});
document.getElementById("header").addEventListener("mouseout", function() {
    document.getElementById("header").style.backgroundColor = "red";
});
