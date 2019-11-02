//
window.onload = function(){
 
    var scene = document.getElementById('scene');
    var ctext = scene.getContext("2d");
    //var btPausa = document.getElementById("btPausa");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 110);

    const speed = 1;

    var speedx = 0 
    var speedy = 0
    var pontox =10
    var pontoy = 15
    var tam = 25
    var qt = 20
    var applex= 15
    var appley=15

    var trail = [];
    tail = 5;

    function game(){
        pontox = pontox + speedx;
        pontoy = pontoy + speedy;
        if (pontox <0) {
            pontox = qt-1;
        }
        if (pontox > qt-1) {
            pontox = 0;
        }
        if (pontoy < 0) {
            pontoy = qt-1;
        }
        if (pontoy > qt-1) {
            pontoy = 0;
        }

        ctext.fillStyle = "black";
        ctext.fillRect(0,0, scene.width, scene.height);

        ctext.fillStyle = "green";
        ctext.fillRect(applex * tam , appley * tam, tam ,tam);

        ctext.fillStyle = "orange";
        for (var i = 0; i < trail.length; i++) {
            ctext.fillRect(trail[i].x*tam, trail[i].y*tam, tam-1,tam-1);
            if (trail[i].x == pontox && trail[i].y == pontoy)
            {
                speedx = 0 
                speedy = 0;
                tail =5;
            }
        }

        trail.push({x:pontox,y:pontoy })
        while (trail.length > tail) {
            trail.shift();
        }

        if (applex==pontox && appley==pontoy){
            tail++;
            applex = Math.floor(Math.random() * qt);
            appley = Math.floor(Math.random() * qt);
        }

    }

    function novoJogo() {
        btPausa.innerHTML = "Iniciar";
        btPausa.disabled = false;
        desenhar();
       }

    function keyPush(event){

        switch (event.keyCode) {
            case 37: // Left
                speedx = -speed;
                speedy = 0;
                break;
            case 38: // up
                speedx = 0;
                speedy = -speed;
                break;
            case 39: // right
                speedx = speed;
                speedy = 0;
                break;
            case 40: // down
                speedx = 0;
                speedy = speed;
                break;         
            default:
               
                break;
        }


    }

}
