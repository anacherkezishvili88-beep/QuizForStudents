// Photo option selection — click to select, click again to deselect
// Only one option can be selected at a time
const photoBtns = document.querySelectorAll(".photo-btn");

photoBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("selected")) {
            btn.classList.remove("selected");
            return;
        }
        photoBtns.forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
    });
});

// Next button — navigate to page 6
document.getElementById("nextBtn").addEventListener("click", () => {
    window.location.href = "page6.html";
});
