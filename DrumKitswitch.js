for(var i=0;i<6;i++){
    document.querySelectorAll("button")[i].addEventListener("click", changebutton);
        var changebutton = this.innerHTML;
        switch(changebutton){
        case "w":
            var audio1 = new Audio('m1.mp3');
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio('m2.mp3');
            audio2.play();
            break;
        case "s":
            var audio = new Audio('m3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('m4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('m5.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('m6.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('m7.mp3');
            audio.play();
            break;
        default: console.log(changebutton);
    }
}

