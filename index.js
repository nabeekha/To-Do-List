const landingButton = document.getElementById("landing-page-button");
const hero = document.getElementById("hero");
const tracker = document.getElementById("tracker")

// function to show tracker after button is clicked
landingButton.addEventListener("click", () => {
    hero.classList.add(hidden)
    tracker.classList.remove(hidden)
})
