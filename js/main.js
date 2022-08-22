
let continueSending = false;
let signalTiming = 0;

window.onload = function () {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
	    tizen.application.getCurrentApplication().exit();
	} catch (ignore) {
	}
    });
    

    // Sample code
    var sendsignal = document.querySelector("#sendsignal");
    sendsignal.addEventListener("touchstart", function() {
        navigator.vibrate(100000);
        signalTiming = Date.now();
        console.log("touchstart" + signalTiming);
    });
    sendsignal.addEventListener("touchend", function() {
        navigator.vibrate(0);
        signalTiming = Date.now() - signalTiming;
    	continueSending = false
        console.log("touchend" + signalTiming);
    	sendSignal(signalTiming)
    });
    
    var getsignal = document.querySelector("#getsignal");
    getsignal.addEventListener("click", function() {
        getSignal()
    });
    
};

function getSignal() {
	const http = new XMLHttpRequest();
    const url = "http://192.168.3.160:8080/";
    http.open("GET", url);
	http.send();
    http.onreadystatechange=function() {
    	console.log("onreadystatechange " + this.readyState + " " + this.status);
    	if (this.readyState == 4 && this.status == 200) {
    		console.log(http.response);
    		navigator.vibrate(http.response);
    	}
    }
	/*continueSending = true
	while (continueSending) {
		navigator.vibrate(10);
	}*/
}

function sendSignal(length) {
	const http = new XMLHttpRequest();
	const url = "http://192.168.3.160:8080/";
	http.open("POST", url);
	http.send(length);
}