function keydown() {

    document.addEventListener('keydown', function (e) {
        let code = e.key;
        let monAudio = document.getElementById(code);
        if (!monAudio) return;

        console.log(monAudio);
        monAudio.previousElementSibling.classList.add("sound-active");
        monAudio.currentTime = 0;
        monAudio.play();
        monAudio.addEventListener('ended', function (e) {
            monAudio.previousElementSibling.classList.remove("sound-active");
        })

    })

}



function Mouseclick() {
    document.addEventListener('click', function (e) {


        let code = e.target.nextElementSibling.getAttribute('id')

        let monAudio = document.getElementById(code);
        if (!monAudio) return;
        monAudio.previousElementSibling.classList.add("sound-active");

        // console.log(monAudio);
        monAudio.currentTime = 0;
        monAudio.play();
        monAudio.addEventListener('ended', function (e) {
            monAudio.previousElementSibling.classList.remove("sound-active");
        })

    })
}

export function all(){
    keydown(); 
    Mouseclick();
}