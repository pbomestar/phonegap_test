
// var app = {
//     // Application Constructor
//     initialize: function() {
//         this.bindEvents();
//     },
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // Now safe to use the PhoneGap API
}

        audioObj = document.createElement("audio");
        // For playing audio

        initAudio();
    function initAudio(){

        console.log("uspeo jopet")
        audioObj.src        = "audio/click3.wav";
        audioObj.volume     = 0.5;
        audioObj.autoPlay   = false;
        audioObj.preLoad    = true;       
    }
            
    console.log("usao najbolje")
        $("button").click( function(){
            
            audioObj.play();
            
            console.log("kliknija");
            
            $("button").toggleClass("odolje dodolje");
            $(".odolje").html("Odolje");
            $(".dodolje").html("Dodolje");
        });



