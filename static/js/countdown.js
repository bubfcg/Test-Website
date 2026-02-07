function updateCountdown() {
    const eventDate = new Date("August 14, 2026 09:00:00").getTime();
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `
            <div><span>${days}</span><br><small>DAGEN</small></div>
            <div><span>${hours}</span><br><small>UREN</small></div>
            <div><span>${mins}</span><br><small>MIN.</small></div>
            <div><span>${secs}</span><br><small>SEC.</small></div>
        `;
    } else {
        document.getElementById("countdown").innerHTML = "DE CONVENTIE IS BEGONNEN!";
    }
}

// Update de klok elke seconde
setInterval(updateCountdown, 1000);
updateCountdown();

