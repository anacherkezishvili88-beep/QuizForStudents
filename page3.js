// Food selection — click to toggle green border
// Only one food can be selected at a time
const foodBtns = document.querySelectorAll(".food-btn");

foodBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // If already selected, deselect it
        if (btn.classList.contains("selected")) {
            btn.classList.remove("selected");
            return;
        }
        // Deselect any previously selected food
        foodBtns.forEach(b => b.classList.remove("selected"));
        // Select the clicked one
        btn.classList.add("selected");
    });
});

// Next button — navigate to page 4
document.getElementById("nextBtn").addEventListener("click", () => {
    window.location.href = "page4.html";
});
