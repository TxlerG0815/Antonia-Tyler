function checkPassword() {
    const password = document.getElementById("password").value;
    const richtigesPasswort = "Pinguin"; // <-- dein Passwort hier ändern!

    if (password === richtigesPasswort) {
        document.getElementById("password-container").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        alert("Falsches Passwort 🐧");
    }
}

function showSurprise() {
    const heart = document.createElement('div');
    heart.textContent = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = '100%';
    heart.style.fontSize = '2rem';
    heart.style.transition = 'top 2s ease-out';
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.style.top = Math.random() * window.innerHeight * 0.5 + 'px';
    }, 10);
    setTimeout(() => {
        heart.remove();
    }, 2000);

    alert("🐧Du bist das Beste, was mir je passiert ist🐧");
}

