const landingButton = document.getElementById("landing-page-button");
const hero = document.getElementById("hero-section");
const tracker = document.getElementById("task-tracker-section")
const backButton = document.getElementById("go-back");

// function to show tracker after button is clicked
landingButton.addEventListener("click", () => {
    hero.classList.add('hidden')
    tracker.classList.remove('hidden')
})

backButton.addEventListener("click", () => {
    hero.classList.remove('hidden')
    tracker.classList.add('hidden')
})
