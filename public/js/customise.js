document.addEventListener("DOMContentLoaded", function () {
    var cdropdown = document.getElementById("colour");
    var fdropdown = document.getElementById("font");

    function loadAccent() {
        var cvalue = cdropdown.value;
        document.body.classList.remove("blue", "red", "pink", "green");
        document.body.classList.add(cvalue);
        localStorage.setItem("accent", cvalue);
    }

    function loadFont() {
        var fvalue = fdropdown.value;
        document.body.classList.remove("helvetica", "bios", "jetbrains", "sheepish");
        document.body.classList.add(fvalue);
        localStorage.setItem("font", fvalue);
    }

    var accent = localStorage.getItem("accent");
    if (accent) {
        cdropdown.value = accent;
    }

    var font = localStorage.getItem("font");
    if (font) {
        fdropdown.value = font;
    }

    loadAccent();
    cdropdown.onchange = loadAccent;

    loadFont();
    fdropdown.onchange = loadFont;
});

















































/*document.addEventListener("DOMContentLoaded", function () {
    var cdropdown = document.getElementById("colour");
    function loadAccent() {
        var cvalue = cdropdown.value;
        

        if (cvalue === "blue") {
            document.documentElement.style.setProperty('--accent', 'var(--blue)');
            localStorage.setItem("accent", "blue");
        }
        else if (cvalue === "red") {
            document.documentElement.style.setProperty('--accent', 'var(--red)');
            localStorage.setItem("accent", "red");
        }
        else if (cvalue === "pink") {
            document.documentElement.style.setProperty('--accent', 'var(--pink)');
            localStorage.setItem("accent", "pink");
        }
        else if (cvalue === "green") {
            document.documentElement.style.setProperty('--accent', 'var(--green)');
            localStorage.setItem("accent", "green");
        }
        else {
            console.error("Unknown colour value: " + value);
        }
    }

    var fdropdown = document.getElementById("font");
    function loadFont() {
        var fvalue = fdropdown.value;
        if (fvalue === "helvetica") {
            document.documentElement.style.setProperty('--font', 'var(--helvetica)');
            localStorage.setItem("font", "helvetica");
        }
        else if (fvalue === "bios") {
            document.documentElement.style.setProperty('--font', 'var(--bios)');
            localStorage.setItem("font", "bios");
        }
        else if (fvalue === "jetbrains") {
            document.documentElement.style.setProperty('--font', 'var(--jetbrains)');
            localStorage.setItem("font", "jetbrains");
        }
        else if (fvalue === "sheepish") {
            document.documentElement.style.setProperty('--font', 'var(--sheepish)');
            localStorage.setItem("font", "sheepish");
        }
        else {
            console.error("Unknown font value: " + fvalue);
        }
    }

    var accent = localStorage.getItem("accent");
    if (accent) {
        cdropdown.value = accent;
    }

    var font = localStorage.getItem("font");
    if (font) {
        fdropdown.value = font;
    }

    loadAccent();
    cdropdown.onchange = loadAccent;

    loadFont();
    fdropdown.onchange = loadFont;
});*/