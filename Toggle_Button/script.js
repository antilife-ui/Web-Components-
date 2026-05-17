let a = document.querySelector("body");
let btn = document.querySelector(".btn");
let icon = document.querySelector(".icon_container i");

function store(value) {
    localStorage.setItem("darkmode", value);
}

function load() {
    let darkmode = localStorage.getItem("darkmode");
    if (!darkmode) {
        store(false); // first visit — default to light mode
    }
    else if (darkmode === "true") {
        a.classList.add("darkmode");     // Bug 1 fixed: was icon, should be a (body)
        icon.classList.remove("fa-sun"); // Bug 2 fixed: remove fa-sun before adding fa-moon
        icon.classList.add("fa-moon");
    }
    // "false" branch removed — fa-sun is already on icon from HTML, nothing to do
}

function main() {
    btn.addEventListener("click", () => {
        a.classList.toggle("darkmode");

        // Force reflow so animation always restarts on every click
        icon.classList.remove("animate");
        void icon.offsetWidth;
        icon.classList.add("animate");

        store(a.classList.contains("darkmode"));

        if (a.classList.contains("darkmode")) {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        } else {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }

        setTimeout(() => {
            icon.classList.remove("animate");
        }, 500);
    });
}

// Disable transitions → restore state → re-enable transitions after first paint
document.body.classList.add("no-transition");
load();
requestAnimationFrame(() => {
    requestAnimationFrame(() => {
        document.body.classList.remove("no-transition");
    });
});

main();  // attach click listener