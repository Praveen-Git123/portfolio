window.addEventListener("DOMContentLoaded", () => {

    const words = [
        "AI Developer",
        "Android Developer",
        "MIT App Inventor Developer",
        "Python Learner"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typing = document.getElementById("typing");

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!isDeleting) {

            typing.textContent = currentWord.substring(0, charIndex++);

            if (charIndex > currentWord.length) {

                isDeleting = true;

                setTimeout(typeEffect, 1200);

                return;
            }

        } else {

            typing.textContent = currentWord.substring(0, charIndex--);

            if (charIndex < 0) {

                isDeleting = false;

                wordIndex = (wordIndex + 1) % words.length;

            }

        }

        setTimeout(typeEffect, isDeleting ? 50 : 100);

    }

    typeEffect();

});
