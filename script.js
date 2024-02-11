function tak(){
    document.getElementById("nie").style.display = "none";
    document.getElementById("wynik").style.opacity = "1";
    document.getElementById("btnTak").style.background = "none";
    document.getElementById("btnTak").style.borderColor = "green";
    document.getElementById("btnTak").style.animation = "1s animacja_tak infinite";
    document.getElementById("zdjecieTak").style.display = "block";
    document.getElementById("zdjecieTak").style.marginBottom = "10px";
    document.getElementById("napis_po_tak").style.display = "block";
    document.getElementById("pytanie").style.display = "none";
    document.getElementById("zdjecieNie").style.display = "none";
    document.getElementById("prosze").style.display = "none";
}


document.getElementById("btnNie").addEventListener("mouseenter", run);
document.getElementById("btnNie").addEventListener("click", run);
let licznik = 0
function run() {
    let btn = document.getElementById("btnNie");
    const maxWidth = window.innerWidth - btn.offsetWidth;
    const maxHeight = window.innerHeight - btn.offsetHeight;
   
    document.getElementById("przyciski").style.gap = "0"
    btn.style.position = "absolute";
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply new coordinates to the button
    btn.style.left = randomX + "px";
    btn.style.top = randomY + "px";
    licznik++;
    if (licznik > 4)
    {
        document.getElementById("prosze").innerHTML = "↓ KLIKNIJ TUTAJ BO BEDZIE MI PRZYKRO :(( ↓";
        document.getElementById("zdjecieNie").style.display = "block";
    }
}