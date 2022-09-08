const p = document.getElementById("bekezdes");
let i = 0;
setInterval(function() {
    p.innerHTML = i;
    i++;
    }, 2000);
