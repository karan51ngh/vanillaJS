function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
            console.log("Loaded script with SRC: " + src)
            callback(null, src);
    }
    script.onerror = function() {
            console.log("Error loading script with SRC: " + src);
            callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
}


function hello(error, src) {
    if (error) {
            console.log(error)
            return
    }
    alert('Hello World!' + src);
}

// Pyramid of Doom
/*
The pyramid of doom is a common problem in programming that arises when dealing with multiple levels of nested code blocks. 
This occurs when a sequence of asynchronous or synchronous operations are nested inside each other, 
creating a pyramid-shaped structure that can be difficult to read and maintain.
*/

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function Hello(error, src) 
{
        if (error) 
        {
                console.log(error)
                sendEmergencyMessageToCeo();
                return
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js", function Hello(error, src) 
        {
                if (error) 
                {
                        console.log(error)
                        sendEmergencyMessageToCeo();
                        return
                }
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap3.bundle.min.js", function Hello(error, src) 
                {
                        if (error) 
                        {
                                console.log(error)
                                sendEmergencyMessageToCeo();
                                return
                        }
                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js", function goodmorning(error, src) 
                        {
                            if (error) 
                            {
                                    console.log(error)
                                    sendEmergencyMessageToCeo();
                                    return
                            }
                        
                        })
                })
        })
})
