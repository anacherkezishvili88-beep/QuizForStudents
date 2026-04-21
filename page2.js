function setupSlider(sliderId, knobId) {
    const slider = document.getElementById(sliderId);
    const knob = document.getElementById(knobId);
    const fill = slider.querySelector(".fill");
    const track = slider.querySelector(".track");

    let dragging = false;

    // Get the usable width (track width minus knob width so knob stays inside)
    function getTrackWidth() {
        return track.offsetWidth - knob.offsetWidth;
    }

    knob.addEventListener("mousedown", (e) => {
        dragging = true;
        e.preventDefault(); // prevent text selection while dragging
    });

    // Also allow clicking anywhere on the track to jump the knob there
    track.addEventListener("mousedown", (e) => {
        dragging = true;
        moveKnob(e.clientX);
        e.preventDefault();
    });

    fill.addEventListener("mousedown", (e) => {
        dragging = true;
        moveKnob(e.clientX);
        e.preventDefault();
    });

    document.addEventListener("mouseup", () => {
        dragging = false;
    });

    document.addEventListener("mousemove", (e) => {
        if (!dragging) return;
        moveKnob(e.clientX);
    });

    // Touch support for mobile
    knob.addEventListener("touchstart", (e) => {
        dragging = true;
        e.preventDefault();
    }, { passive: false });

    document.addEventListener("touchend", () => {
        dragging = false;
    });

    document.addEventListener("touchmove", (e) => {
        if (!dragging) return;
        moveKnob(e.touches[0].clientX);
        e.preventDefault();
    }, { passive: false });

    function moveKnob(clientX) {
        const rect = slider.getBoundingClientRect();
        const maxX = getTrackWidth();

        // Offset by half knob width so the center of the knob tracks the cursor
        let x = clientX - rect.left - knob.offsetWidth / 2;

        if (x < 0) x = 0;
        if (x > maxX) x = maxX;

        knob.style.left = x + "px";
        fill.style.width = (x + knob.offsetWidth / 2) + "px";
    }
}

/* INIT ALL SLIDERS */
setupSlider("slider1", "knob1");
setupSlider("slider2", "knob2");
setupSlider("slider3", "knob3");

/* NEXT BUTTON — navigates to page3 */
document.getElementById("nextBtn").addEventListener("click", () => {
    window.location.href = "page3.html";
});
