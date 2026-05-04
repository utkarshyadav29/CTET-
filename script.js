document.addEventListener('DOMContentLoaded', () => {
    const funnyMessages = [
        "Aai, ek aur potato! 🥔",
        "Padhai karo warna... Moti Potato royega 😭",
        "Chalo chalo, exam clear karna hai! 🚀",
        "Moti Potato is watching you! 👀",
        "You got this, Maa! 💪",
        "Marathi seekho Moti Potato ke saath! 🍅"
    ];

    const potato = document.querySelector('.moti-potato');
    const funnyMessageDiv = document.getElementById('funny-message');

    if (potato) {
        potato.addEventListener('click', () => {
            const mouth = document.querySelector('.mouth');
            mouth.setAttribute('d', 'M 100 110 Q 110 130 120 110');
            
            const randomMsg = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
            funnyMessageDiv.textContent = randomMsg;
            funnyMessageDiv.style.opacity = 1;

            setTimeout(() => {
                mouth.setAttribute('d', 'M 100 115 Q 110 125 120 115');
                funnyMessageDiv.style.opacity = 0;
            }, 2500);
        });
    }
});

function handleAction(action) {
    if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(50);
    }

    if (action === 'practice') {
        const btn = document.querySelector('.btn-practice');
        btn.innerHTML = 'Wait karo... 🥔💨';
        setTimeout(() => {
            window.location.href = 'subjects.html?mode=quiz';
        }, 800);
    } else if (action === 'study') {
        const btn = document.querySelector('.btn-study');
        btn.innerHTML = 'Chalo Padhein! 📚';
        setTimeout(() => {
            window.location.href = 'subjects.html?mode=study';
        }, 800);
    }
}
