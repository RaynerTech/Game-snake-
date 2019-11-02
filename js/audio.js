//controles do audio

document.addEventListener("DOMContentLoaded", function(){
    var audio = document.getElementById("audio");
     
    document.getElementById("play").addEventListener("click", function(){
        audio.play();
        console.log("Play");
    }, false);
     
    document.getElementById("pause").addEventListener("click", function(){
        audio.pause();
        console.log("pause");
    }, false);
     
    document.getElementById("volume").addEventListener("mousemove", function(){
        var volume = document.getElementById("volume").value;
        audio.volume = volume;
        console.log(volume);
    }, false);
     
}, false);