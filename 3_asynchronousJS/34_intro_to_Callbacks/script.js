function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("Loaded script, SRC: " + src);
        callback(null, src);
    }

    script.onerror = function () {
        console.log("Error loading script " + src);
        callback(new Error("Wrong URL"))
    }
    document.body.appendChild(script);

}

function hello(error, name) {
    if (error) {
        console.log("The Error is: " + error);
        return;
    }
    alert('Hello Friend!, your script is: ' + name);
}

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",hello);
loadScript("https://cdn.WRONGURLLLLLL.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", hello);