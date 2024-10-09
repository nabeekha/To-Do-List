const landingButton = document.getElementById("landing-page-button");
const hero = document.getElementById("hero-section");
const tracker = document.getElementById("task-tracker-section")

// function to show tracker after button is clicked
landingButton.addEventListener("click", () => {
    hero.classList.add('hidden')
    tracker.classList.remove('hidden')
})
