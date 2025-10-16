function showSurprise() {
    // Kleine Animation: Herzchen fliegen
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

    alert("🎉 Überraschung! Du bist toll! 💕");
}
