function setupSlider(sliderId, knobId, fillClass) {
    const slider = document.getElementById(sliderId);
    const knob = document.getElementById(knobId);
    const fill = slider.querySelector(".fill");

    let dragging = false;

    knob.addEventListener("mousedown", () => {
        dragging = true;
    });

    document.addEventListener("mouseup", () => {
        dragging = false;
    });

    document.addEventListener("mousemove", (e) => {
        if (!dragging) return;

        const rect = slider.getBoundingClientRect();
        let x = e.clientX - rect.left;

        const max = rect.width;

        if (x < 0) x = 0;
        if (x > max) x = max;

        knob.style.left = x + "px";
        fill.style.width = x + "px";
    });
}

/* INIT ALL SLIDERS */
setupSlider("slider1", "knob1");
setupSlider("slider2", "knob2");
setupSlider("slider3", "knob3");

/* NEXT BUTTON */
document.getElementById("nextBtn").addEventListener("click", () => {
    window.location.href = "page3.html";
});
