window.addEventListener("DOMContentLoaded", () => {

    const roles = [
        "🤖 AI Developer",
        "📱 Android Developer",
        "💻 MIT App Inventor Developer",
        "🐍 Python Learner"
    ];

    roles.forEach((role, index) => {

        setTimeout(() => {

            const element = document.getElementById("role" + (index + 1));

            element.textContent = role;

            element.classList.add("show");

        }, index * 900);

    });

});
