// Text option selection — click to turn red, click again to deselect
// Multiple options can be selected at once (unlike photo pages)
const optionBtns = document.querySelectorAll(".option-btn");

optionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("selected");
    });
});

// Next button — navigate to page 7
document.getElementById("nextBtn").addEventListener("click", () => {
    window.location.href = "page7.html";
});
