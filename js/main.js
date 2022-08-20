let continueSending = false

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
    var textbox = document.querySelector('.contents');
    textbox.addEventListener("click", function(){
    	box = document.querySelector('#textbox');
    	box.innerHTML = "touchstart";
    		print("HERE!")
    });
    /*textbox.addEventListener("mouseup", function(){
    	box = document.querySelector('#textbox');
    	box.innerHTML = "touchend"
    });*/
    
};



function sendSignal() {
	while (continueSending) {
		continueSending = false
	}
}